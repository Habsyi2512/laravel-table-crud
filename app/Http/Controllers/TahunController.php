<?php

namespace App\Http\Controllers;

use App\Models\Year;
use Illuminate\Http\Request;

class TahunController extends Controller
{
    public function store(Request $request)
    {
          // Validasi data
    $request->validate([
        'tahun.*.nama' => 'required|string|max:255', // Validasi untuk setiap item
    ]);

    // Siapkan data untuk di-insert
    $dataToInsert = [];
    foreach ($request->tahun as $tahunData) {
        $dataToInsert[] = [
            'nama' => $tahunData['nama'],
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    // Simpan data ke database
    Year::insert($dataToInsert);

    return back()->with([
        'message' => 'Data Tahun berhasil ditambahkan!',
    ]);
    }

    public function destroy(Request $request)
    {
        $ids = $request->input('ids');
        if (is_array($ids) && count($ids) > 0) {
            Year::destroy($ids);
            return redirect()->back()->with([
                'message' => 'data tahun berhasil dihapus'
            ]);
        }

        return response()->json(['message' => 'Tidak ada data yang dipilih untuk dihapus'], 400);
    }

    public function update(Request $request)
    {
        $items = $request->tahun;
        foreach ($items as $item ){
            Year::where('id', $item['id'])->update([
                'nama' => $item['nama'],
                'updated_at' => now(),
            ]);
        }
        return back()->with('message', 'Data tahun berhasil diperbarui!');
    }
}
