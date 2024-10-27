import React, { useEffect, useState } from 'react';
import Button from './Button';
import PencilIcon from '../icons/PencilIcon';
import { ListSelectedRowsProps } from '@/interface/inputProps';
import { EditModeProps } from '@/interface/props';

interface ActionBarButtonEditProps {
    nav: 'Kecamatan' | 'Tahun' | 'Semester';
    stateList: ListSelectedRowsProps;
    setListSelected: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>;
    setEditMode: React.Dispatch<React.SetStateAction<EditModeProps>>;
}

export default function ActionBarButtonEdit({ nav, stateList, setListSelected, setEditMode }: ActionBarButtonEditProps) {
    const [disabled, setDisabled] = useState<boolean>(true);
    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        const lengthMap = {
            Kecamatan: stateList.length.kecamatan,
            Tahun: stateList.length.tahun,
            Semester: stateList.length.semester,
        };

        const length = lengthMap[nav] || 0;
        setDisabled(length === 0);
        setActive(length > 0);
    }, [nav, stateList.length]);

    const handleClick = () => {
        setEditMode((prevState) => ({
            ...prevState,
            [nav.toLowerCase()]: true,
        }));
    };

    return (
        <li>
            <Button onClick={handleClick} disabled={disabled} active={active} className="w-7 h-7 flex items-center justify-center">
                <PencilIcon className="w-4 h-4" />
            </Button>
        </li>
    );
}
