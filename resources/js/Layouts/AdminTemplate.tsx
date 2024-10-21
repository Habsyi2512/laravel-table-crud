import Header from '@/components/header/Header';
import { Head, usePage } from '@inertiajs/react';
import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { PageProps as InertiaPageProps } from '@inertiajs/core'; // Impor PageProps dari Inertia.js

// Definisikan tipe untuk flash messages
interface FlashMessages {
    message?: string; // Pesan flash yang diharapkan
}

// Perluas tipe PageProps dari Inertia
interface PageProps extends InertiaPageProps {
    flash: FlashMessages; // Menyertakan flash messages dalam props
}

export default function AdminTemplate({ children }: { children: React.ReactNode }) {
    const { flash } = usePage<PageProps>().props; // Terapkan tipe pada usePage()

    useEffect(() => {
        if (flash?.message) { // Periksa jika flash.message ada
            toast.success(flash.message);
        }
    }, [flash]);

    return (
        <>  
            <Head title="Dashboard" />
            <Header />
            <main className="px-12">{children}</main>
        </>
    );
}
