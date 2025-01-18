<?php

namespace Database\Factories;

use App\Models\CreditCard;
use App\Models\User;
use Crypt;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;

class CreditCardFactory extends Factory
{
    protected $model = CreditCard::class;

    public function definition(): array
    {
        return [
            'number' => $this->faker->creditCardNumber(),
            'issuer' => $this->faker->creditCardType(),
            'valid_to' => Carbon::now()->addMonths(12),
            'valid_from' => Carbon::now()->subMonths(12),
            'security_code' => Crypt::encryptString($this->faker->randomNumber(3)),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),

            'user_id' => User::factory(),
        ];
    }
}
