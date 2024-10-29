import React, { useEffect, useState } from 'react';
import { selectAllTableRowsProps, Semester } from '@/interface/props';
import { ListSelectedRowsProps } from '@/interface/inputProps';
import { handleCheckboxChange, handleSelectAllChange } from '@/hooks/lib/checkbox/handleCheckboxChange';

export default function TabelSemester({
    dataSemester,
    inputListSemester,
    selectedRows,
    setSelectedRows,
    selectAllTableRows,
    setSelectAllTableRows,
}: {
    dataSemester: Semester[];
    inputListSemester: Semester[];
    selectedRows: ListSelectedRowsProps; // Perbarui tipe ini
    setSelectedRows: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>;
    selectAllTableRows: selectAllTableRowsProps;
    setSelectAllTableRows: React.Dispatch<React.SetStateAction<selectAllTableRowsProps>>;
}) {
    useEffect(() => {
        setSelectAllTableRows((prevState) => ({
            ...prevState,
            semester: selectedRows.tabelSemesterRows.length == dataSemester.length,
        }));
    }, [selectedRows.tabelSemesterRows.length]);

    return (
        <table className="text-sm w-full">
            <thead>
                <tr>
                    <th className="border-b text-left w-4 py-1 px-2">{inputListSemester.length == 0 && <input type="checkbox" className="w-3 h-3 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" checked={selectAllTableRows.semester} onChange={() => handleSelectAllChange(selectAllTableRows, dataSemester, setSelectedRows, setSelectAllTableRows, 'semester')} />}</th>
                    <th className="border-b text-blue-500 text-left w-6 py-2 px-2">ID</th>
                    <th className="border-b border-r text-blue-500 text-left w-32 py-2 px-2">Tahun</th>
                </tr>
            </thead>
            <tbody>
                {dataSemester.map((item, index) => (
                    <tr key={item.id} className={`${selectedRows.tabelTahunRows.some((row) => row.id === item.id) ? 'bg-blue-100' : 'bg-white'} border-b`}>
                        <td className="py-1 px-2">{inputListSemester.length == 0 && <input type="checkbox" className="w-3 h-3 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" checked={selectedRows.tabelSemesterRows.some((row) => row.id === item.id)} onChange={() => handleCheckboxChange(item, setSelectedRows, 'semester')} />}</td>
                        <td className="py-1 px-2">{index + 1}</td>
                        <td className="py-1 px-2 border-r">{item.nama}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
