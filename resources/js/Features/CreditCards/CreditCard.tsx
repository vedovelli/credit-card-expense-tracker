import { CreditCard as CreditCardIcon, ShieldCheck } from 'lucide-react';

import { CreditCard as CreditCardType } from './types';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface CreditCardProps {
    card: CreditCardType;
}

export function CreditCard({ card }: CreditCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="perspective-1000 h-56 w-96 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="relative h-full w-full"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front of the card */}
                <div className="backface-hidden absolute h-full w-full">
                    <div className="h-full w-full rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 p-8 text-white shadow-xl">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                        </div>

                        <div className="relative flex h-full flex-col">
                            <div className="flex items-start justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                                    <CreditCardIcon className="h-6 w-6 text-white" />
                                </div>
                                <p className="text-lg font-semibold tracking-wider">
                                    {card.issuer}
                                </p>
                            </div>

                            <div className="flex flex-1 flex-col justify-end space-y-6">
                                <div className="text-right font-mono text-xl tracking-[0.1em]">
                                    {card.number}
                                </div>

                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="mb-1 text-xs uppercase tracking-wider text-white/60">
                                            Card Holder
                                        </p>
                                        <p className="font-medium tracking-wide">
                                            {card.user.name}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="mb-1 text-xs uppercase tracking-wider text-white/60">
                                            Valid Thru
                                        </p>
                                        <p className="font-medium tracking-wide">
                                            {card.valid_to}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back of the card */}
                <div className="backface-hidden absolute h-full w-full [transform:rotateY(180deg)]">
                    <div className="h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 text-white shadow-xl">
                        <div className="absolute top-8 h-12 w-full bg-slate-600"></div>

                        <div className="absolute inset-0 p-8 pt-24">
                            <div className="space-y-4">
                                <div className="flex items-center justify-end space-x-2">
                                    <ShieldCheck className="h-5 w-5 text-emerald-400" />
                                    <p className="text-sm tracking-wide text-white/90">
                                        Secure Card
                                    </p>
                                </div>

                                <div className="space-y-2 rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs uppercase tracking-wider text-white/60">
                                            Valid From
                                        </p>
                                        <p className="font-medium tracking-wide">
                                            {card.valid_from}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs uppercase tracking-wider text-white/60">
                                            Card ID
                                        </p>
                                        <p className="font-medium tracking-wide">
                                            #{card.id}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
