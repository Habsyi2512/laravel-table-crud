import React, { useEffect, useState } from 'react';
import { Kecamatan, selectAllTableRowsProps } from '@/interface/props';
import { ListSelectedRowsProps } from '@/interface/inputProps';

export default function TabelKecamatan({
    dataKecamatan,
    selectedRows,
    setSelectedRows,
    selectAllTableRows,
    setSelectAllTableRows,
}: {
    dataKecamatan: Kecamatan[];
    selectedRows: ListSelectedRowsProps; // Perbarui tipe ini
    setSelectedRows: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>;
    selectAllTableRows: selectAllTableRowsProps;
    setSelectAllTableRows: React.Dispatch<React.SetStateAction<selectAllTableRowsProps>>;
}) {
    const checkIfAllSelected = (selectedRows: ListSelectedRowsProps) => selectedRows.tabelKecamatanRows.length === dataKecamatan.length;
    useEffect(() => {
        setSelectAllTableRows((prevState) => ({
            ...prevState,
            kecamatan: selectedRows.tabelKecamatanRows.length == dataKecamatan.length, // Menggunakan checkIfAllSelected untuk memperbarui selectAll
        }));
    }, [selectedRows.tabelKecamatanRows.length]);

    const handleCheckboxChange = (kecamatan: Kecamatan) => {
        const samaPanjang = selectedRows.tabelKecamatanRows.length == dataKecamatan.length;
        // Jika tidak Shift, pilih atau hapus satu baris
        setSelectedRows((prevSelectedRows) => {
            const isSelected = prevSelectedRows.tabelKecamatanRows.some((row) => row.id === kecamatan.id);
            const updatedRows = isSelected ? prevSelectedRows.tabelKecamatanRows.filter((row) => row.id !== kecamatan.id) : [...prevSelectedRows.tabelKecamatanRows, kecamatan];

            // Cek apakah semua baris sudah di-unselect setelah pembaruan
            const isAllSelected = updatedRows.length === dataKecamatan.length;

            // Update selectedRows dan length
            return {
                ...prevSelectedRows,
                tabelKecamatanRows: updatedRows,
                length: {
                    ...prevSelectedRows.length,
                    kecamatan: updatedRows.length,
                },
            };
        });

        // Setelah selectedRows diperbarui, cek apakah masih semua baris terpilih atau tidak
    };

    const handleSelectAllChange = () => {
        if (selectAllTableRows.kecamatan) {
            // Deselect all
            setSelectedRows((prevSelectedRows) => ({
                ...prevSelectedRows,
                tabelKecamatanRows: [],
                length: {
                    ...prevSelectedRows.length,
                    kecamatan: 0, // Set length.kecamatan to 0
                },
            }));

            setSelectAllTableRows((prevState) => ({ ...prevState, kecamatan: false }));
        } else {
            // Select all
            setSelectedRows((prevSelectedRows) => ({
                ...prevSelectedRows,
                tabelKecamatanRows: dataKecamatan,
                length: {
                    ...prevSelectedRows.length,
                    kecamatan: dataKecamatan.length, // Set length.kecamatan to the number of all rows
                },
            }));
            setSelectAllTableRows((prevState) => ({ ...prevState, kecamatan: true }));
        }
    };

    return (
        <table className="text-sm w-full">
            <thead>
                <tr>
                    <th className="border-b text-left w-4 py-1 px-2">
                        <input type="checkbox" className="w-3 h-3 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" checked={selectAllTableRows.kecamatan} onChange={handleSelectAllChange} />
                    </th>
                    <th className="border-b text-blue-500 text-left w-6 py-2 px-2">ID</th>
                    <th className="border-b border-r text-blue-500 text-left w-32 py-2 px-2">Kecamatan</th>
                </tr>
            </thead>
            <tbody>
                {dataKecamatan.map((kecamatan, index) => (
                    <tr key={kecamatan.id} className={`${selectedRows.tabelKecamatanRows.some((row) => row.id === kecamatan.id) ? 'bg-blue-100' : 'bg-white'} border-b`}>
                        <td className="py-1 px-2">
                            <input
                                type="checkbox"
                                className="w-3 h-3 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent"
                                checked={selectedRows.tabelKecamatanRows.some((row) => row.id === kecamatan.id)}
                                onChange={(event) => handleCheckboxChange(kecamatan)} // Menggunakan onClick
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
