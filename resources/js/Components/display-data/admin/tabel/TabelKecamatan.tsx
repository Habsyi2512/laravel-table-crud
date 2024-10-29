import React, { useEffect } from 'react';
import { Kecamatan, selectAllTableRowsProps } from '@/interface/props';
import { ListSelectedRowsProps } from '@/interface/inputProps';
import { handleCheckboxChange, handleSelectAllChange } from '@/hooks/lib/checkbox/handleCheckboxChange';

export default function TabelKecamatan({
    dataKecamatan,
    selectedRows,
    setSelectedRows,
    selectAllTableRows,
    setSelectAllTableRows,
    inputListKecamatan,
}: {
    dataKecamatan: Kecamatan[];
    inputListKecamatan: Kecamatan[];
    selectedRows: ListSelectedRowsProps; // Perbarui tipe ini
    setSelectedRows: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>;
    selectAllTableRows: selectAllTableRowsProps;
    setSelectAllTableRows: React.Dispatch<React.SetStateAction<selectAllTableRowsProps>>;
}) {
    useEffect(() => {
        setSelectAllTableRows((prevState) => ({
            ...prevState,
            kecamatan: selectedRows.tabelKecamatanRows.length == dataKecamatan.length, // Menggunakan checkIfAllSelected untuk memperbarui selectAll
        }));
    }, [selectedRows.tabelKecamatanRows.length]);
    return (
        <table className="text-sm w-full">
            <thead>
                <tr>
                    <th className="border-b text-left w-4 py-1 px-2">{inputListKecamatan.length == 0 && <input type="checkbox" className="w-3 h-3 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" checked={selectAllTableRows.kecamatan} onChange={() => handleSelectAllChange(selectAllTableRows, dataKecamatan, setSelectedRows, setSelectAllTableRows, 'kecamatan')} />}</th>
                    <th className="border-b text-blue-500 text-left w-6 py-2 px-2">ID</th>
                    <th className="border-b border-r text-blue-500 text-left w-32 py-2 px-2">Kecamatan</th>
                </tr>
            </thead>
            <tbody>
                {dataKecamatan.map((kecamatan, index) => (
                    <tr key={kecamatan.id} className={`${selectedRows.tabelKecamatanRows.some((row) => row.id === kecamatan.id) ? 'bg-blue-100' : 'bg-white'} border-b`}>
                        <td className="py-1 px-2">
                            {inputListKecamatan.length == 0 && (
                                <input
                                    type="checkbox"
                                    className="w-3 h-3 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent"
                                    checked={selectedRows.tabelKecamatanRows.some((row) => row.id === kecamatan.id)}
                                    onChange={() => handleCheckboxChange(kecamatan, setSelectedRows, 'kecamatan')} // Menggunakan onClick
                                />
                            )}
                        </td>
                        <td className="py-1 px-2">{index + 1}</td>
                        <td className="py-1 px-2 border-r">{kecamatan.nama}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
