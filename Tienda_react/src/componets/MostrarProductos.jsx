import React, { useState, useEffect } from 'react';
import ActualizarProducto from './ActualizarProducto';
import Swal from 'sweetalert2';
import axios from 'axios';

const MostrarProductos = () => {
    const [productos, setProductos] = useState([]);  
    const [loading, setLoading] = useState(false);   
    const [error, setError] = useState(null);        
    const [search, setSearch] = useState(""); 
    const [query, setQuery] = useState("");  
    const [productoEncontrado, setProductoEncontrado] = useState(null); // Producto filtrado
    const [mostrarModal, setMostrarModal] = useState(false); // Control del modal
    const [mostrarModalActualizar, setMostrarModalActualizar] = useState(false);
    const [productoAEditar, setProductoAEditar] = useState("");

    useEffect(() => {
        if (query.trim() !== "") {
            fetchProducto(); // Busca el producto específico
        } else {
            fetchProductos(); // Sino encuentra el producto los carga todos 
        }
    }, [query]);

    const fetchProductos = async (id) => {
        try {
            setLoading(true);
            const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
            setProductos(Array.isArray(response.data) ? response.data : []);
        } catch (err) {
            setError('Error al obtener los productos');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    const fetchProducto = async () => {
        try {
            setLoading(true);
            const url = `http://127.0.0.1:8000/api/products/search?search=${encodeURIComponent(query)}`;
            const response = await axios.get(url);

            if (response.data.length > 0) {
                setProductoEncontrado(response.data[0]); 
                setMostrarModal(true); 
            } else {
                setProductoEncontrado(null);
                setMostrarModal(false);
            }
        } catch (err) {
            setError('Error al buscar el producto');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    const eliminarProducto = async (id) => {
        const confirmacion = await Swal.fire({
            title: '¿Estás seguro?',
            text: "¡Este producto será eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        });
    
        if (confirmacion.isConfirmed) {
            try {
                const response = await axios.delete(`http://127.0.0.1:8000/api/products/eliminar/${id}`);
                
                setProductos((prevProductos) => 
                    prevProductos.filter((producto) => producto.id !== id)
                );
    
                Swal.fire({
                    title: '¡Eliminado!',
                    text: 'El producto ha sido eliminado correctamente.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                });
    
                console.log('Producto eliminado:', response);
            } catch (error) {
                console.error('Error al eliminar:', error.response ? error.response.data : error.message);
    
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al eliminar el producto.',
                    icon: 'error',
                    timer: 2000,
                    showConfirmButton: false
                });
            }
        }
}
    const handleActualizarClick = (id) => {
        setProductoAEditar(id); 
        setMostrarModalActualizar(true);   
    };

    return (
        <div className="container">
            <h2 className="text-center">Lista de Productos</h2>

            {/* Barra de búsqueda */}
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar por nombre o ID..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button 
                    className="btn btn-primary" 
                    onClick={() => setQuery(search.trim())}
                >
                    Buscar
                </button>
            </div>

            {loading && <p>Cargando productos...</p>}
            {error && <p>{error}</p>}

            {/* Lista de Productos */}
            <div className="row">
                {productos.length > 0 ? (
                    productos.map((producto) => (
                        <div className="col-md-4" key={producto.id}>
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{producto.Nombre}</h5>
                                    <p className="card-text">{producto.description}</p>
                                    <p className="card-text">Precio: ${producto.price}</p>
                                    <p className="card-text">Stock: {producto.stock}</p>
                                    <button 
                                            className="btn btn-danger m-2" 
                                            onClick={() => eliminarProducto(producto.id)}
                                        >
                                            Eliminar
                                        </button>
                                        <button 
                                        className="btn btn-warning" 
                                        onClick={() => handleActualizarClick(producto.id)}
                                    >
                                        Actualizar
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>⚠️ No hay productos disponibles.</p> 
                )}

            {mostrarModalActualizar && productoAEditar && (
                            <ActualizarProducto 
                                id={productoAEditar} 
                                setMostrarModal={setMostrarModalActualizar} 
                                setProductos={setProductos}
                                productos={productos}
                            />
                        )}
            </div>

            {/* Ventana Modal para mostrar el producto encontrado */}
            {productoEncontrado && (
    <div className={`modal ${mostrarModal ? 'd-block' : 'd-none'}`} tabIndex="-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div className="modal-dialog">
            <div className="modal-content" style={{ backgroundColor: "#fff", color: "#000", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}>
                <div className="modal-header">
                    <h5 className="modal-title">Producto Encontrado</h5>
                    <button 
                        type="button" 
                        className="btn-close" 
                        onClick={() => setMostrarModal(false)}
                        style={{ filter: "invert(1)" }} 
                    ></button>
                </div>
                <div className="modal-body">
                    <h5>{productoEncontrado.Nombre}</h5>
                    <p>{productoEncontrado.description}</p>
                    <p><strong>Precio:</strong> ${productoEncontrado.price}</p>
                    <p><strong>Stock:</strong> {productoEncontrado.stock}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setMostrarModal(false)}>Cerrar</button>
                </div>
            </div>
        </div>
    </div>
)}
        </div>
    );
};

export default MostrarProductos;
