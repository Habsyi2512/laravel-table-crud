import React from "react";
import Template from "@/layouts/Template";
import { BerandaProps } from "@/interface/props";
import { Head } from "@inertiajs/react";
import { TableJumlahPenduduk } from "@/components/display-data/Guest/TabelJumlahPenduduk";

export default function Beranda({
    penduduk,
    dataTahun,
    tahunSekarang,
}: BerandaProps) {
    console.log("penduduk = ", penduduk);
    console.log("dataTahun = ", dataTahun);
    console.log("tahunSekarang = ", tahunSekarang);
    return (
        <>
            <Head title="Beranda" />
            <Template>
                <div className="w-full p-5 overflow-x-auto max-w-3xl">
                    <TableJumlahPenduduk
                        penduduk={penduduk}
                        tahunSekarang={tahunSekarang}
                        dataTahun={dataTahun}
                    />
                </div>
            </Template>
        </>
    );
}
