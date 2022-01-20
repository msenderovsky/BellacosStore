import React from 'react'
import './Header.css'
const Header=({greeting}) =>{

return(
    <div>
        <div className="background">
            <h1>{greeting}</h1>
            <h2>Bellacos Store</h2>
            <p>Encontrá el diseño que estás buscando relacionado a la franquicia Warcraft</p>
        </div>
    </div>
)

}

export default Header