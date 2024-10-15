
// Halaman Props
export interface BerandaProps {
    penduduk: Penduduk[];
    dataTahun: Year[]; 
    tahunSekarang :string;
}
export interface TahunTabelProps {
    dataTahun: Year[]; 
    tahunSekarang :string;
}

export interface Kecamatan {
    id: any;
    nama: string;
}
export interface Semester {
    id: any;
    semester: string;
}

export interface Year {
    id: any;
    tahun: string;
}

export interface Penduduk {
    id: number;
    tahun:Year
    semester: Semester;
    kecamatan: Kecamatan;
    laki: string;
    perempuan: string;
    total: string;
}
[];

export interface SemesterData {
    laki: number;
    perempuan: number;
    total: number;
}

export interface KecData {
    id: any;
    kecamatan: Kecamatan;
    semester1: SemesterData;
    semester2: SemesterData;
}
