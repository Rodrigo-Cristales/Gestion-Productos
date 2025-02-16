<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductosController;
use Illuminate\Support\Facades\Route;


        Route::post('/login', [AuthController::class, 'Login']);

        Route::get('/products/{id}', [ProductosController::class, 'Productos']);
        Route::get('/products/search', [ProductosController::class, 'ProductosPorNombre']);
        Route::post('/agregar', [ProductosController::class, 'AgregarProductos']);
        Route::put('/products/actualizar/{id}', [ProductosController::class, 'ActualizarProductos']);
        Route::delete('/products/eliminar/{id}', [ProductosController::class, 'EliminarProductos']);


        Route::middleware('auth:sanctum')->group(function () {
            Route::post('/logout', [AuthController::class, 'Logout']);
        });