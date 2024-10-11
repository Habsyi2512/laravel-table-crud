import React from "react";
import { Penduduk, KecData, SemesterData } from "@/interface/props";

export const TableJumlahPenduduk = ({ penduduk }: { penduduk: Penduduk[] }) => {
    console.log("penduduk = ", penduduk);
    return (
        <>
            <div className="">
                <table className="border-collapse py-2 rounded-xl border border-red-500 shadow overflow-hidden w-full">
                    <thead>
                        <tr className="bg-blue-500 border border-black text-white">
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
                            <th className="border text-sm px-3 py-2">
                                Laki-laki
                            </th>
                            <th className="border text-sm px-3 py-2">
                                Perempuan
                            </th>
                            <th className="border text-sm px-3 py-2">Total</th>
                            <th className="border text-sm px-3 py-2">
                                Laki-laki
                            </th>
                            <th className="border text-sm px-3 py-2">
                                Perempuan
                            </th>
                            <th className="border text-sm px-3 py-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {penduduk.map((item, index) => {
                            return (
                                <tr
                                    key={index}
                                    className="hover:bg-gray-100 transition-colors"
                                >
                                    <td className="border px-4 py-2 text-center">
                                        {index + 1}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {item.kecamatan}
                                    </td>
                                    <td className="border px-4 py-2">{item.laki}</td>
                                    <td className="border px-4 py-2">{item.perempuan}</td>
                                    <td className="border px-4 py-2">4200</td>
                                    <td className="border px-4 py-2">300</td>
                                    <td className="border px-4 py-2">50</td>
                                    <td className="border px-4 py-2">350</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};
