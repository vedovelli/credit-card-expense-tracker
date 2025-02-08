<?php

use App\Http\Controllers\CreditCardsIndexController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('credit-cards', CreditCardsIndexController::class)->name('credit-cards.index');
});
