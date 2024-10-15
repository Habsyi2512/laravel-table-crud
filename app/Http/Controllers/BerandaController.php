<?php

namespace App\Http\Controllers;

use App\Models\JumlahPenduduk;
use App\Models\Year;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class BerandaController extends Controller
{
    public function index(?Request $request)
    {
        $currentYear = Carbon::now()->year;
        // Mengambil data jumlah penduduk berdasarkan tahun yang dipilih
        $penduduk = JumlahPenduduk::with(['kecamatan', 'semester', 'year'])
            ->whereHas('year', function ($query) use ($request , $currentYear) {
                $query->where('tahun', $request->year ?? $currentYear);
            })
            ->get();

        return Inertia::render('Beranda', [
            'penduduk' => $penduduk,
            'dataTahun' => Year::all(),
            'tahunSekarang' => $request->year ?? $currentYear
        ]);
    }

    public function getByYear(?Request $request)
    {
        $currentYear = Carbon::now()->year;
        // Mengambil data jumlah penduduk berdasarkan tahun yang dipilih
        $penduduk = JumlahPenduduk::with(['kecamatan', 'semester', 'year'])
            ->whereHas('year', function ($query) use ($request , $currentYear) {
                $query->where('tahun', $request->year ?? $currentYear);
            })
            ->get();

        return Inertia::render('Beranda', [
            'penduduk' => $penduduk,
            'dataTahun' => Year::all(),
            'tahunSekarang' => $request->year ?? $currentYear
        ]);
    }
}
