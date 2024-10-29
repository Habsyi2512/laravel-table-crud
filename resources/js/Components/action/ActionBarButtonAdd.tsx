import React, { useState, useEffect } from 'react';
import PlusIcon from '../icons/PlusIcon';
import Button from './Button';
import { useFormHandlers } from '@/hooks/lib/form/formHooks';
import { EditModeProps, InputItem, Kecamatan, Semester, Year } from '@/interface/props';

interface ActionBarButtonAddProps {
    nav: string;
    editMode: EditModeProps;
    stateList: {
        inputListKecamatan: Kecamatan[];
        inputListTahun: Year[];
        inputListSemester: Semester[];
    };
    setStateList: {
        setInputListKecamatan: React.Dispatch<React.SetStateAction<Kecamatan[]>>;
        setInputListTahun: React.Dispatch<React.SetStateAction<Year[]>>;
        setInputListSemester: React.Dispatch<React.SetStateAction<Semester[]>>;
    };
}

export default function ActionBarButtonAdd({ data }: { data: ActionBarButtonAddProps }) {
    const { handleAddInput } = useFormHandlers();
    const { nav, editMode } = data;
    const { inputListKecamatan, inputListTahun, inputListSemester } = data.stateList;
    const { setInputListKecamatan, setInputListSemester, setInputListTahun } = data.setStateList;

    return (
        <li className="flex items-center justify-center">
            {nav == 'Kecamatan' && (
                <Button
                    onClick={() =>
                        handleAddInput({
                            inputList: inputListKecamatan,
                            setInputList: setInputListKecamatan,
                        })
                    }
                    className="w-7 h-7 flex items-center justify-center"
                >
                    <PlusIcon className="w-5 h-5" />
                </Button>
            )}
            {nav == 'Tahun' && (
                <Button
                    onClick={() =>
                        handleAddInput({
                            inputList: inputListTahun,
                            setInputList: setInputListTahun,
                        })
                    }
                    className="w-7 h-7 flex items-center justify-center"
                >
                    <PlusIcon className="w-5 h-5" />
                </Button>
            )}
            {nav == 'Semester' && (
                <Button
                    onClick={() =>
                        handleAddInput({
                            inputList: inputListSemester,
                            setInputList: setInputListSemester,
                        })
                    }
                    className="w-7 h-7 flex items-center justify-center"
                >
                    <PlusIcon className="w-5 h-5" />
                </Button>
            )}
        </li>
    );
}
