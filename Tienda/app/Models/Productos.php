<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Productos extends Model
{
    use HasFactory;
    protected $table = 'products'; 

    protected $fillable = ['Nombre', 'description', 'price', 'stock'];
    
}
