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
    const [condition, setCondition] = useState<boolean>(nav == 'Kecamatan'); // Awalnya false

    useEffect(() => {
        setCondition(nav == 'Kecamatan');
        // console.log('panjang tabel list tabel kecamaatn', stateList.tabelKecamatanRows.length);
        console.log('kondisi nav = ', condition);
    }, [nav]);

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
                },
            }); // Mengirimkan permintaan DELETE
        }

        // Update state setelah penghapusan
        setListSelected((prevList) => {
            switch (nav) {
                case 'Kecamatan':
                    return {
                        ...prevList,
                        tabelKecamatanRows: prevList.tabelKecamatanRows.filter((row) => !selectedIds.includes(row.id)),
                    };
                case 'Tahun':
                    return {
                        ...prevList,
                        tabelTahunRows: prevList.tabelTahunRows.filter((row) => !selectedIds.includes(row.id)),
                    };
                case 'Semester':
                    return {
                        ...prevList,
                        tabelSemesterRows: prevList.tabelSemesterRows.filter((row) => !selectedIds.includes(row.id)),
                    };
                default:
                    return prevList;
            }
        });
    };

    // Update kondisi setiap kali stateList berubah

    return (
        <li>
            <Button onClick={handleClick} disabled={false} active={true} className="w-7 h-7 flex items-center justify-center">
                <TrashIcon className="w-4 h-4" />
            </Button>
        </li>
    );
}
