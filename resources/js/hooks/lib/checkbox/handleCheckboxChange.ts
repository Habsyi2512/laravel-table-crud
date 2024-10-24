// import { useCallback } from "react";

// export const handleCheckboxChange = (kecamatan:Kecamatan) => {
//     setSelectedRows((prevSelectedRows) => {
//         const isSelected = prevSelectedRows.tabelKecamatanRows.some((row) => row.id === kecamatan.id);
//         const updatedRows = isSelected ? prevSelectedRows.tabelKecamatanRows.filter((row) => row.id !== kecamatan.id) : [...prevSelectedRows.tabelKecamatanRows, kecamatan];
//         return {
//             ...prevSelectedRows,
//             tabelKecamatanRows: updatedRows,
//             length: {
//                 ...prevSelectedRows.length,
//                 kecamatan: updatedRows.length,
//             },
//         };
//     });
// };