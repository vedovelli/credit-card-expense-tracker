import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white p-12 shadow-sm sm:rounded-lg">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Expedita, ullam. Nam id obcaecati impedit non
                            blanditiis fugit perspiciatis sunt quibusdam, ipsam
                            aliquid modi ipsa, dignissimos neque quasi commodi
                            architecto nostrum.
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
