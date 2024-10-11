import React from "react";
import { Penduduk } from "@/interface/props";

export const TableJumlahPenduduk = ({ penduduk }: { penduduk: Penduduk[] }) => {
    return (
        <>
            <div className="">
                <table className="py-2 rounded-xl border border-red-500 table-auto overflow-hidden w-full">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="border text-sm py-2" rowSpan={2}>
                                No.
                            </th>
                            <th className="border text-sm py-2" rowSpan={2}>
                                Kecamatan
                            </th>
                            <th className="border text-sm py-2" colSpan={3}>
                                Semester 1
                            </th>
                            <th className="border text-sm py-2" colSpan={3}>
                                Semester 2
                            </th>
                        </tr>
                        <tr className="bg-blue-500 text-white">
                            <th className="border text-sm py-2">Laki-laki</th>
                            <th className="border text-sm py-2">Perempuan</th>
                            <th className="border text-sm py-2">Total</th>
                            <th className="border text-sm py-2">Laki-laki</th>
                            <th className="border text-sm py-2">Perempuan</th>
                            <th className="border text-sm py-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-100 transition-colors">
                            <td className="border px-4 py-2 text-center">1</td>
                            <td className="border px-4 py-2">Kecamatan A</td>
                            <td className="border px-4 py-2">5000</td>
                            <td className="border px-4 py-2">5200</td>
                            <td className="border px-4 py-2">10200</td>
                            <td className="border px-4 py-2">5000</td>
                            <td className="border px-4 py-2">5200</td>
                            <td className="border px-4 py-2">10200</td>
                        </tr>
                        <tr className="hover:bg-gray-100 transition-colors">
                            <td className="border px-4 py-2 text-center">2</td>
                            <td className="border px-4 py-2">Kecamatan B</td>
                            <td className="border px-4 py-2">4000</td>
                            <td className="border px-4 py-2">200</td>
                            <td className="border px-4 py-2">4200</td>
                            <td className="border px-4 py-2">300</td>
                            <td className="border px-4 py-2">50</td>
                            <td className="border px-4 py-2">350</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
