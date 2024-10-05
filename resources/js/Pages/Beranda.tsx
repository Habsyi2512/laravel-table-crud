import React from "react";
import Template from "@/layouts/Template";
import { BerandaProps } from "@/interface/props";
import { Head } from "@inertiajs/react";

export default function Beranda({ data }: BerandaProps) {
    return (
        <>
            <Head title="Beranda" />
            <Template>
                <div className="w-full bg-white rounded border border-slate-200 p-5 max-w-md shadow max">
                    <h1 className="text-gray-600 font-bold text-xl">Nama: {data.name}</h1>
                    <h1 className="text-gray-600 font-bold text-xl">Umur: {data.age}</h1>
                </div>
            </Template>
        </>
    );
}
