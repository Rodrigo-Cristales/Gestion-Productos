<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //Login del admin

    public function Login(Request $request){
        $request -> validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
        if(!Auth::attempt($request->only('email', 'password'))){
         return response()->json(['error'=> 'Credenciales invalidad'], 401);
        }
        return response()->json(['message' => 'Login exitoso'], 200);

    }
}
