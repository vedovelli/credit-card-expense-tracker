import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from '@/Components/ui/drawer';
import { Head, router } from '@inertiajs/react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Button } from '@/Components/ui/button';
import { CreditCard } from '@/Features/CreditCards/types';
import { CreditCard as CreditCardComponent } from '@/Features/CreditCards/CreditCard';
import { Input } from '@/Components/ui/input';
import { LengthAwarePaginator } from '@/types/app';
import { PageProps } from '@/types';
import { Pagination } from '@/Components/Pagination';
import { useState } from 'react';

export default function CreditCards(
    props: PageProps<{ creditCards: LengthAwarePaginator<CreditCard> }>,
) {
    const [flippedCardId, setFlippedCardId] = useState<number | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const [selectedCard, setSelectedCard] = useState<CreditCard | null>(null);

    const handleCardFlip = (cardId: number) => {
        setFlippedCardId(flippedCardId === cardId ? null : cardId);
    };

    const handleEditCard = (card: CreditCard) => {
        console.log(card);
        setSelectedCard(card);
        setIsDrawerOpen(true);
    };

    const url = new URL(window.location.href);

    const [search, setSearch] = useState(url.searchParams.get('search') ?? '');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        url.searchParams.set('search', search);

        router.visit(url.toString());
    };

    const clearSearch = () => {
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
                            <div className="grid w-full grid-cols-2 gap-12">
                                <form
                                    onSubmit={handleSearch}
                                    className="flex items-center gap-2"
                                >
                                    <Input
                                        placeholder="Search"
                                        type="search"
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
                                            onClick={clearSearch}
                                        >
                                            Clear
                                        </Button>
                                    )}
                                </form>
                                <Pagination paginator={props.creditCards} />
                                {props.creditCards.data.map((cardData) => (
                                    <CreditCardComponent
                                        key={cardData.id}
                                        cardData={cardData}
                                        isFlipped={
                                            flippedCardId === cardData.id
                                        }
                                        onFlip={() =>
                                            handleCardFlip(cardData.id)
                                        }
                                        onEdit={() => handleEditCard(cardData)}
                                    />
                                ))}
                                <Pagination paginator={props.creditCards} />
                            </div>
                            {props.creditCards.total === 0 && (
                                <h3 className="mt-6 rounded-lg border border-dashed border-gray-300 p-12 text-center text-2xl font-semibold text-gray-400">
                                    Não há cartões
                                </h3>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <DrawerContent>
                    <div className="mx-auto w-full max-w-xl">
                        <DrawerHeader>
                            <DrawerTitle>
                                <span className="text-3xl font-semibold leading-tight text-gray-800">
                                    {selectedCard?.number}
                                </span>
                            </DrawerTitle>
                        </DrawerHeader>
                        <div className="p-4">
                            {/* Form will be implemented in future iteration */}
                            <p className="text-sm text-gray-500"></p>
                        </div>
                        <DrawerFooter>
                            <DrawerClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
        </AuthenticatedLayout>
    );
}
