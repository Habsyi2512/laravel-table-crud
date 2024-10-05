import React from "react";
import { Penduduk } from "@/interface/props";

export const TableJumlahPenduduk = ({ penduduk }: { penduduk: Penduduk[] }) => {
    return (
        <>
            <div>
                <div>
                    {penduduk.map((item) => {
                        return (
                            <div className="p-2 border rounded mb-3">
                                <p>kecamatan: {item.kecamatan}</p>
                                <p>laki: {item.laki}</p>
                                <p>perempuan: {item.perempuan}</p>
                                <p>total: {item.total}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
