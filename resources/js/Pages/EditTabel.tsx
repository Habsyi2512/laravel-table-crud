import { EditTabelProps } from "@/interface/props";
import AdminTemplate from "@/layouts/AdminTemplate";
import Pagination from "@/components/navigation/Pagination";
import TabelJumlahPendudukAdmin from "@/components/display-data/admin/tabel/TabelJumlahPendudukAdmin";
import TambahPendudukForm from "@/components/form/TambahPendudukForm";
import CostumInputFieldPendudukLayout from "@/components/layouts/edit-tabel-penduduk/custom-input-field-layout/CostumInputFieldPendudukLayout";
import { useRef, useState, useEffect } from "react";

export default function EditTabel({
    dataPenduduk,
    dataKecamatan,
    dataSemester,
    dataTahun,
}: EditTabelProps) {
    const [nav, setNav] = useState(() => {
        const savedNav = localStorage.getItem("EditTabelNav");
        return savedNav ? savedNav : "inputData";
    });

    useEffect(() => {
        localStorage.setItem("EditTabelNav", nav);
    }, [nav]);
    return (
        <AdminTemplate>
            <section className="py-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <h2 className="mb-4 text-3xl font-semibold text-blue-500">
                        Edit Tabel
                    </h2>
                    <div className="flex gap-x-2 mb-2">
                        <button
                            onClick={() => setNav("inputData")}
                            className={`pil ${nav == "inputData" ? "bg-blue-500 hover:bg-blue-400 text-white" : "text-blue-500 hover:text-blue-400 border-blue-500 hover:border-blue-400"} border-b border-r rounded-lg shadow font-medium h-full py-1 px-3`}
                        >
                            Input Data
                        </button>
                        <button
                            onClick={() => setNav("customInputData")}
                            className={`pil ${nav == "customInputData" ? "bg-blue-500 hover:bg-blue-400 text-white" : "text-blue-500 hover:text-blue-400 border-blue-500 hover:border-blue-400"} border-b border-r rounded-lg shadow font-medium h-full py-1 px-3`}
                        >
                            Custom Input Data
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
                    <div className="p-2 border rounded-xl shadow max-h-[600px] overflow-auto">
                        <TabelJumlahPendudukAdmin />
                        <Pagination links={dataPenduduk.links} />
                    </div>
                    <div className="border p-2 h-fit rounded-xl shadow max-h-[600px] overflow-y-auto">
                        {nav == "inputData" && (
                            <TambahPendudukForm
                                dataKecamatan={dataKecamatan}
                                dataSemester={dataSemester}
                                dataTahun={dataTahun}
                            />
                        )}
                        {nav == "customInputData" && (
                            <CostumInputFieldPendudukLayout
                                dataKecamatan={dataKecamatan}
                                dataSemester={dataSemester}
                                dataTahun={dataTahun}
                            />
                        )}
                    </div>
                </div>
            </section>
        </AdminTemplate>
    );
}
