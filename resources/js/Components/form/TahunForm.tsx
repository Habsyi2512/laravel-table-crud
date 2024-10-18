import React, { useState } from "react";
import Button from "../action/Button";
import XCircleIcon from "../icons/XCircleIcon";
import { useFormHandlers } from "@/hooks/formHooks";
import { InputItem } from "@/interface/props";

export default function TahunForm({
    inputListTahun,
    setInputListTahun,
}: {
    inputListTahun: InputItem[];
    setInputListTahun: any;
}) {
    const { handleChange, handleRemove } = useFormHandlers();

    return (
        <form action="POST">
            <div className="max-h-[250px] p-2 overflow-y-auto">
                {inputListTahun.map((input, index) => (
                    <div
                        key={input.id}
                        className="relative w-full px-3 focus-within:border-blue-500 rounded-lg border mb-3 flex gap-x-2 items-center"
                    >
                        <label
                            htmlFor={`nama-kec-${input.id}`}
                            className="block text-sm font-medium text-gray-500"
                        >
                            {index + 1}.
                        </label>
                        <input
                            type="text"
                            id={`nama-kec-${input.id}`}
                            value={input.value}
                            onChange={(e) =>
                                handleChange({
                                    id: input.id,
                                    e,
                                    inputList: inputListTahun,
                                    setInputList: setInputListTahun,
                                })
                            }
                            className="w-[95%] px-2 border focus:ring-0 p-1 border-none rounded-lg text-sm placeholder:text-sm"
                            placeholder="Tahun"
                        />
                        <span
                            onClick={() =>
                                handleRemove({
                                    id: input.id,
                                    inputList: inputListTahun,
                                    setInputList: setInputListTahun,
                                })
                            }
                            className="absolute -right-1 -top-2 cursor-pointer"
                        >
                            <XCircleIcon
                                size={5}
                                className="text-white transition-colors duration-150 bg-gray-200 hover:bg-red-500 rounded-full text-sm"
                            />
                        </span>
                    </div>
                ))}
            </div>
            {inputListTahun.length > 0 && (
                <div className="flex px-2">
                    <Button
                        type="submit"
                        className="py-1 w-full"
                        color="emerald"
                    >
                        Simpan
                    </Button>
                </div>
            )}
        </form>
    );
}
