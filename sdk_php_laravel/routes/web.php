<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaiementController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/', [PaiementController::class, 'index']);
Route::get('/payer', [PaiementController::class, 'payer']);
