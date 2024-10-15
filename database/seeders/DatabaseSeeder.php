<?php

namespace Database\Seeders;

use App\Models\JumlahPenduduk;
use App\Models\Kecamatan;
use App\Models\Semester;
use App\Models\User;
use App\Models\Year;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Seed semester
        foreach (['Semester 1', 'Semester 2'] as $semester) {
            Semester::create(['semester' => $semester]);
        }

        // Seed years from 2018 to 2024
        for ($year = 2018; $year <= 2024; $year++) {
            Year::create(['tahun' => (string)$year]);
        }

        // Seed kecamatan
        $kecamatans = [
            'Siantan',
            'Palmatak',
            'Siantan Timur',
            'Siantan Selatan',
            'Jemaja Timur',
            'Jemaja',
            'Siantan Tengah',
            'Siantan Utara',
            'Jemaja Barat',
            'Kute Siantan',
        ];

        foreach ($kecamatans as $kecamatan) {
            Kecamatan::create(['nama' => $kecamatan]);
        }

        // Seed JumlahPenduduk for each year and kecamatan
        for ($yearId = 1; $yearId <= 7; $yearId++) { // 2018 to 2024 (7 years)
            foreach ($kecamatans as $kecamatanId => $kecamatan) {
                foreach ([1, 2] as $semesterId) { // Semester 1 and 2
                    $laki = rand(350, 1000); // Generate random number for laki
                    $perempuan = rand(450, 1000); // Generate random number for perempuan

                    JumlahPenduduk::create([
                        'year_id' => $yearId,
                        'semester_id' => $semesterId,
                        'kecamatan_id' => $kecamatanId + 1, // Increment because array index starts from 0
                        'laki' => $laki,
                        'perempuan' => $perempuan,
                        'total' => $laki + $perempuan, // Total is sum of laki and perempuan
                    ]);
                }
            }
        }

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
    }
}
