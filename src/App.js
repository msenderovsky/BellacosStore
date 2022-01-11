import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

const App =() => {

    return (
        <div className="App">
          <NavBar/>
          <ItemListContainer greeting='Bienvenido a mi tienda'/>
          <ItemDetailContainer/>
        </div>
    )
}

export default App
