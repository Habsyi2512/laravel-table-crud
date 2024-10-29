import React from 'react';
import { router } from '@inertiajs/react';
import TrashIcon from '../icons/TrashIcon';
import Button from './Button';
import { ListSelectedRowsProps } from '@/interface/inputProps';
import toast from 'react-hot-toast';

interface ActionBarButtonDeleteProps {
    nav: string;
    stateList: ListSelectedRowsProps;
    setListSelected: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>;
}

export default function ActionBarButtonDelete({ nav, stateList, setListSelected }: ActionBarButtonDeleteProps) {
    const handleClick = () => {
        let routeUrl = '';
        let selectedIds = [];

        // Tentukan route URL dan data berdasarkan 'nav'
        switch (nav) {
            case 'Kecamatan':
                routeUrl = '/tabel/kecamatan/destroy';
                selectedIds = stateList.tabelKecamatanRows.map((row) => row.id);
                break;
            case 'Tahun':
                routeUrl = '/tabel/tahun/destroy';
                selectedIds = stateList.tabelTahunRows.map((row) => row.id);
                break;
            case 'Semester':
                routeUrl = '/tabel/semester/destroy';
                selectedIds = stateList.tabelSemesterRows.map((row) => row.id);
                break;
            default:
                break;
        }

        if (selectedIds.length > 0) {
            router.delete(routeUrl, {
                data: { ids: selectedIds },
                onSuccess: () => {
                    setListSelected((prevList) => {
                        let updatedState;
                        switch (nav) {
                            case 'Kecamatan':
                                updatedState = {
                                    ...prevList,
                                    tabelKecamatanRows: prevList.tabelKecamatanRows.filter((row) => !selectedIds.includes(row.id)),
                                    length: {
                                        ...prevList.length,
                                        kecamatan: prevList.tabelKecamatanRows.filter((row) => !selectedIds.includes(row.id)).length,
                                    },
                                };
                                break;
                            case 'Tahun':
                                updatedState = {
                                    ...prevList,
                                    tabelTahunRows: prevList.tabelTahunRows.filter((row) => !selectedIds.includes(row.id)),
                                    length: {
                                        ...prevList.length,
                                        tahun: prevList.tabelTahunRows.filter((row) => !selectedIds.includes(row.id)).length,
                                    },
                                };
                                break;
                            case 'Semester':
                                updatedState = {
                                    ...prevList,
                                    tabelSemesterRows: prevList.tabelSemesterRows.filter((row) => !selectedIds.includes(row.id)),
                                    length: {
                                        ...prevList.length,
                                        semester: prevList.tabelSemesterRows.filter((row) => !selectedIds.includes(row.id)).length,
                                    },
                                };
                                break;
                            default:
                                updatedState = prevList;
                        }

                        return updatedState;
                    });
                },
            });
        }
    };

    return (
        <li>
            {nav == 'Kecamatan' && (
                <Button onClick={handleClick} disabled={stateList.tabelKecamatanRows.length == 0} active={stateList.tabelKecamatanRows.length != 0} className="w-7 h-7 flex items-center justify-center">
                   <TrashIcon className="w-4 h-4" />
                </Button>
            )}
            {nav == 'Tahun' && (
                <Button onClick={handleClick} disabled={stateList.tabelTahunRows.length == 0} active={stateList.tabelTahunRows.length > 0} className="w-7 h-7 flex items-center justify-center">
                   <TrashIcon className="w-4 h-4" />
                </Button>
            )}
            {nav == 'Semester' && (
                <Button onClick={handleClick} disabled={stateList.tabelSemesterRows.length == 0} active={stateList.tabelSemesterRows.length > 0} className="w-7 h-7 flex items-center justify-center">
                   <TrashIcon className="w-4 h-4" />
                </Button>
            )}
        </li>
    );
}
