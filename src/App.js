import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/Navbar/NavBar'
import Cart from './Components/Cart/Cart'
import Header from './Components/Header/Header'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext'

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
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
        </div>
    )
}

export default App