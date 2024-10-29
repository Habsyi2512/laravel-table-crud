import React, { useState } from 'react';
import Button from '../action/Button';
import XCircleIcon from '../icons/XCircleIcon';
import { useFormHandlers } from '@/hooks/lib/form/formHooks';
import { EditModeProps, Kecamatan } from '@/interface/props';
import { ListSelectedRowsProps } from '@/interface/inputProps';
import { router, usePage } from '@inertiajs/react';

interface FlashMessages {
    message?: string;
}

interface Props {
    flash: FlashMessages;
    csrf_token: string; // Menambahkan csrf_token ke dalam tipe props
}

interface TahunFormProps {
    inputListTahun: Kecamatan[];
    listSelectedRows: ListSelectedRowsProps;
    setInputListTahun: React.Dispatch<React.SetStateAction<Kecamatan[]>>;
    setListSelectedRows: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>;
    editMode: EditModeProps;
    setEditMode: React.Dispatch<React.SetStateAction<EditModeProps>>;
}

export default function TahunForm({ inputListTahun, listSelectedRows, setInputListTahun, setListSelectedRows, editMode, setEditMode }: TahunFormProps) {
    const { handleChange, handleRemove } = useFormHandlers();
    const { props } = usePage() as unknown as { props: Props };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Jika dalam mode edit, kirim request PATCH untuk update
        if (editMode.tahun) {
            router.patch(
                '/tabel/tahun/update',
                {
                    tahun: listSelectedRows.tabelTahunRows.map((item) => ({
                        id: item.id,
                        nama: item.nama,
                    })),
                    _token: props.csrf_token as string, // Sertakan token CSRF
                },
                {
                    onSuccess: () => {
                        setEditMode((prevState) => ({ ...prevState, tahun: false })); // Kembali ke mode non-edit
                        setListSelectedRows((prevState) => ({ ...prevState, tabelTahunRows: [] })); // Bersihkan pilihan
                    },
                },
            );
        } else {
            // Jika tidak dalam mode edit, kirim request POST untuk insert data baru
            router.post(
                '/tahun/post',
                {
                    tahun: inputListTahun.map((item) => ({
                        nama: item.nama,
                    })),
                    _token: props.csrf_token as string, // Sertakan token CSRF
                },
                {
                    onSuccess: () => {
                        setInputListTahun([]); // Bersihkan form setelah berhasil insert
                    },
                },
            );
        }
    };

    return (
        <form action="POST" onSubmit={handleSubmit}>
            <div className="max-h-[250px] p-2 overflow-y-auto">
                {/* Input / Add Data */}
                {inputListTahun.map((input, index) => (
                    <div key={input.id} className="relative w-full px-3 focus-within:border-blue-500 rounded-lg border mb-3 flex gap-x-2 items-center">
                        <label htmlFor={`nama-tahun-${input.id}`} className="block text-sm font-medium text-gray-500">
                            {index + 1}.
                        </label>
                        <input
                            type="text"
                            id={`nama-tahun-${input.id}`}
                            value={input.nama}
                            onChange={(e) =>
                                handleChange({
                                    id: input.id,
                                    e,
                                    inputList: inputListTahun,
                                    setInputList: setInputListTahun,
                                    tabel: 'tabelTahunRows',
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
                                    tabel: 'tabelTahunRows',
                                })
                            }
                            className="absolute -right-1 -top-2 cursor-pointer"
                        >
                            <XCircleIcon size={5} className="text-white transition-colors duration-150 bg-gray-200 hover:bg-red-500 rounded-full text-sm" />
                        </span>
                    </div>
                ))}

                {/* Edit Data */}
                {editMode.tahun &&
                    listSelectedRows.tabelTahunRows.map((input, index) => (
                        <div key={input.id} className="relative w-full px-3 focus-within:border-blue-500 rounded-lg border mb-3 flex gap-x-2 items-center">
                            <label htmlFor={`${input.id}`} className="block text-sm font-medium text-gray-500">
                                {index + 1}.
                            </label>
                            <input
                                type="text"
                                id={`${input.id}`}
                                value={input.nama}
                                name="dataTahun"
                                onChange={(e) =>
                                    handleChange({
                                        id: input.id,
                                        e: e,
                                        inputList: listSelectedRows.tabelTahunRows,
                                        setListSelectedRows: setListSelectedRows,
                                        tabel: 'tabelTahunRows',
                                    })
                                }
                                className="w-[95%] px-2 border focus:ring-0 p-1 border-none rounded-lg text-sm placeholder:text-sm"
                                placeholder="Tahun"
                            />
                            <span
                                onClick={() =>
                                    handleRemove({
                                        id: input.id,
                                        inputList: listSelectedRows.tabelTahunRows,
                                        setListSelectedRows: setListSelectedRows,
                                        tabel: 'tabelTahunRows',
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
            {inputListTahun.length > 0 && !editMode.tahun && (
                <div className="flex px-2">
                    <Button type="submit" onClick={handleSubmit} className="py-1 w-full" color="emerald">
                        Simpan
                    </Button>
                </div>
            )}
            {editMode.tahun && listSelectedRows.tabelTahunRows.length > 0 && (
                <div className="flex px-2">
                    <Button type="submit" onClick={handleSubmit} className="py-1 w-full" color="emerald">
                        Simpan Perubahan
                    </Button>
                </div>
            )}
        </form>
    );
}
