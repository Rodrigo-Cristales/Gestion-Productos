import React from 'react'
import Navbar from '../componets/Navbar'
import MostrarProductos from '../componets/MostrarProductos'
const Productos = () => {
  return (
    <>   
        <nav>
            <Navbar/>
        </nav>
        <main>
            <MostrarProductos/>
        </main>
    </>
  )
}

export default Productos
