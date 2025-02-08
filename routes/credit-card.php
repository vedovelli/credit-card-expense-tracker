<?php

use App\Http\Controllers\CreditCardDeleteController;
use App\Http\Controllers\CreditCardsIndexController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/credit-cards', CreditCardsIndexController::class)->name('credit-card.index');
    Route::delete('/credit-card/{card}', CreditCardDeleteController::class)->name('credit-card.delete');
});
