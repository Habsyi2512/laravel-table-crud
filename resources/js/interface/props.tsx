export interface BerandaProps {
    data: {
        name: string;
        age: number;
    };
    penduduk: Penduduk[];
}

export interface Kecamatan {
    id: any;
    nama: string;
}
export interface Semester {
    id: any;
    semester: string;
}

export interface Penduduk {
    id: number;
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
