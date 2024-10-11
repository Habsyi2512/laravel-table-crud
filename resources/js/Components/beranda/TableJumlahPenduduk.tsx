import React from "react";
import { Penduduk, KecData, SemesterData } from "@/interface/props";

export const TableJumlahPenduduk = ({ penduduk }: { penduduk: Penduduk[] }) => {
    const groupedData = penduduk.reduce<Record<string, KecData>>(
        (acc, curr) => {
            const { kecamatan, semester, laki, perempuan, total } = curr;

            if (!acc[kecamatan]) {
                acc[kecamatan] = {
                    kecamatan,
                    semester1: { laki: 0, perempuan: 0, total: 0 },
                    semester2: { laki: 0, perempuan: 0, total: 0 },
                };
            }
            if (semester == "Semester 1") {
                acc[kecamatan].semester1.laki += Number(laki);
                acc[kecamatan].semester1.perempuan += Number(perempuan);
                acc[kecamatan].semester1.total += Number(total);
            } else if (semester == "Semester 2") {
                acc[kecamatan].semester2.laki += Number(laki);
                acc[kecamatan].semester2.perempuan += Number(perempuan);
                acc[kecamatan].semester2.total += Number(total);
            }

            return acc;
        },
        {},
    );

    const pendudukResult: KecData[] = Object.values(groupedData).map(
        (kecData) => ({
            kecamatan: kecData.kecamatan,
            semester1: kecData.semester1,
            semester2: kecData.semester2,
        }),
    );
    const totalSemesters = pendudukResult.reduce(
        (acc, curr) => {
            acc.semester1.laki += curr.semester1.laki;
            acc.semester1.perempuan += curr.semester1.perempuan;
            acc.semester1.total += curr.semester1.total;

            acc.semester2.laki += curr.semester2.laki;
            acc.semester2.perempuan += curr.semester2.perempuan;
            acc.semester2.total += curr.semester2.total;

            return acc;
        },
        {
            semester1: { laki: 0, perempuan: 0, total: 0 },
            semester2: { laki: 0, perempuan: 0, total: 0 },
        },
    );
    // const semestersResult: KecData[] = Object.values(groupedData).map(
    //     (kecData) => ({
    //         kecamatan: kecData.kecamatan,
    //         semester1: kecData.semester1,
    //         semester2: kecData.semester2,
    //     }),
    // );

    React.useEffect(() => {
        console.log("total =", totalSemesters);
    }, []);
    return (
        <>
            <table className="border-collapse py-2 rounded-xl border border-red-500 shadow overflow-hidden w-full">
                <thead>
                    <tr className="bg-blue-500 border border-black text-white">
                        <th className="border text-sm py-2" rowSpan={2}>
                            No.
                        </th>
                        <th className="border text-sm py-2" rowSpan={2}>
                            Kecamatan
                        </th>
                        <th className="border text-sm py-2" colSpan={3}>
                            Semester 1
                        </th>
                        <th className="border text-sm py-2" colSpan={3}>
                            Semester 2
                        </th>
                    </tr>
                    <tr className="bg-blue-500 text-white">
                        <th className="border text-sm px-3 py-2">Laki-laki</th>
                        <th className="border text-sm px-3 py-2">Perempuan</th>
                        <th className="border text-sm px-3 py-2">Total</th>
                        <th className="border text-sm px-3 py-2">Laki-laki</th>
                        <th className="border text-sm px-3 py-2">Perempuan</th>
                        <th className="border text-sm px-3 py-2">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {pendudukResult.map((item, index) => {
                        return (
                            <tr
                                key={index}
                                className="hover:bg-gray-100 transition-colors"
                            >
                                <td className="border px-4 py-2 text-center">
                                    {index + 1}
                                </td>
                                <td className="border px-4 py-2">
                                    {item.kecamatan}
                                </td>
                                <td className="border px-4 py-2">
                                    {item.semester1.laki || "-"}
                                </td>
                                <td className="border px-4 py-2">
                                    {item.semester1.perempuan || "-"}
                                </td>
                                <td className="border px-4 py-2">
                                    {item.semester1.total || "-"}
                                </td>
                                <td className="border px-4 py-2">
                                    {item.semester2.laki || "-"}
                                </td>
                                <td className="border px-4 py-2">
                                    {item.semester2.perempuan || "-"}
                                </td>
                                <td className="border px-4 py-2">
                                    {item.semester2.total || "-"}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td
                            className="text-center text-sm font-medium text-gray-600"
                            colSpan={2}
                        >
                            Total
                        </td>
                        <td className="p-2 border text-center text-sm font-medium text-gray-600">
                            {totalSemesters.semester1.laki || "-"}
                        </td>
                        <td className="p-2 border text-center text-sm font-medium text-gray-600">
                            {totalSemesters.semester1.perempuan || "-"}
                        </td>
                        <td className="p-2 border text-center text-sm font-medium text-gray-600">
                            {totalSemesters.semester1.total || "-"}
                        </td>
                        <td className="p-2 border text-center text-sm font-medium text-gray-600">
                            {totalSemesters.semester2.laki || "-"}
                        </td>
                        <td className="p-2 border text-center text-sm font-medium text-gray-600">
                            {totalSemesters.semester2.perempuan || "-"}
                        </td>
                        <td className="p-2 border text-center text-sm font-medium text-gray-600">
                            {totalSemesters.semester2.total || "-"}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
};
