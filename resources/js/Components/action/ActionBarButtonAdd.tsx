import React, { useState, useEffect } from "react";
import PlusIcon from "../icons/PlusIcon";
import Button from "./Button";
import { useFormHandlers } from "@/hooks/formHooks";
import { InputItem } from "@/interface/props";

interface ActionBarButtonAddProps {
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

export default function ActionBarButtonAdd({
    data,
}: {
    data: ActionBarButtonAddProps;
}) {
    const { handleAddInput } = useFormHandlers();
    const { nav } = data;
    const { inputListKecamatan, inputListTahun, inputListSemester } =
        data.stateList;
    const { setInputListKecamatan, setInputListSemester, setInputListTahun } =
        data.setStateList;

    // State untuk menyimpan inputList dan setInputList dinamis
    const [inputList, setInputList] = useState<InputItem[]>([]);
    const [setInputListHandler, setSetInputListHandler] = useState<
        React.Dispatch<React.SetStateAction<InputItem[]>>
    >(() => () => {});

    // Mengubah inputList dan setInputList sesuai dengan nav
    useEffect(() => {
        switch (nav) {
            case "Kecamatan":
                setInputList(inputListKecamatan);
                setSetInputListHandler(() => setInputListKecamatan);
                break;
            case "Tahun":
                setInputList(inputListTahun);
                setSetInputListHandler(() => setInputListTahun);
                break;
            case "Semester":
                setInputList(inputListSemester);
                setSetInputListHandler(() => setInputListSemester);
                break;
            default:
                break;
        }
    }, [nav, inputListKecamatan, inputListTahun, inputListSemester]);

    return (
        <li className="flex items-center justify-center">
            <Button
                onClick={() =>
                    handleAddInput({
                        inputList,
                        setInputList: setInputListHandler,
                    })
                }
                className="w-7 h-7 flex items-center justify-center"
            >
                <PlusIcon className="w-5 h-5" />
            </Button>
        </li>
    );
}
