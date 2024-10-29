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

    public function handleDeleteFieldsJumlahPenduduk(Request $request)
    {
        
    }

    public function storeInputJumlahPenduduk(Request $request)
{
    $request->validate([
        'dataInputFieldPenduduk.*.district' => 'required|exists:kecamatans,id',
        'dataInputFieldPenduduk.*.year' => 'required|exists:years,id',
        'dataInputFieldPenduduk.*.semester' => 'required|exists:semesters,id',
        'dataInputFieldPenduduk.*.male' => 'required|integer',
        'dataInputFieldPenduduk.*.female' => 'required|integer',
    ]);

    $dataToInsert = array_map(function ($item) {
        return [
            'kecamatan_id' => $item['district'],  // menggunakan ID kecamatan
            'year_id' => $item['year'],          // menggunakan ID tahun
            'semester_id' => $item['semester'],  // menggunakan ID semester
            'laki' => $item['male'],
            'perempuan' => $item['female'],
            'total'=> $item['total'],
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }, $request->dataInputFieldPenduduk);

    JumlahPenduduk::insert($dataToInsert);

    return back()->with([
        'message' => 'Data penduduk berhasil ditambahkan',
    ]);
}

}
