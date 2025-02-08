import { LengthAwarePaginator } from '@/types/app';
import { Link } from '@inertiajs/react';

interface PaginationProps<T> {
    paginator: LengthAwarePaginator<T>;
}

export function Pagination<T>({ paginator }: PaginationProps<T>) {
    if (paginator.total === 0) {
        return null;
    }

    return (
        <div className="col-span-2 mt-6">
            <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                    Showing{' '}
                    <span className="font-medium">{paginator.from}</span> to{' '}
                    <span className="font-medium">{paginator.to}</span> of{' '}
                    <span className="font-medium">{paginator.total}</span>{' '}
                    results
                </div>
                <div className="flex items-center space-x-2">
                    <Link
                        href={paginator.prev_page_url ?? '#'}
                        className={`flex items-center rounded-md px-3 py-2 text-sm ${
                            !paginator.prev_page_url
                                ? 'cursor-not-allowed bg-gray-100 text-gray-400'
                                : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        preserveScroll
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span className="ml-1">Previous</span>
                    </Link>

                    <div className="flex space-x-1">
                        {paginator.links.map((link, index) => {
                            if (
                                index === 0 ||
                                index === paginator.links.length - 1
                            ) {
                                return null;
                            }

                            return (
                                <Link
                                    key={index}
                                    href={link.url ?? '#'}
                                    className={`rounded-md px-4 py-2 text-sm ${
                                        link.active
                                            ? 'bg-slate-600 text-white'
                                            : 'text-gray-700 hover:bg-gray-50'
                                    } ${!link.url ? 'cursor-not-allowed opacity-50' : ''}`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                    preserveScroll
                                />
                            );
                        })}
                    </div>

                    <Link
                        href={paginator.next_page_url ?? '#'}
                        className={`flex items-center rounded-md px-3 py-2 text-sm ${
                            !paginator.next_page_url
                                ? 'cursor-not-allowed bg-gray-100 text-gray-400'
                                : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        preserveScroll
                    >
                        <span className="mr-1">Next</span>
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
