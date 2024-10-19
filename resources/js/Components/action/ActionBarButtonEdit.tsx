import React from 'react';
import Button from './Button';
import PencilIcon from '../icons/PencilIcon';

export default function ActionBarButtonEdit() {
    return (
        <li>
            <Button active={false} className="w-7 h-7 flex items-center justify-center">
                <PencilIcon className="w-4 h-4" />
            </Button>
        </li>
    );
}
