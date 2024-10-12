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

            $table->foreignId('year_id')->constrained(
                table:'years', column:"id", indexName:'jumlah_penduduks_year_id'
            );

            $table->foreignId('kecamatan_id')->constrained(
                table:'kecamatans', column:"id", indexName:'jumlah_penduduks_kecamatan_id'
            );

            $table->foreignId('semester_id')->constrained(
                table:'semesters', column:"id", indexName:'jumlah_penduduks_semester_id'
            );
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
