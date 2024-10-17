import { Link } from "@inertiajs/react";
import React from "react";

export default function Header() {
    return (
        <header className="px-8 border-b shadow sticky z-10 top-0 left-0 bg-blue-500 text-white">
            <nav className="flex justify-between">
                <ul className="flex space-x-5 h-16">
                    <li className="w-24 h-full cursor-pointer hover:text-blue-300 transition-colors duration-150">
                        <Link
                            className="w-full h-full flex items-center justify-center font-bold"
                            href="/"
                        >
                            Beranda
                        </Link>
                    </li>
                    <li className="w-24 h-full cursor-pointer hover:text-blue-300 transition-colors duration-150">
                        <Link
                            className="w-full h-full flex items-center justify-center font-bold"
                            href="/admin"
                        >
                            Admin
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li className="w-24 h-full cursor-pointer hover:text-blue-300 transition-colors duration-150">
                        <Link
                            className="w-full h-full flex items-center justify-center font-bold"
                            href={route("logout")}
                            method="post"
                            as="button"
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
