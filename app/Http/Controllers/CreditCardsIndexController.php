<?php

namespace App\Http\Controllers;

use App\Models\CreditCard;

class CreditCardsIndexController extends Controller
{
    public function __invoke()
    {
        $query = CreditCard::query();

        $search = request('search');

        if ($search) {
            $query->whereLike('number', '%' . $search . '%')->orWhereLike('issuer', '%' . $search . '%');
        }

        $creditCards = $query->paginate(8);

        return inertia('CreditCards/Index', compact('creditCards'));
    }
}
