import { InputField } from "@/interface/inputProps";
import React, { useState } from "react";

export default function TambahPendudukForm() {
    const [inputFields, setInputFields] = useState<InputField[]>([]);
    const handleAddField = () => {
        setInputFields([
            ...inputFields,
            {
                id: Date.now(),
                year: "",
                district: "",
                semester: "",
                male: "",
                female: "",
            },
        ]);
    };

    const handleRemoveField = (id: number) => {
        setInputFields(inputFields.filter((field) => field.id !== id));
    };

    const handleInputChange = (
        id: number,
        field: keyof InputField,
        value: string,
    ) => {
        const updatedFields = inputFields.map((inputField) =>
            inputField.id === id
                ? { ...inputField, [field]: value }
                : inputField,
        );
        setInputFields(updatedFields);
    };

    return (
        <>
            <form
                action="POST"
                className={`text-sm ${inputFields.length > 0 && "mb-2"} h-fit max-h-[300px] overflow-y-auto`}
            >
                {inputFields.map((field) => (
                    <div
                        className="border p-2 mb-2 border-slate-300 shadow rounded-lg"
                        key={field.id}
                    >
                        <div className="box-input mb-2 grid grid-cols-2 gap-2">
                            <select
                                className="rounded-md p-2 border border-slate-300"
                                value={field.district}
                                onChange={(e) =>
                                    handleInputChange(
                                        field.id,
                                        "district",
                                        e.target.value,
                                    )
                                }
                            >
                                <option value="">Pilih Kecamatan</option>
                                <option value="siantan">Siantan</option>
                                <option value="palmatak">Palmatak</option>
                                <option value="jemaja">Jemaja</option>
                                <option value="letung">Letung</option>
                            </select>

                            <select
                                className="rounded-md p-2 border border-slate-300 text-sm"
                                value={field.semester}
                                onChange={(e) =>
                                    handleInputChange(
                                        field.id,
                                        "semester",
                                        e.target.value,
                                    )
                                }
                            >
                                <option value="">Pilih Semester</option>
                                <option value="semester1">Semester 1</option>
                                <option value="semester2">Semester 2</option>
                            </select>
                            <div className="col-span-2 gap-2 grid grid-cols-2 lg:grid-cols-3">
                                <select
                                    className="rounded-md p-2 border border-slate-300 col-span-2 lg:col-span-1"
                                    value={field.year}
                                    onChange={(e) =>
                                        handleInputChange(
                                            field.id,
                                            "year",
                                            e.target.value,
                                        )
                                    }
                                >
                                    <option value="">Pilih Tahun</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                </select>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Laki - laki"
                                        className="rounded-md border border-slate-300 w-full"
                                        value={field.male}
                                        onChange={(e) =>
                                            handleInputChange(
                                                field.id,
                                                "male",
                                                e.target.value,
                                            )
                                        }
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Perempuan"
                                        className="rounded-md border border-slate-300 w-full"
                                        value={field.female}
                                        onChange={(e) =>
                                            handleInputChange(
                                                field.id,
                                                "female",
                                                e.target.value,
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => handleRemoveField(field.id)}
                            className="px-3 py-1 rounded-md bg-red-500 hover:bg-red-600 transition-colors duration-150 text-white"
                        >
                            Hapus
                        </button>
                    </div>
                ))}
            </form>
            <button
                type="button"
                onClick={handleAddField}
                className="bg-blue-400 hover:bg-blue-500 active:bg-blue-400 transition-colors duration-150 w-full p-2 rounded-lg text-white flex items-center justify-center"
            >
                Tambah Data
            </button>
            {inputFields.length > 0 && (
                <button
                    type="button"
                    onClick={() => console.log("Simpan data...")}
                    className="bg-green-400 mt-2 hover:bg-green-500 active:bg-green-400 transition-colors duration-150 w-full p-2 rounded-lg text-white flex items-center justify-center space-x-2"
                >
                    Simpan
                </button>
            )}
        </>
    );
}
