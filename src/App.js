import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/Navbar/NavBar'
import Cart from './Components/Navbar/CartWidget'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App =() => {

    return (
        <div className="App">
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route exact path='/' element={<ItemListContainer greeting='Bienvenido a mi tienda'/>}/>
              <Route exact path='/categoria/:idCategoria' element={<ItemListContainer greeting='Bienvenido a mi tienda'/>}/>
              <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer/>}/>
              <Route exact path='/cart' element={<Cart/>}/>
            </Routes>
          </BrowserRouter>
        </div>
    )
}

export default App