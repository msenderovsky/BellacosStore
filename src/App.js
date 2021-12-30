import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

const App =() => {

    return (
        <div className="App">
          <NavBar/>
          <ItemListContainer greeting='Bienvenido a mi tienda'/>
        </div>
    )
}

export default App
