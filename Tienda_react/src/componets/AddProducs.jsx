import React from 'react'
import axios from '../axios';

const AddProducs = async (Nombre, description, price,stock) => {
    try{
        await axios.post('/agregar', {Nombre,description,price,stock});
        return {success:true, message : 'Producto agregado exitosamente'};
    }catch(error){
        console.error('Error al agregar el producto:', error.response);
        return { success: false, message: error.response.data.message || 'Error al agregar el producto.' };
    }
}

export default AddProducs