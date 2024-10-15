import Header from "@/components/header/Header";
import React from "react";

export default function AdminTemplate({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <div>halaman Admin</div>
            <main>{children}</main>
        </>
    );
}
