import { numberWithCommas } from '@/hooks/formatNumber';
import { Penduduk } from '@/interface/props';
import { usePage } from '@inertiajs/react';
import { PageProps } from '@/types';

interface CustomPageProps extends PageProps {
    dataPenduduk: {
        data: Penduduk[];
        current_page: Number;
        per_page: Number | any;
    };
}

export default function TabelJumlahPendudukAdmin() {
    const { dataPenduduk } = usePage<CustomPageProps>().props;
    const dataMap: Penduduk[] = dataPenduduk.data;
    const current_page = dataPenduduk.current_page;
    const per_page = dataPenduduk.per_page;

    return (
        <div className="overflow-y-hidden relative">
            <table className="w-full mb-2 text-sm">
                <thead className="sticky top-0 left-0 w-full">
                    <tr className=" bg-white/50 backdrop-blur-sm text-blue-600">
                        <th className="border-b px-2 py-1 text-left">No.</th>
                        <th className="border-b px-2 py-1 text-left">Tahun</th>
                        <th className="border-b px-2 py-1 text-left">Kecamatan</th>
                        <th className="border-b px-2 py-1 text-left">Semester</th>
                        <th className="border-b px-2 py-1 text-left">Laki - Laki</th>
                        <th className="border-b px-2 py-1 text-left">Perempuan</th>
                        <th className="border-b px-2 py-1 text-left">Total</th>
                    </tr>
                </thead>
                <tbody className="overflow-hidden">
                    {dataMap.map((item, index) => {
                        const angka_format = numberWithCommas(String(item.total));
                        const nomorUrut = (Number(current_page) - 1) * per_page + (index + 1);
                        return (
                            <tr key={index}>
                                <td className="border-b px-2 py-1">{nomorUrut}</td>
                                <td className="border-b px-2 py-1">{item.year.nama}</td>
                                <td className="border-b px-2 py-1 w-40">{item.kecamatan.nama}</td>
                                <td className="border-b px-2 py-1">{item.semester.nama}</td>
                                <td className="border-b px-2 py-1">{item.laki}</td>
                                <td className="border-b px-2 py-1">{item.perempuan}</td>
                                <td className="border-b px-2 py-1">{angka_format}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
