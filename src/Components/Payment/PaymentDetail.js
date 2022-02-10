import React, { useState } from 'react'
import { useCartContext } from "../../context/cartContext";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Formik , Form , Field , ErrorMessage } from 'formik';
import { FiShoppingCart } from 'react-icons/fi'
import './PaymentDetail.css'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { getFirestore, query, collection, getDocs , where, addDoc, documentId, writeBatch } from 'firebase/firestore'

const PaymentDetail = () => {
    const { totalItems, cartList, cleanCart, deleteItem} = useCartContext()
    const [datosFormulario, setDatosFormulario]  = useState({}) 
    const [formSend, setFormSend] = useState(false); 
    const [orderId, setOrderId] = useState('');
    
    const actualizarStock= async()=>{
        //Actualización Stock
        
        const db=getFirestore();
        const queryCollection = collection(db, 'items')
        const queryUpdateStock = query(queryCollection, where(documentId(), 'in', cartList.map(it => it.id)))
        const batch = writeBatch(db)    
        await getDocs (queryUpdateStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {stock: res.data().stock - cartList.find(item => item.id === res.id).quantity})))
            .catch(err => err)
            .finally(() => {
            const compraHecha= () => toast.success('Compra finalizada');
            compraHecha()
            })
        batch.commit()
    }

    return (
        <div className='body'>
            <>
            <section className={ formSend === true ? "off" : "on"}>
                <h4>Ultimo paso, por favor completa el formulario con tus datos</h4>
                <div>      
                <Formik
                    initialValues={
                        {
                        nombre: '',
                        confNombre:'',
                        apellido: '',
                        confApellido:'',
                        email: '', 
                        confEmail: '',
                        telefono: '', 
                        confTelefono: ''
                        }
                    }
      
                    validate ={(valoresForm)=> {
                    
                        let formErrors = {};
                    
                        if(!valoresForm.nombre) {
                        formErrors.nombre = 'Ingrese su nombre'
                        } else if (!/^[A-Z]+$/i.test(valoresForm.nombre)) {
                        formErrors.nombre = 'El nombre solo puede contener letras'
                        }

                        if(!valoresForm.confNombre){
                            formErrors.confNombre = 'Vuelve a ingresar el Nombre'
                        } else if(valoresForm.confNombre !== valoresForm.nombre){
                            formErrors.confNombre  = 'Los campos deben coincidir'
                        } else if (!/^[A-Z]+$/i.test(valoresForm.confNombre)) {
                            formErrors.confNombre = 'El nombre solo puede contener letras'
                        }
                        
                        if(!valoresForm.apellido) {
                        formErrors.apellido = 'Ingrese su apellido'
                        } else if (!/^[A-Z]+$/i.test(valoresForm.apellido)) {
                        formErrors.apellido = 'El apellido solo puede contener letras '
                        }

                        if(!valoresForm.confApellido){
                            formErrors.confApellido = 'Vuelve a ingresar el apellido'
                        } else if(valoresForm.confApellido !== valoresForm.apellido){
                            formErrors.confApellido  = 'Los campos deben coincidir'
                        } else if (!/^[A-Z]+$/i.test(valoresForm.confApellido)) {
                            formErrors.confApellido = 'El apellido solo puede contener letras'
                        }
        
                        if(!valoresForm.telefono){
                            formErrors.telefono = 'Ingrese un numero de telefono'
                        } else if (!/^[0-9]+$/i.test(valoresForm.telefono)) {
                            formErrors.telefono = 'El teléfono debe contener solo numeros'
                        } 
                        
                        if(!valoresForm.confTelefono){
                            formErrors.confTelefono = 'Vuelve a ingresar el numero de telefono'
                        } else if(valoresForm.confTelefono !== valoresForm.telefono){
                            formErrors.confTelefono  = 'Los campos deben coincidir'
                        } else if (!/^[0-9]+$/i.test(valoresForm.confTelefono)) {
                            formErrors.confPconfTelefonohone = 'El teléfono debe contener solo numeros'
                        }
        
        
                        if(!valoresForm.email) {
                            formErrors.email = 'Ingrese un correo'
                        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valoresForm.email)) {
                            formErrors.email = 'El correo solo puede contener letras, numeros, puntos , guiones y guiones bajos  '
                        }
        
                        if(!valoresForm.confEmail){
                            formErrors.confEmail = 'Vuelve a ingresar el correo'
                        } else if ( valoresForm.confEmail !== valoresForm.email ) {
                            formErrors.confEmail = 'Los campos deben coincidir'
                        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valoresForm.confEmail)) {
                            formErrors.confEmail = 'El correo solo puede contener letras, numeros, puntos , guiones y guion bajo  '
                        }
        
                    
                        return formErrors;
                }}
             
                onSubmit={ (valoresForm, {resetForm}) => {         

                    let order={}
                    order.buyer = valoresForm
                    order.total=totalItems();

                    order.items=cartList.map(item=>{
                        const id= item.id;
                        const nombre= item.Nombre;
                        const precio= item.Precio*item.cantidad;
                        return {id, nombre,precio}
                    })

                    //Orden de Compra
                    const db=getFirestore();
                    const orderCollection= collection(db, "ordenes")
                    addDoc(orderCollection, order)
                    .then (resp=>setOrderId(resp.id))
                    .catch(err=>err)
                    .finally (()=>orderId)

                    actualizarStock()
                
                    resetForm();
       
                    setFormSend(true)
      
                    setDatosFormulario(order.buyer)
                      
                }}
              >
                  {({ errors })=> (
                      <Form >
                          <section className="form-container">
                              <div className="input-field">
                                  <label htmlFor="nombre">Nombre</label>
                                  <Field 
                                      type="text" 
                                      id="nombre" 
                                      name="nombre" 
                                      placeholder='Ingrese su nombre' 
                                      />
                                      <ErrorMessage  name="nombre" component={()=> <div className="error-p">{errors.nombre}</div>} />
                              </div>
                              
                              <div className="input-field">
                                  <label htmlFor="confNombre">Repetir Nombre</label>
                                  <Field 
                                      type="text" 
                                      id="confNombre" 
                                      name="confNombre" 
                                      placeholder='Confirme su nombre' 
                                      />
                                      <ErrorMessage name="confNombre" component={()=> <div className="error-p">{errors.confNombre}</div>} />
                              </div>

                               <div className="input-field">
                                  <label htmlFor="apellido">Apellido</label>
                                  <Field 
                                      type="text" 
                                      id="apellido" 
                                      name="apellido" 
                                      placeholder='Ingrese su apellido' 
                                      />
                                      <ErrorMessage name="apellido" component={()=> <div className="error-p">{errors.apellido}</div>} />
      
                              </div>

                              <div className="input-field">
                                  <label htmlFor="confApellido">Repetir Apellido</label>
                                  <Field 
                                      type="text" 
                                      id="confApellido" 
                                      name="confApellido" 
                                      placeholder='Reingrese su apellido' 
                                      />
                                      <ErrorMessage name="confApellido" component={()=> <div className="error-p">{errors.confApellido}</div>} />
      
                              </div>
      
                              <div className="input-field">
                                  <label htmlFor="email">Email</label>
                                  <Field 
                                      type="email" 
                                      id="email" 
                                      name="email" 
                                      placeholder='Ingrese su email' 
                                      />
                                      <ErrorMessage className="error-p" name="email" component={()=> <div className="error-p">{errors.email}</div>} />
                              </div>
                              
                              <div className="input-field">
                                  <label htmlFor="confEmail">Repetir Email</label>
                                  <Field 
                                      type="email" 
                                      id="confEmail" 
                                      name="confEmail" 
                                      placeholder='Confirme su email' 
                                      />
                                      <ErrorMessage name="confEmail" component={()=> <div className="error-p">{errors.confEmail}</div>} />
                              </div>
                          
                              <div className="input-field">
                                  <label htmlFor="telefono">Telefono</label>
                                  <Field 
                                      type="text" 
                                      id="telefono" 
                                      name="telefono" 
                                      placeholder='Escriba su telefono'
                                      />
                                      <ErrorMessage name="telefono" component={()=> <div className="error-p">{errors.telefono}</div>} />
                              </div>
                              
                              <div className="input-field">
                                  <label htmlFor="confTelefono">Telefono</label>
                                  <Field 
                                      type="text" 
                                      id="confTelefono" 
                                      name="confTelefono" 
                                      placeholder='Reingrese su telefono' 
                                      />
                                      <ErrorMessage name="confTelefono" component={()=> <div className="error-p">{errors.confTelefono}</div>} />
                              </div>
      
                              <button className="btn btn-success" type="submit" style={{marginTop:10, marginLeft:20}}><FiShoppingCart/>Finalizar Compra</button>
      
                          </section>
                      </Form>
                  ) }
              </Formik>
                   
              <div>
              {cartList.map(prod =>  
                (<div className="contenedorCarrito" key={prod.id}>
                    <img src={prod.img} alt=""/>
                    <li key={prod.id}>  {prod.Nombre} - Unidades: {prod.cantidad} Precio: $ {(prod.Precio) * prod.cantidad}
                        <button className="btn btn-danger" style={{ marginLeft:10}} onClick={() => deleteItem(prod.id)}>Eliminar item</button>
                    </li>
                </div>)
                ) }
                  <div> 
                      <p style={{color:'black'}}> Total : ${totalItems()}</p>
                    </div>  
              </div>
      
            </div>          
            </section>      
                { formSend && 
                    <section>
                        <div>
                            <h2 style={{color:'black'}}>¡Pago realizado!</h2>
                            <p style={{color:'black'}}>Gracias por su compra {datosFormulario.nombre} {datosFormulario.apellido}</p>
                            <p style={{color:'black'}}>El código de orden de su pedido de compra es {orderId}</p>
                        </div>
                  
                        <div className="grid-bill">
                      
                            <div className="data-order-buyer">
                                <h4>Sus datos</h4>

                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th> Nombre </th>
                                            <th> Apellido </th>
                                            <th> Teléfono </th>
                                            <th> E-mail </th>
                                            <th> Orden de compra </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th> {datosFormulario.nombre}</th>
                                            <td> {datosFormulario.apellido}</td>
                                            <td> {datosFormulario.telefono}</td>
                                            <td> {datosFormulario.email}</td>
                                            <td> {orderId}</td>
                                            </tr>
                                    </tbody>
                                </Table>
                                
                                <Link to="/"><Button variant="success" onClick={()=> cleanCart()}>Volver al Inicio</Button></Link>
                            </div>
                        </div>
                    </section>           
                }           
            </>
        </div>);
}
export default PaymentDetail