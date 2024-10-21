import React, { useEffect, useState } from 'react';
import { router } from '@inertiajs/react'; // Import inertia router
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

        // Hapus item yang dipilih di state
        if (selectedIds.length > 0) {
            router.delete(routeUrl, {
                data: { ids: selectedIds },
                onSuccess: () => {
                    toast.success('Data Berhasil Dihapus');

                    // Update state setelah penghapusan
                    setListSelected((prevList) => {
                        let updatedState;
                        switch (nav) {
                            case 'Kecamatan':
                                updatedState = {
                                    ...prevList,
                                    tabelKecamatanRows: prevList.tabelKecamatanRows.filter((row) => !selectedIds.includes(row.id)),
                                };
                                break;
                            case 'Tahun':
                                updatedState = {
                                    ...prevList,
                                    tabelTahunRows: prevList.tabelTahunRows.filter((row) => !selectedIds.includes(row.id)),
                                };
                                break;
                            case 'Semester':
                                updatedState = {
                                    ...prevList,
                                    tabelSemesterRows: prevList.tabelSemesterRows.filter((row) => !selectedIds.includes(row.id)),
                                };
                                break;
                            default:
                                updatedState = prevList;
                        }

                        // Setelah penghapusan, atur length menjadi 0
                        return {
                            ...updatedState,
                            length: 0,
                        };
                    });
                },
            }); // Mengirimkan permintaan DELETE
        }
    };

    return (
        <li>
            {nav == 'Kecamatan' && (
                <Button onClick={handleClick} disabled={stateList.length == 0} active={stateList.length > 0} className="w-7 h-7 flex items-center justify-center">
                    <TrashIcon className="w-4 h-4" />
                </Button>
            )}
            {nav == 'Tahun' && (
                <Button onClick={handleClick} disabled={stateList.length == 0} active={stateList.length > 0} className="w-7 h-7 flex items-center justify-center">
                    <TrashIcon className="w-4 h-4" />
                </Button>
            )}
            {nav == 'Semester' && (
                <Button onClick={handleClick} disabled={stateList.length == 0} active={stateList.length > 0} className="w-7 h-7 flex items-center justify-center">
                    <TrashIcon className="w-4 h-4" />
                </Button>
            )}
        </li>
    );
}
