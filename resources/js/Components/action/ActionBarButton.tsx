import React from "react";
import Button from "./Button";
import { useFormHandlers } from "@/hooks/formHooks";
import { InputItem } from "@/interface/props";
import PlusIcon from "../icons/PlusIcon";
import ActionBarButtonDelete from "./ActionBarButtonDelete";
import ActionBarButtonEdit from "./ActionBarButtonEdit";
import ActionBarButtonAdd from "./ActionBarButtonAdd";

interface ActionBarButtonProps {
    nav: string;
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

export default function ActionBarButton({
    nav,
    stateList,
    setStateList,
}: ActionBarButtonProps) {
    const { handleAddInput } = useFormHandlers();
    const { inputListKecamatan, inputListTahun, inputListSemester } = stateList;
    const { setInputListKecamatan, setInputListSemester, setInputListTahun } =
        setStateList;
    const dataKu = {
        nav: nav,
        stateList: {
            inputListKecamatan,
            inputListTahun,
            inputListSemester,
        },
        setStateList: {
            setInputListKecamatan,
            setInputListTahun,
            setInputListSemester,
        },
    };
    return (
        <ul className="flex gap-x-2 justify-end w-full items-center">
            <ActionBarButtonDelete />
            <ActionBarButtonEdit />
            <ActionBarButtonAdd data={dataKu} />
        </ul>
    );
}
