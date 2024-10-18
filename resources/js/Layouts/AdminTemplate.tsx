import Header from "@/components/header/Header";
import { Head } from "@inertiajs/react";
import React from "react";

export default function AdminTemplate({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Head title="Dashboard" />
            <Header />
            <main className="px-12">{children}</main>
        </>
    );
}
