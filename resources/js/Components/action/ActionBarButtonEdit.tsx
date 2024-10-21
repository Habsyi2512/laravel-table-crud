import React from 'react';
import Button from './Button';
import PencilIcon from '../icons/PencilIcon';
import { ListSelectedRowsProps } from '@/interface/inputProps';

interface ActionBarButtonEditProps {
    nav: string;
    stateList: ListSelectedRowsProps;
    setListSelected: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>;
}

export default function ActionBarButtonEdit({ nav, stateList, setListSelected }: ActionBarButtonEditProps) {
    const handleClick = () => {
        alert('button clicked!');
    };
    return (
        <li>
            <Button onClick={handleClick} disabled={nav === 'Kecamatan' ? stateList.length.kecamatan === 0 : nav === 'Tahun' ? stateList.length.tahun === 0 : stateList.length.semester === 0} active={nav === 'Kecamatan' ? stateList.length.kecamatan > 0 : nav === 'Tahun' ? stateList.length.tahun > 0 : stateList.length.semester > 0} className="w-7 h-7 flex items-center justify-center">
                <PencilIcon className="w-4 h-4" />
            </Button>
        </li>
    );
}
