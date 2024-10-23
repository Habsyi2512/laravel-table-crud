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
    Route::post('/kecamatan/post', [KecamatanController::class, 'store']);

    // manage input fields jumlah penduduk
    // delete one or many kecamatan using destroy
    Route::delete('/tabel/kecamatan/destroy',[KecamatanController::class, 'destroy'])->name('tabel.kecamatan.destroy');
    // delete one or many tahun using destroy
    Route::delete('/tabel/tahun/destroy',[TahunController::class, 'destroy'])->name('tabel.tahun.destroy');
    // delete one or many tahun using destroy
    Route::delete('/tabel/semester/destroy',[SemesterController::class, 'destroy'])->name('tabel.semester.destroy');

    // update one or many kecamatan using patch
    Route::patch('',[KecamatanController::class, 'update'])->name('tabel.kecamatan.update');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
