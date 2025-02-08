import { Link } from '@inertiajs/react';
import type { PaginatedResponse } from '@/Features/CreditCards/types';
import clsx from 'clsx';

type Props<T> = {
    response: PaginatedResponse<T>;
};

export function Pagination<T>({ response }: Props<T>) {
    const { from, to, total, links } = response;

    return (
        <div className="mt-6">
            <div className="flex items-center justify-between">
                <div className="text-sm text-slate-600">
                    Showing <span className="font-medium">{from}</span> to{' '}
                    <span className="font-medium">{to}</span> of{' '}
                    <span className="font-medium">{total}</span> results
                </div>
            </div>

            <div className="mt-4 flex items-center justify-center">
                <nav
                    className="isolate inline-flex gap-1 rounded-md"
                    aria-label="Pagination"
                >
                    {links.map((link, index) => {
                        // Skip rendering the "..." label as a button
                        if (link.label === '...') {
                            return (
                                <span
                                    key={index}
                                    className="relative inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300"
                                >
                                    ...
                                </span>
                            );
                        }

                        return (
                            <Link
                                key={index}
                                href={link.url || ''}
                                className={clsx(
                                    'relative inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition-colors duration-150',
                                    {
                                        'z-10 bg-slate-900 text-white ring-1 ring-slate-900 hover:bg-slate-800':
                                            link.active,
                                        'text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50':
                                            !link.active && link.url,
                                        'cursor-not-allowed text-slate-400 ring-1 ring-inset ring-slate-300':
                                            !link.url,
                                    },
                                )}
                                preserveScroll
                                dangerouslySetInnerHTML={{
                                    __html: link.label,
                                }}
                            />
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}
