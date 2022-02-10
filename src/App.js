import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/Navbar/NavBar'
import Cart from './Components/Cart/Cart'
import Payment from './Components/Payment/Payment'
import Header from './Components/Header/Header'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext'
import { ToastContainer} from 'react-toastify';

const App =() => {

    return (
        <div className="App">
          <CartContextProvider>
            <BrowserRouter>
              <NavBar/>
              <Header greeting='Bienvenido a mi tienda'/>
              <Routes>
                <Route exact path='/' element={<ItemListContainer/>}/>
                <Route exact path='/categoria/:idCategoria' element={<ItemListContainer greeting='Bienvenido a mi tienda'/>}/>
                <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer/>}/>
                <Route exact path='/cart' element={<Cart/>}/>
                <Route exact path='/checkout' element={<Payment/>}/>
              </Routes>
            </BrowserRouter>
            <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={true} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
          </CartContextProvider>
        </div>
    )
}

export default App