export interface BerandaProps {
    data: {
        name: string;
        age: number;
    };
    penduduk: Penduduk[];
}



export interface Penduduk {
    semester: string;
    kecamatan: string;
    laki: string;
    perempuan: string;
    total: string;
}[]
