<?php

namespace App\Http\Controllers;

use App\Models\CreditCard;

class CreditCardDeleteController extends Controller
{
    public function __invoke(CreditCard $card)
    {
        $card->delete();

        return back();
    }
}
