import React from 'react'
import axios from '../axios';

    const AuthController = async(email, password) =>{
        try{
            const response = await axios.post('/login', {email, password});
            return {success: true};
        }catch(error){
            return { success: false, message: 'Credenciales inválidas' };
        }
    }

    export default AuthController;
