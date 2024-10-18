// Page Props
export interface BerandaProps {
    penduduk: Penduduk[];
    dataTahun: Year[];
    tahunSekarang: string;
}
export interface TahunTabelProps {
    dataTahun: Year[];
    tahunSekarang: string;
}

export interface PaginationProps {
    links: {
        active: any;
        label: any;
        url: any;
    }[];
}
export interface TambahPendudukFormProps {
    dataKecamatan: Kecamatan[];
    dataTahun: Year[];
    dataSemester: Semester[];
}

export interface EditTabelProps {
    dataPenduduk: {
        data: Penduduk[];
        links: {
            active: any;
            label: any;
            url: any;
        }[];
        current_page: string;
    };
    dataKecamatan: Kecamatan[];
    dataTahun: Year[];
    dataSemester: Semester[];
}

export interface CostumInputFieldPendudukLayoutProps {
    dataKecamatan: Kecamatan[];
    dataSemester: Semester[];
    dataTahun: Year[];
}

interface ComponentRenderTableWithProps {
    label: string;
    component: JSX.Element | any;
}

export interface RenderTabelProps {
    nav: string;
    components?: ComponentRenderTableWithProps[];
}

export interface CustomFieldsPendudukNavbarProps {
    nav: string;
    setNav: any;
    stateList: {
        inputListKecamatan: InputItem[];
        inputListTahun: InputItem[];
        inputListSemester: InputItem[];
    };
    setStateList: {
        setInputListKecamatan: React.Dispatch<
            React.SetStateAction<InputItem[]>
        >;
        setInputListTahun: React.Dispatch<React.SetStateAction<InputItem[]>>;
        setInputListSemester: React.Dispatch<React.SetStateAction<InputItem[]>>;
    };
}

// interface Props
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
    year: Year;
    semester: Semester;
    kecamatan: Kecamatan;
    laki: string;
    perempuan: string;
    total: string;
}

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

export interface InputItem{
    id: number;
    value: string;
}
