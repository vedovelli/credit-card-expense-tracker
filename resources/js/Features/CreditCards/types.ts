export type CreditCard = {
    id: number;
    user_id: number;
    number: string;
    issuer: string;
    valid_to: string;
    valid_from: string;
    created_at: string;
    user: {
        id: number;
        name: string;
    };
};

export type PaginationLink = {
    url: string | null;
    label: string;
    active: boolean;
};

export type PaginatedResponse<T> = {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
};
