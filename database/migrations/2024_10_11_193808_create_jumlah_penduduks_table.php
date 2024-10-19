<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jumlah_penduduks', function (Blueprint $table) {
            $table->id();
        
            // Foreign key untuk year_id ke tabel years
            $table->foreignId('year_id')->constrained('years')->onDelete('cascade');
        
            // Foreign key untuk kecamatan_id ke tabel kecamatans dengan onDelete cascade
            $table->foreignId('kecamatan_id')
                  ->constrained('kecamatans')
                  ->onDelete('cascade'); // Mengatur cascade delete
        
            // Foreign key untuk semester_id ke tabel semesters
            $table->foreignId('semester_id')->constrained('semesters');
        
            // Kolom data lainnya
            $table->integer('laki');
            $table->integer('perempuan');
            $table->integer('total');
        
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jumlah_penduduks');
    }
};
