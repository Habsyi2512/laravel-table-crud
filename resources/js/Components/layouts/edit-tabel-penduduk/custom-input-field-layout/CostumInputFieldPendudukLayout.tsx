import TabelKecamatan from "@/components/display-data/admin/tabel/TabelKecamatan";
import CustomInputFieldFormTabelNav from "@/components/navigation/CustomFieldsPendudukNavbar";
import React from "react";

export default function CostumInputFieldPendudukLayout() {
    return (
        <div>
            <CustomInputFieldFormTabelNav />
            <TabelKecamatan />
        </div>
    );
}
