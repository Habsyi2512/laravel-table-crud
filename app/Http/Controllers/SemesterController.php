<?php

namespace App\Http\Controllers;

use App\Models\Semester;
use Illuminate\Http\Request;

class SemesterController extends Controller
{
    public function store(Request $request)
    {
          // Validasi data
    $request->validate([
        'semester.*.nama' => 'required|string|max:255', // Validasi untuk setiap item
    ]);

    // Siapkan data untuk di-insert
    $dataToInsert = [];
    foreach ($request->semester as $semesterData) {
        $dataToInsert[] = [
            'nama' => $semesterData['nama'],
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    // Simpan data ke database
    Semester::insert($dataToInsert);

    return back()->with([
        'message' => 'Data Semester berhasil ditambahkan!',
    ]);
    }

    public function destroy(Request $request)
    {
        $ids = $request->input('ids');
        if (is_array($ids) && count($ids) > 0) {
            Semester::destroy($ids);
            return redirect()->back()->with([
                'message' => 'data Semester berhasil dihapus'
            ]);
        }

        return response()->json(['message' => 'Tidak ada data yang dipilih untuk dihapus'], 400);
    }

    public function update(Request $request)
    {
        $items = $request->semester;
        foreach ($items as $item ){
            Semester::where('id', $item['id'])->update([
                'nama' => $item['nama'],
                'updated_at' => now(),
            ]);
        }
        return back()->with('message', 'Data semester berhasil diperbarui!');
    }
}
