import React from "react";
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
    return (
        <>
            <li className="flex items-center justify-center">
                {nav == "Kecamatan" && (
                    <Button
                        onClick={() =>
                            handleAddInput({
                                inputList: inputListKecamatan,
                                setInputList: setInputListKecamatan,
                            })
                        }
                        className="w-fit p-.1"
                    >
                        <PlusIcon size={5} />
                    </Button>
                )}
                {nav == "Tahun" && (
                    <Button
                        onClick={() =>
                            handleAddInput({
                                inputList: inputListTahun,
                                setInputList: setInputListTahun,
                            })
                        }
                        className="w-fit p-.1"
                    >
                        <PlusIcon size={5} />
                    </Button>
                )}
                {nav == "Semester" && (
                    <Button
                        onClick={() =>
                            handleAddInput({
                                inputList: inputListSemester,
                                setInputList: setInputListSemester,
                            })
                        }
                        className="w-fit p-.1"
                    >
                        <PlusIcon size={5} />
                    </Button>
                )}
            </li>
        </>
    );
}
