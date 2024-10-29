import React, { useState } from 'react';
import { useFormHandlers } from '@/hooks/lib/form/formHooks';
import { EditModeProps, Semester } from '@/interface/props';
import { ListSelectedRowsProps } from '@/interface/inputProps';
import { router, usePage } from '@inertiajs/react';
import { handleCheckboxChange } from '@/hooks/lib/checkbox/handleCheckboxChange';
import XCircleIcon from '../icons/XCircleIcon';
import Button from '../action/Button';
interface FlashMessages {
    message?: string;
}

interface Props {
    flash: FlashMessages;
    csrf_token: string; // Menambahkan csrf_token ke dalam tipe props
}

interface SemesterFormProps {
    inputListSemester: Semester[];
    listSelectedRows: ListSelectedRowsProps;
    setInputListSemester: React.Dispatch<React.SetStateAction<Semester[]>>;
    setListSelectedRows: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>;
    editMode: EditModeProps;
    setEditMode: React.Dispatch<React.SetStateAction<EditModeProps>>;
}

export default function SemesterForm({ 
    inputListSemester, 
    listSelectedRows, 
    setInputListSemester, 
    setListSelectedRows, 
    editMode, 
    setEditMode 
}: SemesterFormProps) {
    

    const { handleChange, handleRemove } = useFormHandlers();
    const { props } = usePage() as unknown as { props: Props };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Jika dalam mode edit, kirim request PATCH untuk update
        if (editMode.semester) {
            router.patch(
                '/tabel/semester/update',
                {
                    semester: listSelectedRows.tabelSemesterRows.map((item) => ({
                        id: item.id,
                        nama: item.nama,
                    })),
                    _token: props.csrf_token as string, // Sertakan token CSRF
                },
                {
                    onSuccess: () => {
                        setEditMode((prevState) => ({ ...prevState, semester: false })); // Kembali ke mode non-edit
                        setListSelectedRows((prevState) => ({ ...prevState, tabelSemesterRows: [] })); // Bersihkan pilihan
                    },
                },
            );
        } else {
            // Jika tidak dalam mode edit, kirim request POST untuk insert data baru
            router.post(
                '/semester/post',
                {
                    semester: inputListSemester.map((item) => ({
                        nama: item.nama,
                    })),
                    _token: props.csrf_token as string, // Sertakan token CSRF
                },
                {
                    onSuccess: () => {
                        setInputListSemester([]); // Bersihkan form setelah berhasil insert
                    },
                },
            );
        }
    };
    

    return (
        <form action="POST" onSubmit={handleSubmit}>
            <div className="max-h-[250px] p-2 overflow-y-auto">
                {/* Input / Add Data */}
                {inputListSemester.map((input, index) => (
                    <div key={input.id} className="relative w-full px-3 focus-within:border-blue-500 rounded-lg border mb-3 flex gap-x-2 items-center">
                        <label htmlFor={`nama-semester-${input.id}`} className="block text-sm font-medium text-gray-500">
                            {index + 1}.
                        </label>
                        <input
                            type="text"
                            id={`nama-semester-${input.id}`}
                            value={input.nama}
                            onChange={(e) =>
                                handleChange({
                                    id: input.id,
                                    e,
                                    inputList: inputListSemester,
                                    setInputList: setInputListSemester,
                                    tabel: 'tabelSemesterRows',
                                })
                            }
                            className="w-[95%] px-2 border focus:ring-0 p-1 border-none rounded-lg text-sm placeholder:text-sm"
                            placeholder="Semester"
                        />
                        <span
                            onClick={() =>
                                handleRemove({
                                    id: input.id,
                                    inputList: inputListSemester,
                                    setInputList: setInputListSemester,
                                    tabel: 'tabelSemesterRows',
                                })
                            }
                            className="absolute -right-1 -top-2 cursor-pointer"
                        >
                            <XCircleIcon size={5} className="text-white transition-colors duration-150 bg-gray-200 hover:bg-red-500 rounded-full text-sm" />
                        </span>
                    </div>
                ))}

                {/* Edit Data */}
                {editMode.semester &&
                    listSelectedRows.tabelSemesterRows.map((input, index) => (
                        <div key={input.id} className="relative w-full px-3 focus-within:border-blue-500 rounded-lg border mb-3 flex gap-x-2 items-center">
                            <label htmlFor={`${input.id}`} className="block text-sm font-medium text-gray-500">
                                {index + 1}.
                            </label>
                            <input
                                type="text"
                                id={`${input.id}`}
                                value={input.nama}
                                name="dataSemester"
                                onChange={(e) =>
                                    handleChange({
                                        id: input.id,
                                        e: e,
                                        inputList: listSelectedRows.tabelSemesterRows,
                                        setListSelectedRows: setListSelectedRows,
                                        tabel: 'tabelSemesterRows',
                                    })
                                }
                                className="w-[95%] px-2 border focus:ring-0 p-1 border-none rounded-lg text-sm placeholder:text-sm"
                                placeholder="Semester"
                            />
                            <span
                                onClick={() =>
                                    handleRemove({
                                        id: input.id,
                                        inputList: listSelectedRows.tabelSemesterRows,
                                        setListSelectedRows: setListSelectedRows,
                                        tabel: 'tabelSemesterRows',
                                    })
                                }
                                className="absolute -right-1 -top-2 cursor-pointer"
                            >
                                <XCircleIcon size={5} className="text-white transition-colors duration-150 bg-gray-200 hover:bg-red-500 rounded-full text-sm" />
                            </span>
                        </div>
                    ))}
            </div>

            {/* Submit Button */}
            {inputListSemester.length > 0 && !editMode.semester && (
                <div className="flex px-2">
                    <Button type="submit" onClick={handleSubmit} className="py-1 w-full" color="emerald">
                        Simpan
                    </Button>
                </div>
            )}
            {editMode.semester && listSelectedRows.tabelSemesterRows.length > 0 && (
                <div className="flex px-2">
                    <Button type="submit" onClick={handleSubmit} className="py-1 w-full" color="emerald">
                        Simpan Perubahan
                    </Button>
                </div>
            )}
        </form>
    );
}
