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

    return back()->with([
        'message' => 'Data kecamatan berhasil ditambahkan',
    ]);
    }

    public function destroy(Request $request)
    {
        $ids = $request->input('ids');
        if (is_array($ids) && count($ids) > 0) {
            Kecamatan::destroy($ids);
            return redirect()->back()->with([
                'message' => 'Data kecamatan berhasil dihapus'
            ]);
        }

        return response()->json(['message' => 'Tidak ada data yang dipilih untuk dihapus'], 400);
    }

    public function update(Request $request)
    {
        $items = $request->kecamatan;
        foreach ($items as $item ){
            Kecamatan::where('id', $item['id'])->update([
                'nama' => $item['nama'],
                'updated_at' => now(),
            ]);
        }
        return back()->with('message', 'Data kecamatan berhasil diperbarui woy!');
    }

}
