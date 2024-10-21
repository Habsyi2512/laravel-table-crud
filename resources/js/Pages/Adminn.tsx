import AdminTemplate from "@/layouts/AdminTemplate";
import { Link } from "@inertiajs/react";

export default function Adminn() {
    return (
        <AdminTemplate>
            <section className="py-4 gap-2 md:gap-3 lg:gap-4 xl:gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Link
                    href="/tabel/edit"
                    className="p-2 bg-gray-100 rounded border shadow cursor-pointer text-sm hover:bg-gray-200 transition-colors duration-150 active:bg-gray-100 text-gray-700"
                >
                    Edit Table
                </Link>
            </section>
        </AdminTemplate>
    );
}
