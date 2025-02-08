import { User } from '@/types';

export type CreditCard = {
    id: number;
    user_id: number;
    number: number;
    issuer: string;
    valid_to: string;
    valid_from: string;
    created_at: string;
    user: User;
};
