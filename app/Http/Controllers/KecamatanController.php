<?php
namespace App\Http\Controllers;

use App\Models\Kecamatan;
use Illuminate\Http\Request;

class KecamatanController extends Controller
{
    public function store(Request $request)
    {
          // Validasi data
    $request->validate([
        'kecamatan.*.nama' => 'required|string|max:255', // Validasi untuk setiap item
    ]);

    // Siapkan data untuk di-insert
    $dataToInsert = [];
    foreach ($request->kecamatan as $kecamatanData) {
        $dataToInsert[] = [
            'nama' => $kecamatanData['nama'],
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    // Simpan data ke database
    Kecamatan::insert($dataToInsert);

    return redirect()->back()->with('success', 'Data kecamatan berhasil disimpan!');
    }
}
