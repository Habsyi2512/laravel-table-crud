import { Link } from "@inertiajs/react";
import React from "react";

export default function Header() {
    return (
        <header className="px-8">
            <nav>
                <ul className="flex space-x-5 h-16">
                    <li className="w-24 h-full cursor-pointer hover:text-blue-300 transition-colors duration-150">
                        <Link
                            className="w-full h-full flex items-center justify-center"
                            href="/"
                        >
                            Beranda
                        </Link>
                    </li>
                    <li className="w-24 h-full cursor-pointer hover:text-blue-300 transition-colors duration-150">
                        <Link
                            className="w-full h-full flex items-center justify-center"
                            href="/admin"
                        >
                            Admin
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
