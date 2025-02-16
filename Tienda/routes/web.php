<?php

use App\Http\Controllers\ProductosController;
use Illuminate\Support\Facades\Route;

use function Pest\Laravel\delete;

Route::get('/', function () {
    return view('welcome');
    
});
