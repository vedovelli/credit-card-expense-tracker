import type {
    CreditCard as CreditCardType,
    PaginatedResponse,
} from '@/Features/CreditCards/types';
import { Head, router } from '@inertiajs/react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Button } from '@/components/ui/button';
import { CreditCard } from '@/Features/CreditCards/CreditCard';
import { Input } from '@/Components/ui/input';
import { Pagination } from '@/Components/Pagination';
import { useState } from 'react';

export default function CreditCards({
    response,
}: {
    response: PaginatedResponse<CreditCardType>;
}) {
    const url = new URL(window.location.href);

    const [search, setSearch] = useState(url.searchParams.get('search') || '');

    const hasResults = response.data.length > 0;

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        url.searchParams.delete('page');
        url.searchParams.set('search', search);

        router.visit(url.toString());
    };

    const handleClearSearch = () => {
        setSearch('');
        url.searchParams.delete('search');
        router.visit(url.toString());
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Credit Cards
                </h2>
            }
        >
            <Head title="Credit Cards" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="mb-4 flex items-center justify-end">
                                <form
                                    onSubmit={handleSearchSubmit}
                                    className="flex w-96 items-center gap-2"
                                >
                                    <Input
                                        type="search"
                                        placeholder="Search"
                                        className="w-full"
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                    />
                                    <Button type="submit">Search</Button>
                                    {url.searchParams.has('search') && (
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={handleClearSearch}
                                        >
                                            Clear
                                        </Button>
                                    )}
                                </form>
                            </div>

                            {hasResults ? (
                                <>
                                    <div className="mb-4">
                                        <Pagination response={response} />
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        {response.data.map((card) => (
                                            <CreditCard
                                                key={card.id}
                                                card={card}
                                            />
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="rounded-lg border border-dashed border-gray-300 p-4 text-center text-xl font-semibold text-gray-300">
                                    No results found
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
