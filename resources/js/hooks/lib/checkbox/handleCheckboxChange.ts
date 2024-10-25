import { TabelType } from "@/hooks/types/types";
import { ListSelectedRowsProps } from "@/interface/inputProps";
import { InputItem } from "@/interface/props";

interface HandleCheckboxChangeProps{
    item: InputItem;
    setSelectedRows: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>;
    tabel: TabelType;
}

export const handleCheckboxChange = (item:InputItem, setSelectedRows:React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>, tabel: TabelType) => {
    setSelectedRows((prevSelectedRows) => {
        const isSelected = prevSelectedRows.tabelKecamatanRows.some((row) => row.id === item.id);
        const updatedRows = isSelected ? prevSelectedRows.tabelKecamatanRows.filter((row) => row.id !== item.id) : [...prevSelectedRows.tabelKecamatanRows, item];
        return {
            ...prevSelectedRows,
            tabelKecamatanRows: updatedRows,
            length: {
                ...prevSelectedRows.length,
                [tabel.type]: updatedRows.length,
            },
        };
    });
};