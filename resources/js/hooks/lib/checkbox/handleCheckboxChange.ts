import { ListSelectedRowsProps } from "@/interface/inputProps";
import { InputItem } from "@/interface/props";
import { useCallback } from "react";

export const handleCheckboxChange = (item:InputItem, setSelectedRows:React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>) => {
    setSelectedRows((prevSelectedRows) => {
        const isSelected = prevSelectedRows.tabelKecamatanRows.some((row) => row.id === item.id);
        const updatedRows = isSelected ? prevSelectedRows.tabelKecamatanRows.filter((row) => row.id !== item.id) : [...prevSelectedRows.tabelKecamatanRows, item];
        return {
            ...prevSelectedRows,
            tabelKecamatanRows: updatedRows,
            length: {
                ...prevSelectedRows.length,
                kecamatan: updatedRows.length,
            },
        };
    });
};