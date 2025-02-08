<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;

class CreditCardNumberCast implements CastsAttributes
{
    public function get(Model $model, string $key, mixed $value, array $attributes): mixed
    {
        return trim(chunk_split($value, 4, ' '));
    }

    public function set(Model $model, string $key, mixed $value, array $attributes): mixed
    {
        return str_replace(' ', '', $value);
    }
}
