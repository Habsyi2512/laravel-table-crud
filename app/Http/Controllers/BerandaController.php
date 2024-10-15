<?php

namespace App\Http\Controllers;

use App\Models\JumlahPenduduk;
use App\Models\Year;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class BerandaController extends Controller
{
    public function index(Request $request)
    {
        // Cek apakah tahun dipilih melalui request, jika tidak gunakan tahun sekarang
        $year = $request->input('year', Carbon::now()->year);

        // Mengambil data jumlah penduduk berdasarkan tahun yang dipilih
        $penduduk = JumlahPenduduk::with(['kecamatan', 'semester', 'year'])
            ->whereHas('year', function ($query) use ($year) {
                $query->where('tahun', $year);
            })
            ->get();

        // Kirimkan data ke view dengan data penduduk dan tahun
        return Inertia::render('Beranda', [
            'penduduk' => $penduduk,
            'dataTahun' =>  Year::orderBy('tahun', 'desc')->get(),
            'tahunSekarang' => $year
        ]);
    }
}
