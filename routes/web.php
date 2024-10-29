<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BerandaController;
use App\Http\Controllers\EditTabelController;
use App\Http\Controllers\KecamatanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SemesterController;
use App\Http\Controllers\TahunController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [BerandaController::class, 'index']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('Admin');
    Route::get('/tabel/edit', [EditTabelController::class, 'index']);
    

    // manage input fields jumlah penduduk
    
    // handle store
    Route::post('/kecamatan/post', [KecamatanController::class, 'store']);
    Route::post('/tahun/post', [TahunController::class, 'store']);
    Route::post('/semester/post', [SemesterController::class, 'store']);

    // handle delete data tabel
    Route::delete('/tabel/kecamatan/destroy',[KecamatanController::class, 'destroy'])->name('tabel.kecamatan.destroy');
    Route::delete('/tabel/tahun/destroy',[TahunController::class, 'destroy'])->name('tabel.tahun.destroy');
    Route::delete('/tabel/semester/destroy',[SemesterController::class, 'destroy'])->name('tabel.semester.destroy');

    // update data tabel
    Route::patch('/tabel/kecamatan/update',[KecamatanController::class, 'update'])->name('tabel.kecamatan.update');
    Route::patch('/tabel/tahun/update',[TahunController::class, 'update'])->name('tabel.tahun.update');
    Route::patch('/tabel/semester/update',[SemesterController::class, 'update'])->name('tabel.semester.update');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
