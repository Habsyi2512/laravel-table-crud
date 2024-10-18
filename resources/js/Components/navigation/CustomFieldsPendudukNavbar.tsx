import Button from "../action/Button";
import PlusIcon from "../icons/PlusIcon";
import { CustomFieldsPendudukNavbarProps } from "@/interface/props";
import { useFormHandlers } from "@/hooks/formHooks";

export default function CustomFieldsPendudukNavbar({
    nav,
    setNav,
    stateList,
    setStateList,
}: CustomFieldsPendudukNavbarProps) {
    const navOption = [
        { label: "Kecamatan" },
        { label: "Tahun" },
        { label: "Semester" },
    ];

    const { handleAddInput } = useFormHandlers();
    const { inputListKecamatan, inputListTahun, inputListSemester } = stateList;
    const { setInputListKecamatan, setInputListSemester, setInputListTahun } =
        setStateList;
    return (
        <nav className="mb-2 flex w-full">
            <ul className="w-full basis-2/3 h-full flex space-x-2">
                {navOption.map((item, index) => {
                    return (
                        <li key={index}>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setNav(item.label);
                                }}
                                className={`text-sm ${nav == item.label ? "bg-blue-500 hover:bg-blue-400 text-white" : "text-blue-500 hover:text-blue-400 border-blue-500 bg-white hover:border-blue-400"} border-b border-r rounded-lg shadow font-medium h-full py-1 px-3`}
                            >
                                {item.label}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <ul className="flex gap-x-2 justify-end w-full items-center">
                <li>hapus</li>
                <li>edit</li>
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
            </ul>
        </nav>
    );
}
