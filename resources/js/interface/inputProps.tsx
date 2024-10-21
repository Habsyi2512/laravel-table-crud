import { Kecamatan, Semester, Year } from './props';

export interface InputField {
    id: number;
    year: string;
    district: string;
    semester: string;
    male: string;
    female: string;
}

export interface ListSelectedRowsProps {
    tabelKecamatanRows: Kecamatan[];
    tabelTahunRows: Year[];
    tabelSemesterRows: Semester[];
    length: number;
}
