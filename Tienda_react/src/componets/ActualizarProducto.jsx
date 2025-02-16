import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActualizarProducto = ({ id, setMostrarModal, setProductos, productos }) => {
    const [producto, setProducto] = useState({
        Nombre: '',
        description: '',
        price: '',
        stock: ''
    });

    // Cargar los datos del producto a editar
    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
                setProducto({
                    Nombre: response.data.Nombre,
                    description: response.data.description,
                    price: response.data.price, 
                    stock: response.data.stock
                });
            } catch (error) {
                console.error('Error al obtener el producto:', error);
            }
        };
        fetchProducto();
    }, [id]);

    // Manejar el cambio de los inputs del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
    setProducto((prevProducto) => ({
        ...prevProducto,
        [name]: value
    }));
    };

    // Enviar los datos actualizados al backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/products/actualizar/${id}`, producto);
            
            setProductos((prevProductos) =>
                prevProductos.map((prod) => (prod.id === id ? response.data : prod))
            );
            
            setProducto(response.data);
            
            // Cerrar el modal después de actualizar
            setMostrarModal(false);
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    };
    return (
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <div className="modal-dialog">
                <div className="modal-content" style={{ backgroundColor: "#fff", color: "#000" }}>
                    <div className="modal-header">
                        <h5 className="modal-title">Actualizar Producto</h5>
                        <button type="button" className="btn-close" onClick={() => setMostrarModal(false)}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Nombre"
                                    value={producto.Nombre}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Descripción</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="description"
                                    value={producto.description}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Precio</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="price"
                                    value={producto.price}
                                    onChange={handleChange}
                                
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Stock</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="stock"
                                    value={producto.stock}
                                    onChange={handleChange}
                                
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Actualizar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActualizarProducto;
