import { handleCheckboxChange, handleSelectAllChange } from '@/hooks/lib/checkbox/handleCheckboxChange';
import { ListSelectedRowsProps } from '@/interface/inputProps';
import { selectAllTableRowsProps, Year } from '@/interface/props';
import React, { useEffect, useState } from 'react';

export default function TabelTahun({
    dataTahun,
    selectedRows,
    setSelectedRows,
    selectAllTableRows,
    setSelectAllTableRows,
}: {
    dataTahun: Year[];
    selectedRows: ListSelectedRowsProps; // Perbarui tipe ini
    setSelectedRows: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>;
    selectAllTableRows: selectAllTableRowsProps;
    setSelectAllTableRows: React.Dispatch<React.SetStateAction<selectAllTableRowsProps>>;
}) {
    useEffect(() => {
        setSelectAllTableRows((prevState) => ({
            ...prevState,
            tahun: selectedRows.tabelTahunRows.length == dataTahun.length,
        }));
    }, [selectedRows.tabelTahunRows.length]);
    return (
        <table className="text-sm w-full">
            <thead>
                <tr>
                    <th className="border-b text-left w-4 py-1 px-2">
                        <input type="checkbox" className="w-3 h-3 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" checked={selectAllTableRows.tahun} onChange={() => handleSelectAllChange(selectAllTableRows, dataTahun, setSelectedRows, setSelectAllTableRows, 'tahun')} />
                    </th>
                    <th className="border-b text-blue-500 text-left w-6 py-2 px-2">ID</th>
                    <th className="border-b border-r text-blue-500 text-left w-32 py-2 px-2">Tahun</th>
                </tr>
            </thead>
            <tbody>
                {dataTahun.map((item, index) => (
                    <tr key={item.id} className={`${selectedRows.tabelTahunRows.some((row) => row.id === item.id) ? 'bg-blue-100' : 'bg-white'} border-b`}>
                        <td className="py-1 px-2">
                            <input type="checkbox" className="w-3 h-3 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" checked={selectedRows.tabelTahunRows.some((row) => row.id === item.id)} onChange={() => handleCheckboxChange(item, setSelectedRows, 'tahun')} />
                        </td>
                        <td className="py-1 px-2">{index + 1}</td>
                        <td className="py-1 px-2 border-r">{item.nama}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
