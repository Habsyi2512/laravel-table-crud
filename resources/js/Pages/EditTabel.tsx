import PlusIcon from "@/components/icons/PlusIcon";
import { EditTabelProps } from "@/interface/props";
import AdminTemplate from "@/layouts/AdminTemplate";
import React, { useState, useEffect } from "react";
import { numberWithCommas } from "@/hooks/formatNumber";
import { Link } from "@inertiajs/react";
import Pagination from "@/components/navigation/Pagination";
import TabelJumlahPendudukAdmin from "@/components/display-data/admin/TabelJumlahPendudukAdmin";
import TambahPendudukForm from "@/components/form/TambahPendudukForm";
import { InputField } from "@/interface/inputProps";

// Tipe untuk field input


export default function EditTabel({
    dataPenduduk,
    dataKecamatan,
    dataSemester,
    dataTahun,
}: EditTabelProps) {
    

    
    return (
        <AdminTemplate>
            <section className="py-4">
                <h2 className="mb-4 text-3xl font-semibold text-blue-500">
                    Edit Tabel
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
                    <div className="p-2 border rounded-xl shadow max-h-[500px]">
                        <TabelJumlahPendudukAdmin
                            dataPenduduk={dataPenduduk.data}
                        />
                        <Pagination links={dataPenduduk.links} />
                    </div>
                    <div className="border p-2 h-fit rounded-xl shadow max-h-[500px]">
                        <TambahPendudukForm />
                    </div>
                </div>
            </section>
        </AdminTemplate>
    );
}
