import TabelKecamatan from "@/components/display-data/admin/tabel/TabelKecamatan";
import TabelSemester from "@/components/display-data/admin/tabel/TabelSemester";
import TabelTahun from "@/components/display-data/admin/tabel/TabelTahun";
import CustomInputFieldFormTabelNav from "@/components/navigation/CustomFieldsPendudukNavbar";
import { CostumInputFieldPendudukLayoutProps } from "@/interface/props";
import React, { useState } from "react";

export default function CostumInputFieldPendudukLayout({
    dataKecamatan,
    dataSemester,
    dataTahun,
}: CostumInputFieldPendudukLayoutProps) {
    const [nav, setNav] = useState("Kecamatan");

    const RenderTableContent = (): JSX.Element | null => {
        switch (nav) {
            case "Kecamatan":
                return <TabelKecamatan dataKecamatan={dataKecamatan} />;
            case "Tahun":
                return <TabelTahun dataTahun={dataTahun} />;
            case "Semester":
                return <TabelSemester dataSemester={dataSemester} />;
            default:
                return null; // Pastikan ada nilai return pada semua kasus
        }
    };

    return (
        <>
            <CustomInputFieldFormTabelNav nav={nav} setNav={setNav} />
            <RenderTableContent />
        </>
    );
}
