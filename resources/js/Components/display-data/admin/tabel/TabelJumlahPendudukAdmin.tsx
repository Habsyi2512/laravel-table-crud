import { numberWithCommas } from "@/hooks/formatNumber";
import { Penduduk } from "@/interface/props";

export default function TabelJumlahPendudukAdmin({
    dataPenduduk,
}: {
    dataPenduduk: Penduduk[];
}) {
    return (
        <div className="overflow-y-hidden relative">
            <table className="w-full mb-2 text-sm">
                <thead className="sticky top-0 left-0 w-full">
                    <tr className=" bg-white/50 backdrop-blur-sm text-blue-600">
                        <th className="border-b px-2 py-1 text-left">No.</th>
                        <th className="border-b px-2 py-1 text-left">Tahun</th>
                        <th className="border-b px-2 py-1 text-left">
                            Kecamatan
                        </th>
                        <th className="border-b px-2 py-1 text-left">
                            Semester
                        </th>
                        <th className="border-b px-2 py-1 text-left">
                            Laki - Laki
                        </th>
                        <th className="border-b px-2 py-1 text-left">
                            Perempuan
                        </th>
                        <th className="border-b px-2 py-1 text-left">Total</th>
                    </tr>
                </thead>
                <tbody className="overflow-hidden">
                    {dataPenduduk.map((item, index) => {
                        const angka_format = numberWithCommas(item.total);
                        return (
                            <tr key={index}>
                                <td className="border-b px-2 py-1">
                                    {item.id}
                                </td>
                                <td className="border-b px-2 py-1">
                                    {item.year.tahun}
                                </td>
                                <td className="border-b px-2 py-1 w-40">
                                    {item.kecamatan.nama}
                                </td>
                                <td className="border-b px-2 py-1">
                                    {item.semester.semester}
                                </td>
                                <td className="border-b px-2 py-1">
                                    {item.laki}
                                </td>
                                <td className="border-b px-2 py-1">
                                    {item.perempuan}
                                </td>
                                <td className="border-b px-2 py-1">
                                    {angka_format}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
