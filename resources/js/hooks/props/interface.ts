import { ListSelectedRowsProps } from '@/interface/inputProps';
import { InputItem } from '@/interface/props';

export interface HandleChangeProps {
    id: number | string;
    e: React.ChangeEvent<HTMLInputElement>;
    inputList: InputItem[];
    setInputList?: React.Dispatch<React.SetStateAction<InputItem[]>>;
    setListSelectedRows?: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>;
    tabel: string;
}

export interface HandleRemoveProps {
    id: number | string;
    inputList: InputItem[];
    setInputList?: React.Dispatch<React.SetStateAction<InputItem[]>>;
    setListSelectedRows?: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>;
    tabel: string;
}

export interface HandleAddInputProps {
    inputList: InputItem[];
    setInputList: React.Dispatch<React.SetStateAction<InputItem[]>>;
}
