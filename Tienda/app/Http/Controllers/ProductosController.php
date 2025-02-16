<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Productos;

class ProductosController extends Controller
{

    //Regresa todos los productos que existan en la base de datos;
    public function Productos(){
        $productos = Productos::all();
        return response()->json($productos);
    }

    //Regresa un prooducto filtrado por su nombre

    public function ProductosPorNombre(Request $request){
            $search = $request->input('search');

            $productos = Productos::when($search, function($quary, $search){
                
                if (is_numeric($search)) {
                    return $quary->where('id', $search);
                }
                // Si no es un número, busca por nombre
                return $quary->where('nombre', 'LIKE', "%$search%");

            })->get();

            return response()->json($productos);
    }

    //funcion para crear un nuevo producto en la base de datos

    public function AgregarProductos(Request $request){ 
        $request ->validate([
            'Nombre' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|string',
            'stock' => 'required|string',
        ]);

        $product = Productos::create([
            'Nombre' => $request->input('Nombre'),
            'description' => $request->input('description'), 
            'price' => $request->input('price'),
            'stock' => $request->input('stock'),
        ]);

        return response()->json($product, 201);
    }

    //funcion para actualizar un producto 

    public function ActualizarProductos(Request $request, $id)
    {

        
        $request->validate([
            'Nombre' => 'required|string|max:255',    
            'description' => 'nullable|string|max:1000', 
            'price' => 'required|string',             
            'stock' => 'required|string',              
        ]);
    
        try {
            // Buscar el producto por el ID
            $product = Productos::findOrFail($id);
    
            // Actualizar el producto con los datos validados
            $product->update([
                'Nombre' => $request->input('Nombre'),
                'description' => $request->input('description'),
                'price' => $request->input('price'),
                'stock' => $request->input('stock'),
            ]);
    
            // Devolver el producto actualizado
            return response()->json($product);
        } catch (\Exception $e) {
            // Si ocurre un error, devolver un mensaje de error
            return response()->json(['error' => 'No se pudo actualizar el producto'], 500);
        }
    }
    
    //funcion para eliminar un producto en la base de datos

    public function EliminarProductos($id){
        $product = Productos::findOrfail($id);
        $product -> delete();

        return response()->json(null,204);
    }
}
