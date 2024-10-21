import Button from '@/components/action/Button';
import RenderClickedComponent from '@/components/display-data/admin/tabel/RenderClickedComponent';
import TabelKecamatan from '@/components/display-data/admin/tabel/TabelKecamatan';
import TabelSemester from '@/components/display-data/admin/tabel/TabelSemester';
import TabelTahun from '@/components/display-data/admin/tabel/TabelTahun';
import KecamatanForm from '@/components/form/KecamatanForm';
import SemesterForm from '@/components/form/SemesterForm';
import TahunForm from '@/components/form/TahunForm';
import CustomFieldsPendudukNavbar from '@/components/navigation/CustomFieldsPendudukNavbar';
import { ListSelectedRowsProps } from '@/interface/inputProps';
import { CostumInputFieldPendudukLayoutProps, Kecamatan, Semester, Year } from '@/interface/props';
import { InputItem } from '@/interface/props';
import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

export default function CostumInputFieldPendudukLayout({ dataKecamatan, dataSemester, dataTahun }: CostumInputFieldPendudukLayoutProps) {
    const [listSelectedRows, setListSelectedRows] = useState<ListSelectedRowsProps>({ tabelKecamatanRows: [], tabelSemesterRows: [], tabelTahunRows: [], length: {kecamatan:0,tahun:0,semester:0} });
    useEffect(() => {
        console.log('panjang = ', listSelectedRows.length);
    }, [listSelectedRows.length]);
    const [nav, setNav] = useState(() => {
        const savedNav = localStorage.getItem('CustomFieldsPendudukNavbar');
        return savedNav ? savedNav : 'Kecamatan';
    });
    const [inputListKecamatan, setInputListKecamatan] = useState<InputItem[]>(() => {
        const saveList = localStorage.getItem('inputKecamatanList');
        return saveList ? [...JSON.parse(saveList)] : [];
    });
    const [inputListTahun, setInputListTahun] = useState<InputItem[]>(() => {
        const saveList = localStorage.getItem('inputTahunList');
        return saveList ? [...JSON.parse(saveList)] : [];
    });
    const [inputListSemester, setInputListSemester] = useState<InputItem[]>(() => {
        const saveList = localStorage.getItem('inputSemesterList');
        return saveList ? [...JSON.parse(saveList)] : [];
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
            <Toaster position="top-center" />
            <div className="sticky w-full top-0 left-0 h-fit">
                <CustomFieldsPendudukNavbar
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
                />
            </div>
            <div className="flex gap-x-2 h-full max-h-[500px]">
                <div className="basis-1/3">
                    <RenderClickedComponent
                        nav={nav}
                        components={[
                            {
                                label: 'Kecamatan',
                                component: <TabelKecamatan selectedRows={listSelectedRows} setSelectedRows={setListSelectedRows} dataKecamatan={dataKecamatan} />,
                            },
                            {
                                label: 'Tahun',
                                component: <TabelTahun dataTahun={dataTahun} />,
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
                            {nav == 'Kecamatan' && <KecamatanForm inputListKecamatan={inputListKecamatan} setInputListKecamatan={setInputListKecamatan} />}
                            {nav == 'Tahun' && <TahunForm inputListTahun={inputListTahun} setInputListTahun={setInputListTahun} />}
                            {nav == 'Semester' && <SemesterForm inputListSemester={inputListSemester} setInputListSemester={setInputListSemester} />}
                        </section>
                    </section>
                </div>
            </div>
        </div>
    );
}
