import React, { useState } from "react";
import { Kecamatan } from "@/interface/props";

export default function TabelKecamatan({
    dataKecamatan,
}: {
    dataKecamatan: Kecamatan[];
}) {
    // State untuk menyimpan daftar kecamatan yang checkbox-nya dicentang
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    // State untuk menyimpan status checkbox "Select All"
    const [selectAll, setSelectAll] = useState(false);

    // Fungsi untuk meng-handle perubahan checkbox
    const handleCheckboxChange = (id: number) => {
        setSelectedRows((prevSelectedRows) => {
            if (prevSelectedRows.includes(id)) {
                // Jika ID sudah ada, hapus dari daftar
                return prevSelectedRows.filter((rowId) => rowId !== id);
            } else {
                // Jika ID belum ada, tambahkan ke daftar
                return [...prevSelectedRows, id];
            }
        });
    };

    // Fungsi untuk meng-handle perubahan checkbox "Select All"
    const handleSelectAllChange = () => {
        if (selectAll) {
            // Jika "Select All" dicentang, hapus semua dari selectedRows
            setSelectedRows([]);
        } else {
            // Jika "Select All" tidak dicentang, tambahkan semua ID ke selectedRows
            setSelectedRows(dataKecamatan.map((kecamatan) => kecamatan.id));
        }
        // Toggle status selectAll
        setSelectAll(!selectAll);
    };

    return (
        <table className="text-sm w-full">
            <thead>
                <tr>
                    <th className="border-b text-left w-4 py-1 px-2">
                        <input
                            type="checkbox"
                            className="w-3 h-3 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent"
                            checked={selectAll}
                            onChange={handleSelectAllChange}
                        />
                    </th>
                    <th className="border-b text-blue-500 text-left w-6 py-2 px-2">
                        ID
                    </th>
                    <th className="border-b border-r text-blue-500 text-left w-32 py-2 px-2">
                        Kecamatan
                    </th>
                </tr>
            </thead>
            <tbody className="">
                {dataKecamatan.map((kecamatan, index) => (
                    <tr
                        key={kecamatan.id}
                        className={`${
                            selectedRows.includes(kecamatan.id)
                                ? "bg-blue-100"
                                : "bg-white"
                        } border-b`}
                    >
                        <td className="py-1 px-2">
                            <input
                                type="checkbox"
                                className="w-3 h-3 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent"
                                checked={selectedRows.includes(kecamatan.id)}
                                onChange={() =>
                                    handleCheckboxChange(kecamatan.id)
                                }
                            />
                        </td>
                        <td className="py-1 px-2">{index + 1}</td>
                        <td className="py-1 px-2 border-r">{kecamatan.nama}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
