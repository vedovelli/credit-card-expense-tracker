import { Ship as Chip, CreditCard as CreditCardIcon } from 'lucide-react';

import { CreditCard } from './types';

type Props = {
    cardData: CreditCard;
};

export function CreditCardFront({ cardData }: Props) {
    return (
        <div className="h-full rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 p-6 shadow-xl">
            <div className="flex h-full flex-col justify-between">
                {/* Card Header */}
                <div className="flex items-start justify-between">
                    <Chip className="h-12 w-12 text-yellow-300" />
                    <CreditCardIcon className="h-10 w-10 text-white/80" />
                </div>

                {/* Card Number */}
                <div className="space-y-4">
                    <div className="font-mono text-2xl tracking-wider text-white">
                        {cardData.number}
                    </div>

                    {/* Card Holder Name */}
                    <div className="text-lg font-medium uppercase tracking-wider text-white/90">
                        {cardData.user.name}
                    </div>

                    {/* Card Footer */}
                    <div className="flex items-end justify-between">
                        <div className="space-y-0.5">
                            <p className="text-xs uppercase text-white/60">
                                Valid From
                            </p>
                            <p className="font-mono text-white">
                                {cardData.valid_from}
                            </p>
                        </div>
                        <div className="space-y-0.5">
                            <p className="text-xs uppercase text-white/60">
                                Valid To
                            </p>
                            <p className="font-mono text-white">
                                {cardData.valid_to}
                            </p>
                        </div>
                        <div className="space-y-0.5">
                            <p className="text-xs uppercase text-white/60">
                                Issuer
                            </p>
                            <p className="font-semibold text-white">
                                {cardData.issuer}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
