<?php

namespace Database\Seeders;

use App\Models\JumlahPenduduk;
use App\Models\Kecamatan;
use App\Models\Semester;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Semester::create([
            'semester' => "Semester 1"
        ]);
        Semester::create([
            'semester' => "Semester 2"
        ]);

        Kecamatan::create(
            ['nama' => 'Siantan']
        );
        Kecamatan::create(
            ['nama' => 'Siantan Timur']
        );
        Kecamatan::create(
            ['nama' => 'Jemaja']
        );
        Kecamatan::create(
            ['nama' => 'Palmatak']
        );
        // User::factory(10)->create();
        JumlahPenduduk::create([
            'semester_id' => 1,
            'kecamatan_id' => 1,
            'laki' => 1000,
            'perempuan' => 2000,
            'total' => 3000
        ]);
        JumlahPenduduk::create([
            'semester_id' => 2,
            'kecamatan_id' => 1,
            'laki' => 100,
            'perempuan' => 250,
            'total' => 350
        ]);
        JumlahPenduduk::create([
            'semester_id' => 1,
            'kecamatan_id' => 2,
            'laki' => 100,
            'perempuan' => 250,
            'total' => 350
        ]);
        JumlahPenduduk::create([
            'semester_id' => 2,
            'kecamatan_id' => 2,
            'laki' => 100,
            'perempuan' => 250,
            'total' => 350
        ]);
        JumlahPenduduk::create([
            'semester_id' => 1,
            'kecamatan_id' => 3,
            'laki' => 100,
            'perempuan' => 250,
            'total' => 350
        ]);
        JumlahPenduduk::create([
            'semester_id' => 2,
            'kecamatan_id' => 3,
            'laki' => 100,
            'perempuan' => 250,
            'total' => 350
        ]);
        JumlahPenduduk::create([
            'semester_id' => 1,
            'kecamatan_id' => 4,
            'laki' => 100,
            'perempuan' => 250,
            'total' => 350
        ]);
        JumlahPenduduk::create([
            'semester_id' => 2,
            'kecamatan_id' => 4,
            'laki' => 100,
            'perempuan' => 250,
            'total' => 350
        ]);

        

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
    }
}
