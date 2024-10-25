import { TabelType } from '@/hooks/types/types';
import { ListSelectedRowsProps } from '@/interface/inputProps';
import { InputItem, Kecamatan, selectAllTableRowsProps } from '@/interface/props';

export const handleCheckboxChange = (
    item: InputItem,
    setSelectedRows: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>,
    tabel: 'kecamatan' | 'tahun' | 'semester'
) => {
    setSelectedRows((prevSelectedRows) => {
        // Akses dengan nama properti dinamis menggunakan bracket notation
        const tableRowsKey = `tabel${tabel.charAt(0).toUpperCase() + tabel.slice(1)}Rows` as keyof ListSelectedRowsProps;

        const isSelected = (prevSelectedRows[tableRowsKey] as InputItem[]).some((row) => row.id === item.id);
        
        const updatedRows = isSelected 
            ? (prevSelectedRows[tableRowsKey] as InputItem[]).filter((row) => row.id !== item.id)
            : [...(prevSelectedRows[tableRowsKey] as InputItem[]), item];
        
        return {
            ...prevSelectedRows,
            [tableRowsKey]: updatedRows,
            length: {
                ...prevSelectedRows.length,
                [tabel]: updatedRows.length,
            },
        };
    });
};

export const handleSelectAllChange = (
    selectAllTableRows: selectAllTableRowsProps,
    dataKecamatan: Kecamatan[],
    setSelectedRows: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>,
    setSelectAllTableRows: React.Dispatch<React.SetStateAction<selectAllTableRowsProps>>,
    tabel: 'kecamatan' | 'tahun' | 'semester',
) => {
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

        setSelectAllTableRows((prevState) => ({ ...prevState, [tabel]: false }));
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
