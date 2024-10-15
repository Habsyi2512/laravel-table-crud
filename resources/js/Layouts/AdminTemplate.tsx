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
            <main className="px-12">{children}</main>
        </>
    );
}
