export interface BerandaProps {
    data: {
        name: string;
        age: number;
    };
    penduduk: Penduduk[];
}

export interface Penduduk {
    id: number;
    semester: string;
    kecamatan: string;
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
    kecamatan: string;
    semester1: SemesterData;
    semester2: SemesterData;
}
