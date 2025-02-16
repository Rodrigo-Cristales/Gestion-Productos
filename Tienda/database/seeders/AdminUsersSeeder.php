<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class AdminUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if(!User :: where('email', 'bot30blaze@gamil.com')->exists()){
            User::create([
                'email' => 'bot30blaze@gmail.com',
                'password' => bcrypt('botblaze30') //contraseña encriptada
            ]);
        }
    }
}
