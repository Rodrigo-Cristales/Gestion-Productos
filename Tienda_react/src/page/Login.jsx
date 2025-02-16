import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import AuthController from '../componets/AuthController';
import Swal from 'sweetalert2';

const Login = () => {

    const  [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

      const handleSubmit = async (e) => {
          e.preventDefault();

          const { success, message } = await AuthController(email, password);

          if (success) {
              // Mostrar alerta de éxito
              Swal.fire({
                  icon: 'success',
                  title: 'Inicio de sesión exitoso',
                  text: 'Bienvenido a admin Gestiona los productos.',
              });
  
              // Redirige a la página de productos después del inicio de sesión exitoso
              navigate('/productos');
          } else {
              // Mostrar alerta de error
              Swal.fire({
                  icon: 'error',
                  title: 'Error en el inicio de sesión',
                  text: message || 'Credenciales incorrectas, por favor intenta de nuevo.',
              });
  
              // Muestra el mensaje de error en el estado
              setError(message);
          }
      };



  return (
    <>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-4 p-4 shadow-lg rounded-4 bg-dark text-light">
        <h2 className="text-center mb-4 text-bg-ligth">Login Tienda</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-floating mb-3">
            <input type="email" className="form-control bg-dark text-white" placeholder="Email address" value={email}  onChange={(e) => setEmail(e.target.value)}  />
            <label>Email</label>
          </div>

          <div className="form-floating mb-3">
            <input type="password" className="form-control bg-dark text-white" placeholder="Password" value={password}   onChange={(e) => setPassword(e.target.value)}   />
            <label>Password</label>
          </div>

          <button type='submit' className="btn btn-primary w-100">Iniciar sesión</button>
        </form>

      </div>
    </div>
    </>
  )
}

export default Login
