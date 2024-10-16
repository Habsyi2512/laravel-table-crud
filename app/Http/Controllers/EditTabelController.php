<?php

namespace App\Http\Controllers;

use App\Models\JumlahPenduduk;
use App\Models\Kecamatan;
use App\Models\Semester;
use App\Models\Year;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EditTabelController extends Controller
{
    public function index()
    {
        return Inertia::render('EditTabel',[
            'dataPenduduk' => JumlahPenduduk::paginate(11),
            'dataKecamatan' => Kecamatan::all(), 
            'dataTahun' => Year::all(),
            'dataSemester' => Semester::all(),
        ]);
    }
}
