import React, { useState } from "react";
import { Semester } from "@/interface/props";

export default function TabelSemester({
    dataSemester,
}: {
    dataSemester: Semester[];
}) {
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
            setSelectedRows(dataSemester.map((item) => item.id));
        }
        // Toggle status selectAll
        setSelectAll(!selectAll);
    };

    return (
        <table className="text-sm w-full">
            <thead>
                <tr>
                    <th className="border-b text-left w-8 py-2 px-3">
                        <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent"
                            checked={selectAll}
                            onChange={handleSelectAllChange}
                        />
                    </th>
                    <th className="border-b text-blue-500 text-left w-8 py-2 px-3">
                        ID
                    </th>
                    <th className="border-b border-r text-blue-500 text-left w-32 py-2 px-3">
                        Semester
                    </th>
                </tr>
            </thead>
            <tbody className="">
                {dataSemester.map((item, index) => (
                    <tr
                        key={item.id}
                        className={`${
                            selectedRows.includes(item.id)
                                ? "bg-blue-100"
                                : "bg-white"
                        } border-b`}
                    >
                        <td className="py-1 px-3">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent"
                                checked={selectedRows.includes(item.id)}
                                onChange={() => handleCheckboxChange(item.id)}
                            />
                        </td>
                        <td className="py-1 px-3">{index+1}</td>
                        <td className="py-1 px-3 border-r">{item.semester}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
    return <div>TabelSemester</div>;
}
