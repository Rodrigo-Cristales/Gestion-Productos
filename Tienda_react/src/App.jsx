import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './page/Login'
import AgregarProductos from './page/AgregarProductos'
import Productos  from './page/Productos'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

function App() {

  return (
    <>
    <Router>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/agregar-productos" element={<AgregarProductos/>}/>
        <Route path ="/productos" element={<Productos/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
