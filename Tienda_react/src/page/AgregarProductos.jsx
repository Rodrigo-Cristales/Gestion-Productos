import React, { useState } from 'react'
import AddProducs from '../componets/AddProducs'
import Navbar from '../componets/Navbar'
import Swal from 'sweetalert2'





const AgregarProductos = () => {
    const [nombre, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [message,setMessage] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        console.log({ nombre, description, price, stock }); // Verifica los datos enviados

        const { success, message } = await AddProducs(nombre, description, price, stock);
        setMessage(message);

        if (success) {
            setName('');
            setDescription('');
            setPrice('');
            setStock('');

            Swal.fire({
                icon: 'success',
                title: 'Producto agregado con éxito',
                text: 'El producto se ha agregado correctamente a la base de datos.',
            });
        } else {
  
            Swal.fire({
                icon: 'error',
                title: 'Error al agregar el producto',
                text: message || 'Hubo un problema al agregar el producto.',
            });
        }
    };



  return (
    <>
    <nav>
        <Navbar/>
    </nav>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-4 p-4 shadow-lg rounded-4 bg-dark text-light">
        <h2 className="text-center mb-4 text-bg-ligth">Agregar Nuevo producto</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-floating mb-3">
            <input 
            type="text" 
            className="form-control bg-dark text-white" 
            placeholder="Nombre producto" 
            value={nombre}
            onChange={(e) => setName(e.target.value)}
            />
            <label>Nombre producto</label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" 
            className="form-control bg-dark text-white" 
            placeholder="Descripcion producto" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <label>Descripcion producto</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number" 
            className="form-control bg-dark text-white" 
            placeholder="Descripcion producto" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
            <label>Price</label>
          </div>
           <div className="form-floating mb-3">
            <input type="number" 
            className="form-control bg-dark text-white" 
            placeholder="Descripcion producto" 
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            />
            <label>Stock</label>
          </div>
        <button type='submit' className="btn btn-primary w-100">Agregar producto</button>
        </form>

      </div>
    </div>
    </>
  )
}

export default AgregarProductos
