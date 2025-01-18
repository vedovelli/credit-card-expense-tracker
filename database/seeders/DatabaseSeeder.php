<?php

namespace Database\Seeders;

use App\Models\CreditCard;
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
        CreditCard::truncate();
        User::truncate();

        $user = User::factory()->create([
            'name' => 'Fabio Vedovelli',
            'email' => 'fabio@vedovelli.com.br',
        ]);

        CreditCard::factory(5)->create([
            'user_id' => $user->id,
        ]);

        User::factory(50)->create();

    }
}
