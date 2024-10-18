import RenderClickedComponent from "@/components/display-data/admin/tabel/RenderClickedComponent";
import RenderTabel from "@/components/display-data/admin/tabel/RenderClickedComponent";
import TabelKecamatan from "@/components/display-data/admin/tabel/TabelKecamatan";
import TabelSemester from "@/components/display-data/admin/tabel/TabelSemester";
import TabelTahun from "@/components/display-data/admin/tabel/TabelTahun";
import CustomInputFieldFormTabelNav from "@/components/navigation/CustomFieldsPendudukNavbar";
import {
    CostumInputFieldPendudukLayoutProps,
    Kecamatan,
} from "@/interface/props";
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
        <>
            <CustomInputFieldFormTabelNav nav={nav} setNav={setNav} />
            <div className="grid grid-cols-3">
                <RenderClickedComponent
                    nav={nav}
                    components={[
                        {
                            label: "Kecamatan",
                            component: (
                                <TabelKecamatan dataKecamatan={dataKecamatan} />
                            ),
                        },
                        {
                            label: "Tahun",
                            component: <TabelTahun dataTahun={dataTahun} />,
                        },
                        {
                            label: "Semester",
                            component: (
                                <TabelSemester dataSemester={dataSemester} />
                            ),
                        },
                        // Add more components here if needed...
                    ]}
                />
            </div>
        </>
    );
}
