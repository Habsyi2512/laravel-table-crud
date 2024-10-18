import React, { useState } from "react";
import Button from "../action/Button";
import XCircleIcon from "../icons/XCircleIcon";

export default function TahunForm() {
    const [inputList, setInputList] = useState<{ id: number; value: string }[]>(
        [],
    );

    // Fungsi untuk menangani perubahan input
    const handleInputChange = (
        id: number,
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const updatedInputs = inputList.map((input) => {
            if (input.id === id) {
                return { ...input, value: event.target.value };
            }
            return input;
        });
        setInputList(updatedInputs);
    };

    // Fungsi untuk menambah input baru

    // Fungsi untuk menghapus input tertentu
    const handleRemoveInput = (id: number) => {
        const filteredInputs = inputList.filter((input) => input.id !== id);
        setInputList(filteredInputs);
    };

    // Fungsi untuk menyimpan data form
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Data Kecamatan:", inputList);
    };

    return (
        <form action="POST" onSubmit={handleSubmit}>
            {inputList.map((input, index) => (
                <div
                    key={input.id}
                    className="relative w-full px-3 focus-within:border-blue-500 rounded-lg border mb-2 flex gap-x-2 items-center"
                >
                    <label
                        htmlFor={`nama-kec-${input.id}`}
                        className="block font-medium text-gray-500"
                    >
                        {index + 1}.
                    </label>
                    <input
                        type="text"
                        id={`nama-kec-${input.id}`}
                        value={input.value}
                        onChange={(e) => handleInputChange(input.id, e)}
                        className="w-[95%] px-2 border focus:ring-0 p-1 border-none rounded-lg text-sm placeholder:text-sm"
                        placeholder="Tahun"
                    />
                    <span
                        className="absolute -right-1 -top-2 cursor-pointer"
                        onClick={() => handleRemoveInput(input.id)}
                    >
                        <XCircleIcon
                            size={5}
                            className="text-white transition-colors duration-150 bg-gray-200 hover:bg-red-500 rounded-full text-sm"
                        />
                    </span>
                </div>
            ))}
            <div className="flex">
                <Button type="submit" className="py-1 w-full" color="emerald">
                    Simpan
                </Button>
            </div>
        </form>
    );
}
