<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    //Configuracion de la tabla productos

    public function up(){
        Schema:: create('products', function (Blueprint $table){
            $table->id();
            $table->string('Nombre'); //nombre del producto
            $table->text('description')->nullable(); //descripcion del producto
            $table->decimal('price', 10, 2); //precio del producto
            $table->integer('stock'); //cantidad inicial del producto
            $table->timestamps();
        });
    }

    public function down(){
        Schema::dropIfExists('products');
    }
};
