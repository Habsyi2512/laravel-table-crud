<?php

namespace App\Http\Controllers;

use App\Models\JumlahPenduduk;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BerandaController extends Controller
{
    public function index(){
        return Inertia::render('Beranda', [
            'data' => [
                'name' => 'Habsyi',
                'age' => '20'
            ],
            'penduduk' => JumlahPenduduk::with(['kecamatan', 'semester'])->get()
        ]);
    }
}
