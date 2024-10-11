import React from "react";
import Template from "@/layouts/Template";
import { BerandaProps } from "@/interface/props";
import { Head } from "@inertiajs/react";
import { TableJumlahPenduduk } from "@/components/beranda/TableJumlahPenduduk";

export default function Beranda({ data, penduduk }: BerandaProps) {
    console.log("penduduk = ", penduduk[0]);
    return (
        <>
            <Head title="Beranda" />
            <Template>
                <div className="w-ful p-5 max-w-3xl">
                    <TableJumlahPenduduk penduduk={penduduk} />
                </div>
            </Template>
        </>
    );
}
