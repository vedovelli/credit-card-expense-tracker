<?php

namespace App\Models;

use App\Casts\CreditCardNumberCast;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class CreditCard extends Model
{
    use HasFactory, SoftDeletes;

    protected $with = ['user'];

    protected $fillable = [
        'user_id',
        'number',
        'issuer',
        'valid_to',
        'valid_from',
        'security_code',
    ];

    protected $hidden = ['security_code', 'updated_at', 'deleted_at'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    protected function casts(): array
    {
        return [
            'created_at' => 'datetime:d/m/Y',
            'valid_to' => 'datetime:m/Y',
            'valid_from' => 'datetime:m/Y',
            'number' => CreditCardNumberCast::class,
        ];
    }
}
