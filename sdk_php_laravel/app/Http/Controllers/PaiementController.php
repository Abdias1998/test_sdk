<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Feexpay\FeexpayPhp\FeexpayClass;

class PaiementController extends Controller
{
    public function index()
    {
        return view('paiement');
    }

    public function payer()
    {
        $id = env('FEEXPAY_SHOP_ID');
        $token = env('FEEXPAY_API_TOKEN');
        $callback_url = env('FEEXPAY_CALLBACK_URL');
        $error_callback_url = env('FEEXPAY_ERROR_CALLBACK_URL');
        $mode = env('FEEXPAY_MODE');

        $feexpay = new FeexpayClass($id, $token, $callback_url, $mode, $error_callback_url);
        $price = 100;

        return view('paiement', ['feexpay' => $feexpay, 'price' => $price]);
    }
}
