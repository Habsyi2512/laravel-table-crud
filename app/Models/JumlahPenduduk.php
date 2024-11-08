<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JumlahPenduduk extends Model
{
    use HasFactory;
    protected $with = ['kecamatan', 'semester', 'year'];

    public function kecamatan(): BelongsTo
    {
        return $this->belongsTo(Kecamatan::class);
    }
    public function semester(): BelongsTo
    {
        return $this->belongsTo(Semester::class);
    }

    public function year(): BelongsTo
    {
        return $this->belongsTo(Year::class);
    }
}
