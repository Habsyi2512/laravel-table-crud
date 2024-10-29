import RenderClickedComponent from '@/components/display-data/admin/tabel/RenderClickedComponent';
import TabelKecamatan from '@/components/display-data/admin/tabel/TabelKecamatan';
import TabelSemester from '@/components/display-data/admin/tabel/TabelSemester';
import TabelTahun from '@/components/display-data/admin/tabel/TabelTahun';
import KecamatanForm from '@/components/form/KecamatanForm';
import SemesterForm from '@/components/form/SemesterForm';
import TahunForm from '@/components/form/TahunForm';
import CustomFieldsPendudukNavbar from '@/components/navigation/CustomFieldsPendudukNavbar';
import { ListSelectedRowsProps } from '@/interface/inputProps';
import { CostumInputFieldPendudukLayoutProps, EditModeProps, InputItem, Kecamatan, selectAllTableRowsProps, Semester, Year } from '@/interface/props';
import { useState, useEffect } from 'react';

export default function CostumInputFieldPendudukLayout({ dataKecamatan, dataSemester, dataTahun }: CostumInputFieldPendudukLayoutProps) {
    const [selectAllTableRows, setSelectAllTableRows] = useState<selectAllTableRowsProps>({ kecamatan: false, tahun: false, semester: false });
    const [editMode, setEditMode] = useState<EditModeProps>({ kecamatan: false, tahun: false, semester: false });
    const [listSelectedRows, setListSelectedRows] = useState<ListSelectedRowsProps>(() => {
        const savedList = localStorage.getItem('listSelectedRows');
        return savedList ? JSON.parse(savedList) : { tabelKecamatanRows: [], tabelSemesterRows: [], tabelTahunRows: [], length: { kecamatan: 0, tahun: 0, semester: 0 } };
    });

    const [nav, setNav] = useState<'Kecamatan' | 'Tahun' | 'Semester'>(() => {
        const savedNav = localStorage.getItem('CustomFieldsPendudukNavbar');
        if (savedNav === 'Kecamatan' || savedNav === 'Tahun' || savedNav === 'Semester') {
            return savedNav;
        }
        return 'Kecamatan'; // Nilai default jika tidak ada di localStorage
    });

    const [inputListKecamatan, setInputListKecamatan] = useState<Kecamatan[]>(() => {
        const saveList = localStorage.getItem('inputKecamatanList');
        return saveList ? [...JSON.parse(saveList)] : [];
    });

    const [inputListTahun, setInputListTahun] = useState<Year[]>(() => {
        const saveList = localStorage.getItem('inputTahunList');
        return saveList ? [...JSON.parse(saveList)] : [];
    });

    const [inputListSemester, setInputListSemester] = useState<Semester[]>(() => {
        const saveList = localStorage.getItem('inputSemesterList');
        return saveList ? [...JSON.parse(saveList)] : [];
    });

    useEffect(() => {
        const lengthMap = {
            Kecamatan: listSelectedRows.length.kecamatan,
            Tahun: listSelectedRows.length.tahun,
            Semester: listSelectedRows.length.semester,
        };

        const length = lengthMap[nav] || 0;
    }, [nav, listSelectedRows.length]);

    // handle listSelectedRows
    useEffect(() => {
        localStorage.setItem('listSelectedRows', JSON.stringify(listSelectedRows));
    }, [listSelectedRows]);

    // Jika listSelectedRows[tableKey] adalah array dengan panjang 0, atur editMode untuk kecamatan, tahun, atau semester ke false
    const tables: Array<keyof ListSelectedRowsProps> = ['tabelKecamatanRows', 'tabelTahunRows', 'tabelSemesterRows'];
    tables.forEach((tableKey) => {
        useEffect(() => {
            const selectedRow = listSelectedRows[tableKey];
            if (Array.isArray(selectedRow) && selectedRow.length === 0) {
                setEditMode((prevState) => ({
                    ...prevState,
                    [tableKey.replace('tabel', '').replace('Rows', '').toLowerCase()]: false,
                }));
            }
        }, [listSelectedRows[tableKey]]);
    });

    // handle nav
    useEffect(() => {
        localStorage.setItem('CustomFieldsPendudukNavbar', nav);
    }, [nav]);

    // handle tahun
    useEffect(() => {
        localStorage.setItem('inputTahunList', JSON.stringify(inputListTahun));
    }, [inputListTahun]);

    // handle kecamatan
    useEffect(() => {
        localStorage.setItem('inputKecamatanList', JSON.stringify(inputListKecamatan));
    }, [inputListKecamatan]);

    // handle semester
    useEffect(() => {
        localStorage.setItem('inputSemesterList', JSON.stringify(inputListSemester));
    }, [inputListSemester]);

    return (
        <div className="w-full h-full relative">
            <div className="sticky w-full top-0 left-0 h-fit">
                <CustomFieldsPendudukNavbar
                    editMode={editMode}
                    stateList={{
                        inputListKecamatan,
                        inputListTahun,
                        inputListSemester,
                        listSelectedRows,
                    }}
                    setStateList={{
                        setInputListKecamatan,
                        setInputListTahun,
                        setInputListSemester,
                        setListSelectedRows,
                    }}
                    nav={nav}
                    setNav={setNav}
                    setEditMode={setEditMode}
                />
            </div>
            <div className="flex gap-x-2 h-full max-h-[500px]">
                <div className="basis-1/3">
                    <RenderClickedComponent
                        nav={nav}
                        components={[
                            {
                                label: 'Kecamatan',
                                component: <TabelKecamatan inputListKecamatan={inputListKecamatan} selectAllTableRows={selectAllTableRows} setSelectAllTableRows={setSelectAllTableRows} selectedRows={listSelectedRows} setSelectedRows={setListSelectedRows} dataKecamatan={dataKecamatan} />,
                            },
                            {
                                label: 'Tahun',
                                component: <TabelTahun inputListTahun={inputListTahun} dataTahun={dataTahun} selectAllTableRows={selectAllTableRows} setSelectAllTableRows={setSelectAllTableRows} selectedRows={listSelectedRows} setSelectedRows={setListSelectedRows} />,
                            },
                            {
                                label: 'Semester',
                                component: <TabelSemester dataSemester={dataSemester} />,
                            },
                        ]}
                    />
                </div>
                <div className="h-full px-2 basis-2/3 overflow-y-auto pb-2">
                    <section className="w-full">
                        <div className="relative px-2 mb-3 py-1">
                            <h3 className="font-bold  text-blue-500">{nav} Form</h3>
                        </div>
                        <section className="mb-2">
                            {nav === 'Kecamatan' && <KecamatanForm setEditMode={setEditMode} editMode={editMode} setListSelectedRows={setListSelectedRows} listSelectedRows={listSelectedRows} inputListKecamatan={inputListKecamatan} setInputListKecamatan={setInputListKecamatan} />}
                            {nav === 'Tahun' && <TahunForm setEditMode={setEditMode} editMode={editMode} setListSelectedRows={setListSelectedRows} listSelectedRows={listSelectedRows} inputListTahun={inputListTahun} setInputListTahun={setInputListTahun} />}
                            {nav === 'Semester' && <SemesterForm inputListSemester={inputListSemester} setInputListSemester={setInputListSemester} />}
                        </section>
                    </section>
                </div>
            </div>
        </div>
    );
}
