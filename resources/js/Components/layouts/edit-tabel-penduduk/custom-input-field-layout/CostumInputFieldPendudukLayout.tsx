import Button from "@/components/action/Button";
import RenderClickedComponent from "@/components/display-data/admin/tabel/RenderClickedComponent";
import TabelKecamatan from "@/components/display-data/admin/tabel/TabelKecamatan";
import TabelSemester from "@/components/display-data/admin/tabel/TabelSemester";
import TabelTahun from "@/components/display-data/admin/tabel/TabelTahun";
import KecamatanForm from "@/components/form/KecamatanForm";
import SemesterForm from "@/components/form/SemesterForm";
import TahunForm from "@/components/form/TahunForm";
import PlusIcon from "@/components/icons/PlusIcon";
import CustomInputFieldFormTabelNav from "@/components/navigation/CustomFieldsPendudukNavbar";
import { CostumInputFieldPendudukLayoutProps } from "@/interface/props";
import { handleAddInput } from "@/hooks/formHooks";
import { InputItem } from "@/interface/props";
import React, { useState, useEffect } from "react";

export default function CostumInputFieldPendudukLayout({
    dataKecamatan,
    dataSemester,
    dataTahun,
}: CostumInputFieldPendudukLayoutProps) {
    const [nav, setNav] = useState(() => {
        const savedNav = localStorage.getItem("CustomFieldsPendudukNavbar");
        return savedNav ? savedNav : "Kecamatan";
    });
    const [inputListKecamatan, setInputListKecamatan] = useState<InputItem[]>(
        () => {
            const saveList = localStorage.getItem("inputKecamatanList");
            return saveList ? [...JSON.parse(saveList)] : [];
        },
    );
    const [inputListTahun, setInputListTahun] = useState<InputItem[]>(() => {
        const saveList = localStorage.getItem("inputTahunList");
        return saveList ? [...JSON.parse(saveList)] : [];
    });
    const [inputListSemester, setInputListSemester] = useState<InputItem[]>(
        () => {
            const saveList = localStorage.getItem("inputSemesterList");
            return saveList ? [...JSON.parse(saveList)] : [];
        },
    );

    // handle nav
    useEffect(() => {
        localStorage.setItem("CustomFieldsPendudukNavbar", nav);
    }, [nav]);

    // handle tahun
    useEffect(() => {
        localStorage.setItem("inputTahunList", JSON.stringify(inputListTahun));
    }, [inputListTahun]);

    // handle kecamatan
    useEffect(() => {
        localStorage.setItem(
            "inputKecamatanList",
            JSON.stringify(inputListKecamatan),
        );
    }, [inputListKecamatan]);

    // handle semester
    useEffect(() => {
        localStorage.setItem(
            "inputSemesterList",
            JSON.stringify(inputListSemester),
        );
    }, [inputListSemester]);

    return (
        <div className="w-full h-full relative">
            <div className="sticky w-full top-0 left-0 h-fit">
                <CustomInputFieldFormTabelNav nav={nav} setNav={setNav} />
            </div>
            <div className="flex gap-x-2 h-full max-h-[500px]">
                <div className="basis-1/3">
                    <RenderClickedComponent
                        nav={nav}
                        components={[
                            {
                                label: "Kecamatan",
                                component: (
                                    <TabelKecamatan
                                        dataKecamatan={dataKecamatan}
                                    />
                                ),
                            },
                            {
                                label: "Tahun",
                                component: <TabelTahun dataTahun={dataTahun} />,
                            },
                            {
                                label: "Semester",
                                component: (
                                    <TabelSemester
                                        dataSemester={dataSemester}
                                    />
                                ),
                            },
                        ]}
                    />
                </div>
                <div className="h-full px-2 basis-2/3 overflow-y-auto pb-2">
                    <section className="w-full">
                        <div className="relative mb-3 py-1">
                            <h3 className="font-bold  text-blue-500">
                                {nav} Form
                            </h3>
                            <div className="absolute h-full w-fit top-0 right-0">
                                {nav == "Kecamatan" && (
                                    <Button
                                        onClick={() =>
                                            handleAddInput({
                                                inputList: inputListKecamatan,
                                                setInputList:
                                                    setInputListKecamatan,
                                            })
                                        }
                                        className="w-fit p-.1"
                                    >
                                        <PlusIcon size={5} />
                                    </Button>
                                )}
                                {nav == "Tahun" && (
                                    <Button
                                        onClick={() =>
                                            handleAddInput({
                                                inputList: inputListTahun,
                                                setInputList: setInputListTahun,
                                            })
                                        }
                                        className="w-fit p-.1"
                                    >
                                        <PlusIcon size={5} />
                                    </Button>
                                )}
                                {nav == "Semester" && (
                                    <Button
                                        onClick={() =>
                                            handleAddInput({
                                                inputList: inputListSemester,
                                                setInputList:
                                                    setInputListSemester,
                                            })
                                        }
                                        className="w-fit p-.1"
                                    >
                                        <PlusIcon size={5} />
                                    </Button>
                                )}
                            </div>
                        </div>
                        <section className="mb-2">
                            {nav == "Kecamatan" && (
                                <KecamatanForm
                                    inputListKecamatan={inputListKecamatan}
                                    setInputListKecamatan={
                                        setInputListKecamatan
                                    }
                                />
                            )}
                            {/* {nav == "Tahun" && <TahunForm data={inputListTahun}/>} */}
                            {/* {nav == "Semester" && <SemesterForm data={inputListSemester}/>} */}
                        </section>
                    </section>
                </div>
            </div>
        </div>
    );
}
