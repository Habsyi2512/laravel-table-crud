import { InputField } from "@/interface/inputProps";
import React, { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import { TambahPendudukFormProps } from "@/interface/props";

export default function TambahPendudukForm({
    dataKecamatan,
    dataSemester,
    dataTahun,
}: TambahPendudukFormProps) {
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
    useEffect(() => {
        const savedInputFields = localStorage.getItem("inputFields");
        if (savedInputFields) {
            setInputFields(JSON.parse(savedInputFields) as InputField[]);
        }
    }, []);

    useEffect(() => {
        console.log("input Fields", inputFields);
        if (inputFields.length > 0) {
            localStorage.setItem("inputFields", JSON.stringify(inputFields));
        } else {
            localStorage.removeItem("inputFields");
        }
    }, [inputFields]);

    return (
        <>
            <form action="POST" className={`text-sm h-fit overflow-y-auto`}>
                <div className="max-h-[300px] overflow-auto">
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

                                    {dataKecamatan.map((item, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={item.nama}
                                            >
                                                {item.nama}
                                            </option>
                                        );
                                    })}
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
                                    {dataSemester.map((item, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={item.semester}
                                            >
                                                {item.semester}
                                            </option>
                                        );
                                    })}
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
                                        {dataTahun.map((item, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item.tahun}
                                                >
                                                    {item.tahun}
                                                </option>
                                            );
                                        })}
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
                                className="px-3 py-1 rounded-md bg-red-500 hover:bg-red-400 active:bg-red-500 transition-colors duration-150 text-white"
                            >
                                Hapus
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-1">
                    <button
                        type="button"
                        onClick={handleAddField}
                        className="bg-blue-500 hover:bg-blue-400 active:bg-blue-500 transition-colors duration-150 w-full p-2 rounded-lg text-white flex items-center justify-center"
                    >
                        Tambah Data
                    </button>
                    {inputFields.length > 0 && (
                        <button
                            type="button"
                            onClick={() => console.log("Simpan data...")}
                            className="bg-emerald-500 mt-2 hover:bg-emerald-400 active:bg-emerald-500 transition-colors duration-150 w-full p-2 rounded-lg text-white flex items-center justify-center space-x-2"
                        >
                            Simpan
                        </button>
                    )}
                </div>
            </form>
        </>
    );
}
