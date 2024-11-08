import { ListSelectedRowsProps } from './inputProps';

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
    nav: 'Kecamatan' | 'Tahun' | 'Semester';
    editMode: EditModeProps;
    setNav: React.Dispatch<React.SetStateAction<'Kecamatan' | 'Tahun' | 'Semester'>>;
    setEditMode: React.Dispatch<React.SetStateAction<EditModeProps>>;
    stateList: {
        inputListKecamatan: InputItem[];
        inputListTahun: InputItem[];
        inputListSemester: InputItem[];
        listSelectedRows: ListSelectedRowsProps;
    };
    setStateList: {
        setInputListKecamatan: React.Dispatch<React.SetStateAction<InputItem[]>>;
        setInputListTahun: React.Dispatch<React.SetStateAction<InputItem[]>>;
        setInputListSemester: React.Dispatch<React.SetStateAction<InputItem[]>>;
        setListSelectedRows: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>;
    };
}
export interface EditModeProps {
    kecamatan: boolean;
    tahun: boolean;
    semester: boolean;
}

export interface selectAllTableRowsProps{
    kecamatan: boolean;
    tahun: boolean;
    semester: boolean;
}

// interface Props
export interface Kecamatan {
    id: any;
    nama: string;
}
export interface Semester {
    id: any;
    nama: string;
}

export interface Year {
    id: any;
    nama: string;
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

export interface InputItem {
    id: number;
    nama: string;
}
