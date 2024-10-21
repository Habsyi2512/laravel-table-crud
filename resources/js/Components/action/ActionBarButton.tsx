import React, { useEffect, useState } from 'react';
import Button from './Button';
import { useFormHandlers } from '@/hooks/formHooks';
import { InputItem, Kecamatan, Semester, Year } from '@/interface/props';
import PlusIcon from '../icons/PlusIcon';
import ActionBarButtonDelete from './ActionBarButtonDelete';
import ActionBarButtonEdit from './ActionBarButtonEdit';
import ActionBarButtonAdd from './ActionBarButtonAdd';
import { ListSelectedRowsProps } from '@/interface/inputProps';

interface ActionBarButtonProps {
    nav: string;
    stateList: {
        inputListKecamatan: InputItem[];
        inputListTahun: InputItem[];
        inputListSemester: InputItem[];
        listSelectedRows: ListSelectedRowsProps;
    };
    setStateList: {
        setInputListKecamatan: React.Dispatch<React.SetStateAction<InputItem[]>>;
        setInputListTahun: React.Dispatch<React.SetStateAction<InputItem[]>>;
        setInputListSemester: React.Dispatch<React.SetStateAction<InputItem[]>>;
        setListSelectedRows: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>;
    };
}

export default function ActionBarButton({ nav, stateList, setStateList }: ActionBarButtonProps) {
    const [length, setLength] = useState(stateList.listSelectedRows.tabelKecamatanRows.length);
    useEffect(() => {
        console.log('panjang select baris kecamatan ?', length);
    }, [length]);
    const { inputListKecamatan, inputListTahun, inputListSemester, listSelectedRows } = stateList;
    const { setInputListKecamatan, setInputListSemester, setInputListTahun, setListSelectedRows } = setStateList;
    const data = { nav: nav, stateList: { inputListKecamatan, inputListTahun, inputListSemester }, setStateList: { setInputListKecamatan, setInputListTahun, setInputListSemester } };
    return (
        <ul className="flex gap-x-2 justify-end w-full items-center">
            <ActionBarButtonDelete nav={nav} stateList={listSelectedRows} setListSelected={setListSelectedRows} />
            <ActionBarButtonEdit />
            <ActionBarButtonAdd data={data} />
        </ul>
    );
}
