<?php

namespace App\Http\Controllers;

use App\Models\CreditCard;

class CreditCardsIndexController extends Controller
{
    public function __invoke()
    {
        $search = request()->query('search');

        $query = CreditCard::query();

        if ($search) {
            $query->whereLike('issuer', "%{$search}%");
        }

        $response = $query->paginate(9)->withQueryString();

        return inertia('CreditCards', compact('response'));
    }
}
