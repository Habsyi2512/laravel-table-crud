import { ListSelectedRowsProps } from '@/interface/inputProps';
import { InputItem, selectAllTableRowsProps } from '@/interface/props';
import { capitalizeFirstLetter } from '../capitalizeString';

type TabelOptions = 'kecamatan' | 'tahun' | 'semester';

export const handleCheckboxChange = (item: InputItem, setSelectedRows: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>, tabel: TabelOptions) => {
    setSelectedRows((prevSelectedRows) => {
        // Akses dengan nama properti dinamis menggunakan bracket notation
        const tableRowsKey = `tabel${capitalizeFirstLetter(tabel)}Rows` as keyof ListSelectedRowsProps;

        const isSelected = (prevSelectedRows[tableRowsKey] as InputItem[]).some((row) => row.id === item.id);

        const updatedRows = isSelected ? (prevSelectedRows[tableRowsKey] as InputItem[]).filter((row) => row.id !== item.id) : [...(prevSelectedRows[tableRowsKey] as InputItem[]), item];

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

export const handleSelectAllChange = (selectAllTableRows: selectAllTableRowsProps, dataTabel: InputItem[], setSelectedRows: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>, setSelectAllTableRows: React.Dispatch<React.SetStateAction<selectAllTableRowsProps>>, tabel: TabelOptions) => {
    const tableRowsKey = `tabel${capitalizeFirstLetter(tabel)}Rows` as keyof ListSelectedRowsProps;
    if (selectAllTableRows[tabel]) {
        setSelectedRows((prevSelectedRows) => ({
            ...prevSelectedRows,
            [tableRowsKey]: [],
            length: {
                ...prevSelectedRows.length,
                [tabel]: 0,
            },
        }));

        setSelectAllTableRows((prevState) => ({ ...prevState, [tabel]: false }));
    } else {
        setSelectedRows((prevSelectedRows) => ({
            ...prevSelectedRows,
            [tableRowsKey]: dataTabel,
            length: {
                ...prevSelectedRows.length,
                [tabel]: dataTabel.length,
            },
        }));
        setSelectAllTableRows((prevState) => ({ ...prevState, [tabel]: true }));
    }
};
