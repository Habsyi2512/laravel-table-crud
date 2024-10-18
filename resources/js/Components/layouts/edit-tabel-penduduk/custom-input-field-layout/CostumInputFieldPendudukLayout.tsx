import RenderClickedComponent from "@/components/display-data/admin/tabel/RenderClickedComponent";
import TabelKecamatan from "@/components/display-data/admin/tabel/TabelKecamatan";
import TabelSemester from "@/components/display-data/admin/tabel/TabelSemester";
import TabelTahun from "@/components/display-data/admin/tabel/TabelTahun";
import KecamatanForm from "@/components/form/KecamatanForm";
import CustomInputFieldFormTabelNav from "@/components/navigation/CustomFieldsPendudukNavbar";
import { CostumInputFieldPendudukLayoutProps } from "@/interface/props";
import React, { useState } from "react";

export default function CostumInputFieldPendudukLayout({
    dataKecamatan,
    dataSemester,
    dataTahun,
}: CostumInputFieldPendudukLayoutProps) {
    const [nav, setNav] = useState(() => {
        const savedNav = localStorage.getItem("CustomFieldsPendudukNavbar");
        return savedNav ? savedNav : "Kecamatan";
    });
    React.useEffect(() => {
        localStorage.setItem("CustomFieldsPendudukNavbar", nav);
    }, [nav]);

    return (
        <div className="w-full h-full relative">
            <div className="sticky w-full top-0 left-0 h-fit">
                <CustomInputFieldFormTabelNav nav={nav} setNav={setNav} />
            </div>
            <div className="grid grid-cols-3 gap-x-2 h-full max-h-[500px]">
                <div>
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
                <div className="col-span-2 h-full overflow-y-auto pb-2">
                    <section>
                        <h3 className="text-center border-b border-blue-500 mb-2 font-bold py-1 text-blue-500">
                            {nav} Form
                        </h3>
                        <section className="mb-2">
                            {nav == "Kecamatan" && <KecamatanForm />}
                        </section>
                        
                    </section>
                </div>
            </div>
        </div>
    );
}
