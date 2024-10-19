import React, { useEffect, useState } from 'react';
import { Kecamatan } from '@/interface/props';
import { ListSelectedRowsProps } from '@/interface/inputProps';

export default function TabelKecamatan({
    dataKecamatan,
    selectedRows,
    setSelectedRows,
}: {
    dataKecamatan: Kecamatan[];
    selectedRows: ListSelectedRowsProps; // Perbarui tipe ini
    setSelectedRows: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>;
}) {
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckboxChange = (kecamatan: Kecamatan) => {
        setSelectedRows((prevSelectedRows) => {
            const isSelected = prevSelectedRows.tabelKecamatanRows.some((row) => row.id === kecamatan.id);
            if (isSelected) {
                return {
                    ...prevSelectedRows,
                    tabelKecamatanRows: prevSelectedRows.tabelKecamatanRows.filter((row) => row.id !== kecamatan.id),
                };
            } else {
                return {
                    ...prevSelectedRows,
                    tabelKecamatanRows: [...prevSelectedRows.tabelKecamatanRows, kecamatan],
                };
            }
        });
    };

    const handleSelectAllChange = () => {
        if (selectAll) {
            setSelectedRows((prevSelectedRows) => ({
                ...prevSelectedRows,
                tabelKecamatanRows: [],
            }));
        } else {
            setSelectedRows((prevSelectedRows) => ({
                ...prevSelectedRows,
                tabelKecamatanRows: dataKecamatan,
            }));
        }
        setSelectAll(!selectAll);
    };

    return (
        <table className="text-sm w-full">
            <thead>
                <tr>
                    <th className="border-b text-left w-4 py-1 px-2">
                        <input type="checkbox" className="w-3 h-3 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" checked={selectAll} onChange={handleSelectAllChange} />
                    </th>
                    <th className="border-b text-blue-500 text-left w-6 py-2 px-2">ID</th>
                    <th className="border-b border-r text-blue-500 text-left w-32 py-2 px-2">Kecamatan</th>
                </tr>
            </thead>
            <tbody>
                {dataKecamatan.map((kecamatan, index) => (
                    <tr key={kecamatan.id} className={`${selectedRows.tabelKecamatanRows.some((row) => row.id === kecamatan.id) ? 'bg-blue-100' : 'bg-white'} border-b`}>
                        <td className="py-1 px-2">
                            <input type="checkbox" className="w-3 h-3 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" checked={selectedRows.tabelKecamatanRows.some((row) => row.id === kecamatan.id)} onChange={() => handleCheckboxChange(kecamatan)} />
                        </td>
                        <td className="py-1 px-2">{index + 1}</td>
                        <td className="py-1 px-2 border-r">{kecamatan.nama}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
