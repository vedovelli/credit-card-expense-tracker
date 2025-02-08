import { CreditCardBack } from './CreditCardBack';
import { CreditCardFront } from './CreditCardFront';
import { CreditCard as CreditCardType } from './types';
import { motion } from 'framer-motion';

type Props = {
    cardData: CreditCardType;
    isFlipped: boolean;
    onFlip: () => void;
    onEdit: () => void;
};

export function CreditCard({ cardData, isFlipped, onFlip, onEdit }: Props) {
    return (
        <div
            className="perspective-1000 relative aspect-[1.586/1] w-full cursor-pointer"
            onClick={onFlip}
        >
            <motion.div
                className="relative h-full w-full"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div
                    className="absolute inset-0"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <CreditCardFront cardData={cardData} />
                </div>
                <div
                    className="absolute inset-0"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                    }}
                >
                    <CreditCardBack cardData={cardData} onEdit={onEdit} />
                </div>
            </motion.div>
        </div>
    );
}
