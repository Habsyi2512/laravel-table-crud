import { numberWithCommas } from "@/hooks/formatNumber";
import { Penduduk } from "@/interface/props";

export default function TabelJumlahPendudukAdmin({
    dataPenduduk,
}: {
    dataPenduduk: Penduduk[];
}) {
    return (
        <div className="overflow-hidden rounded-lg border border-slate-300 w-full mb-2">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr>
                        <th className="border px-2 py-1">No.</th>
                        <th className="border px-2 py-1">Tahun</th>
                        <th className="border px-2 py-1">Kecamatan</th>
                        <th className="border px-2 py-1">Semester</th>
                        <th className="border px-2 py-1">Laki - Laki</th>
                        <th className="border px-2 py-1">Perempuan</th>
                        <th className="border px-2 py-1">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {dataPenduduk.map((item, index) => {
                        const angka_format = numberWithCommas(item.total);
                        return (
                            <tr key={index}>
                                <td className="border px-2 py-1">{item.id}</td>
                                <td className="border px-2 py-1">
                                    {item.year.tahun}
                                </td>
                                <td className="border px-2 py-1 w-40">
                                    {item.kecamatan.nama}
                                </td>
                                <td className="border px-2 py-1">
                                    {item.semester.semester}
                                </td>
                                <td className="border px-2 py-1">
                                    {item.laki}
                                </td>
                                <td className="border px-2 py-1">
                                    {item.perempuan}
                                </td>
                                <td className="border px-2 py-1">
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
