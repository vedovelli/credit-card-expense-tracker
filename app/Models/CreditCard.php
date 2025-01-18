<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class CreditCard extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'number',
        'issuer',
        'valid_to',
        'valid_from',
        'security_code',
    ];

    protected $hidden = ['security_code'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    protected function casts(): array
    {
        return [
            'valid_to' => 'datetime',
            'valid_from' => 'datetime',
        ];
    }
}
