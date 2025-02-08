import { Pencil, Trash2 } from 'lucide-react';

import { CreditCard } from './types';
import { router } from '@inertiajs/react';

type Props = {
    cardData: CreditCard;
    onEdit: () => void;
};

export function CreditCardBack({ cardData, onEdit }: Props) {
    const handleEdit = (e: React.MouseEvent) => {
        e.stopPropagation();
        onEdit();
    };

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        router.delete(route('credit-card.delete', { card: cardData.id }));
    };

    return (
        <div className="h-full rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 p-6 shadow-xl">
            <div className="flex h-full flex-col">
                {/* Magnetic Strip */}
                <div className="-mx-6 mt-6 h-12 w-[calc(100%+48px)] bg-slate-900"></div>

                {/* Card Details */}
                <div className="mt-6 flex flex-1 flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-white/60">Card ID</span>
                            <span className="text-white">{cardData.id}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-white/60">Created At</span>
                            <span className="text-white">
                                {cardData.created_at}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={handleEdit}
                        className="p-2 text-white/80 transition-colors hover:text-white"
                        title="Edit Card"
                    >
                        <Pencil className="h-5 w-5" />
                    </button>
                    <button
                        onClick={handleDelete}
                        className="p-2 text-white/80 transition-colors hover:text-red-400"
                        title="Delete Card"
                    >
                        <Trash2 className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
