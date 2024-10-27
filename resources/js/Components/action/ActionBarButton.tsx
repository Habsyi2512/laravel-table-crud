import React from 'react';
import { EditModeProps, InputItem, Kecamatan, Semester, Year } from '@/interface/props';
import ActionBarButtonDelete from './ActionBarButtonDelete';
import ActionBarButtonEdit from './ActionBarButtonEdit';
import ActionBarButtonAdd from './ActionBarButtonAdd';
import { ListSelectedRowsProps } from '@/interface/inputProps';

interface ActionBarButtonProps {
    nav: 'Kecamatan' | 'Tahun' | 'Semester';
    setEditMode: React.Dispatch<React.SetStateAction<EditModeProps>>;
    stateList: {
        inputListKecamatan: Kecamatan[];
        inputListTahun: Year[];
        inputListSemester: Semester[];
        listSelectedRows: ListSelectedRowsProps;
    };
    setStateList: {
        setInputListKecamatan: React.Dispatch<React.SetStateAction<Kecamatan[]>>;
        setInputListTahun: React.Dispatch<React.SetStateAction<Year[]>>;
        setInputListSemester: React.Dispatch<React.SetStateAction<Semester[]>>;
        setListSelectedRows: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>;
    };
}

export default function ActionBarButton({ nav, stateList, setStateList, setEditMode }: ActionBarButtonProps) {
    const { inputListKecamatan, inputListTahun, inputListSemester, listSelectedRows } = stateList;
    const { setInputListKecamatan, setInputListSemester, setInputListTahun, setListSelectedRows } = setStateList;
    const data = { nav: nav, stateList: { inputListKecamatan, inputListTahun, inputListSemester }, setStateList: { setInputListKecamatan, setInputListTahun, setInputListSemester } };
    return (
        <ul className="flex gap-x-2 justify-end w-full items-center">
            <ActionBarButtonDelete nav={nav} stateList={listSelectedRows} setListSelected={setListSelectedRows} />
            <ActionBarButtonEdit setEditMode={setEditMode} nav={nav} stateList={listSelectedRows} setListSelected={setListSelectedRows} />
            <ActionBarButtonAdd data={data} />
        </ul>
    );
}
