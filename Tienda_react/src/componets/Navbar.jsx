import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Gestion de Productos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to={'/productos'}>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/productos'}>Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/agregar-productos'}>Agregar productos</Link>
                        </li>
                    </ul>
                    <Link to={'/'} className="btn btn-primary ms-3">Cerrar sesión</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
