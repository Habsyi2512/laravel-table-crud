<?php

namespace Database\Seeders;

use App\Models\JumlahPenduduk;
use App\Models\Kecamatan;
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
        // User::factory(10)->create();
        JumlahPenduduk::create([
            'semester' => 'Semester 1',
            'kecamatan' => 'Siantan',
            'laki' => 1000,
            'perempuan' => 2000,
            'total' => 3000
        ]);
        JumlahPenduduk::create([
            'semester' => 'Semester 2',
            'kecamatan' => 'Siantan',
            'laki' => 100,
            'perempuan' => 250,
            'total' => 350
        ]);
        JumlahPenduduk::create([
            'semester' => 'Semester 1',
            'kecamatan' => 'Siantan Timur',
            'laki' => 100,
            'perempuan' => 250,
            'total' => 350
        ]);
        JumlahPenduduk::create([
            'semester' => 'Semester 2',
            'kecamatan' => 'Siantan Timur',
            'laki' => 100,
            'perempuan' => 250,
            'total' => 350
        ]);
        JumlahPenduduk::create([
            'semester' => 'Semester 1',
            'kecamatan' => 'Jemaja',
            'laki' => 100,
            'perempuan' => 250,
            'total' => 350
        ]);
        // JumlahPenduduk::create([
        //     'semester' => 'Semester 2',
        //     'kecamatan' => 'Jemaja',
        //     'laki' => 100,
        //     'perempuan' => 250,
        //     'total' => 350
        // ]);
        // JumlahPenduduk::create([
        //     'semester' => 'Semester 1',
        //     'kecamatan' => 'Palmatak',
        //     'laki' => 100,
        //     'perempuan' => 250,
        //     'total' => 350
        // ]);
        JumlahPenduduk::create([
            'semester' => 'Semester 2',
            'kecamatan' => 'Palmatak',
            'laki' => 100,
            'perempuan' => 250,
            'total' => 350
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

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
    }
}
