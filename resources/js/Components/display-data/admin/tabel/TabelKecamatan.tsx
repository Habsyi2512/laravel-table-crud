import React, { useState } from 'react';
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
    const [lastSelectedIndex, setLastSelectedIndex] = useState<number | null>(null); // Untuk menyimpan indeks terakhir yang dipilih

    const checkIfAllSelected = (selectedRows: ListSelectedRowsProps) => {
        return selectedRows.tabelKecamatanRows.length === dataKecamatan.length;
    };

    const handleCheckboxChange = (kecamatan: Kecamatan, index: number, event: React.MouseEvent<HTMLInputElement>) => {
        const isShiftPressed = event.shiftKey;

        // Jika tidak ada baris yang terpilih
        if (lastSelectedIndex === null) {
            setLastSelectedIndex(index);
        }

        if (isShiftPressed && lastSelectedIndex !== null) {
            // Jika Shift ditekan, pilih rentang
            const start = Math.min(lastSelectedIndex, index);
            const end = Math.max(lastSelectedIndex, index);

            const rowsToSelect = dataKecamatan.slice(start, end + 1);

            setSelectedRows((prevSelectedRows) => {
                const updatedRows = [...new Set([...prevSelectedRows.tabelKecamatanRows, ...rowsToSelect])];

                return {
                    ...prevSelectedRows,
                    tabelKecamatanRows: updatedRows,
                    length: {
                        ...prevSelectedRows.length,
                        kecamatan: updatedRows.length, // Update length.kecamatan
                    },
                };
            });
        } else {
            // Jika tidak Shift, pilih atau hapus satu baris
            setSelectedRows((prevSelectedRows) => {
                const isSelected = prevSelectedRows.tabelKecamatanRows.some((row) => row.id === kecamatan.id);
                const updatedRows = isSelected
                    ? prevSelectedRows.tabelKecamatanRows.filter((row) => row.id !== kecamatan.id)
                    : [...prevSelectedRows.tabelKecamatanRows, kecamatan];

                return {
                    ...prevSelectedRows,
                    tabelKecamatanRows: updatedRows,
                    length: {
                        ...prevSelectedRows.length,
                        kecamatan: updatedRows.length, // Update length.kecamatan
                    },
                };
            });
        }

        // Simpan indeks saat ini sebagai indeks terakhir yang dipilih
        if (!selectedRows.tabelKecamatanRows.some((row) => row.id === kecamatan.id)) {
            setLastSelectedIndex(index); // Update lastSelectedIndex hanya jika baris baru dipilih
        }

        // Perbarui status selectAll
        setSelectAll(checkIfAllSelected(selectedRows));
    };

    const handleSelectAllChange = () => {
        if (selectAll) {
            // Deselect all
            setSelectedRows((prevSelectedRows) => ({
                ...prevSelectedRows,
                tabelKecamatanRows: [],
                length: {
                    ...prevSelectedRows.length,
                    kecamatan: 0, // Set length.kecamatan to 0
                },
            }));
            setLastSelectedIndex(null); // Reset last selected index saat unselect semua
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
        }
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
                    <th className="border-b text-blue-500 text-left w-6 py-2 px-2">ID</th>
                    <th className="border-b border-r text-blue-500 text-left w-32 py-2 px-2">Kecamatan</th>
                </tr>
            </thead>
            <tbody>
                {dataKecamatan.map((kecamatan, index) => (
                    <tr
                        key={kecamatan.id}
                        className={`${selectedRows.tabelKecamatanRows.some((row) => row.id === kecamatan.id) ? 'bg-blue-100' : 'bg-white'} border-b`}
                    >
                        <td className="py-1 px-2">
                            <input
                                type="checkbox"
                                className="w-3 h-3 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent"
                                checked={selectedRows.tabelKecamatanRows.some((row) => row.id === kecamatan.id)}
                                onClick={(event) => handleCheckboxChange(kecamatan, index, event)} // Menggunakan onClick
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
