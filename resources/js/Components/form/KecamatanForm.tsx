import { ListSelectedRowsProps } from '@/interface/inputProps';
import Button from '../action/Button';
import XCircleIcon from '../icons/XCircleIcon';
import { useFormHandlers } from '@/hooks/formHooks';
import { EditModeProps, Kecamatan } from '@/interface/props';
import { router, usePage } from '@inertiajs/react';
import React, { useState } from 'react';

interface FlashMessages {
    message?: string;
}

interface Props {
    flash: FlashMessages;
    csrf_token: string; // Menambahkan csrf_token ke dalam tipe props
}

interface KecamatanFormProps {
    inputListKecamatan: Kecamatan[];
    listSelectedRows: ListSelectedRowsProps;
    setInputListKecamatan: React.Dispatch<React.SetStateAction<Kecamatan[]>>;
    setListSelectedRows: React.Dispatch<React.SetStateAction<ListSelectedRowsProps>>;
    editMode: EditModeProps;
    setEditMode: React.Dispatch<React.SetStateAction<EditModeProps>>;
}

export default function KecamatanForm({ inputListKecamatan, setInputListKecamatan, listSelectedRows, setListSelectedRows, editMode, setEditMode }: KecamatanFormProps) {
    const { props } = usePage() as unknown as { props: Props };
    const { handleChange, handleRemove } = useFormHandlers();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Jika dalam mode edit, kirim request PATCH untuk update
        if (editMode.kecamatan) {
            router.patch(
                '/tabel/kecamatan/update',
                {
                    kecamatan: listSelectedRows.tabelKecamatanRows.map((item) => ({
                        id: item.id,
                        nama: item.nama,
                    })),
                    _token: props.csrf_token as string, // Sertakan token CSRF
                },
                {
                    onSuccess: () => {
                        setEditMode((prevState) => ({ ...prevState, kecamatan: false })); // Kembali ke mode non-edit
                        setListSelectedRows((prevState) => ({ ...prevState, tabelKecamatanRows: [] })); // Bersihkan pilihan
                    },
                },
            );
        } else {
            // Jika tidak dalam mode edit, kirim request POST untuk insert data baru
            router.post(
                '/kecamatan/post',
                {
                    kecamatan: inputListKecamatan.map((item) => ({
                        nama: item.nama,
                    })),
                    _token: props.csrf_token as string, // Sertakan token CSRF
                },
                {
                    onSuccess: () => {
                        setInputListKecamatan([]); // Bersihkan form setelah berhasil insert
                    },
                },
            );
        }
    };

    return (
        <form action="POST" onSubmit={handleSubmit}>
            <div className="max-h-[250px] p-2 overflow-y-auto">
                {/* Input / Add Data */}
                {inputListKecamatan.map((input, index) => (
                    <div key={input.id} className="relative w-full px-3 focus-within:border-blue-500 rounded-lg border mb-3 flex gap-x-2 items-center">
                        <label htmlFor={`nama-kec-${input.id}`} className="block text-sm font-medium text-gray-500">
                            {index + 1}.
                        </label>
                        <input
                            type="text"
                            id={`nama-kec-${input.id}`}
                            value={input.nama}
                            onChange={(e) =>
                                handleChange({
                                    id: input.id,
                                    e,
                                    inputList: inputListKecamatan,
                                    setInputList: setInputListKecamatan,
                                    tabel: 'tabelKecamatanRows',
                                })
                            }
                            className="w-[95%] px-2 border focus:ring-0 p-1 border-none rounded-lg text-sm placeholder:text-sm"
                            placeholder="Kecamatan"
                        />
                        <span
                            onClick={() =>
                                handleRemove({
                                    id: input.id,
                                    inputList: inputListKecamatan,
                                    setInputList: setInputListKecamatan,
                                    tabel: 'tabelKecamatanRows',
                                    setListSelectedRows: setListSelectedRows,
                                })
                            }
                            className="absolute -right-1 -top-2 cursor-pointer"
                        >
                            <XCircleIcon size={5} className="text-white transition-colors duration-150 bg-gray-200 hover:bg-red-500 rounded-full text-sm" />
                        </span>
                    </div>
                ))}

                {/* Edit Data */}
                {editMode.kecamatan &&
                    listSelectedRows.tabelKecamatanRows.map((input, index) => (
                        <div key={input.id} className="relative w-full px-3 focus-within:border-blue-500 rounded-lg border mb-3 flex gap-x-2 items-center">
                            <label htmlFor={`${input.id}`} className="block text-sm font-medium text-gray-500">
                                {index + 1}.
                            </label>
                            <input
                                type="text"
                                id={`${input.id}`}
                                value={input.nama}
                                name="dataKecamatan"
                                onChange={(e) =>
                                    handleChange({
                                        id: input.id,
                                        e: e,
                                        inputList: listSelectedRows.tabelKecamatanRows,
                                        setListSelectedRows: setListSelectedRows,
                                        tabel: 'tabelKecamatanRows',
                                    })
                                }
                                className="w-[95%] px-2 border focus:ring-0 p-1 border-none rounded-lg text-sm placeholder:text-sm"
                                placeholder="Kecamatan"
                            />
                            <span
                                onClick={() =>
                                    handleRemove({
                                        id: input.id,
                                        inputList: listSelectedRows.tabelKecamatanRows,
                                        setListSelectedRows: setListSelectedRows,
                                        tabel: 'tabelKecamatanRows',
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
            {inputListKecamatan.length > 0 && !editMode.kecamatan ? (
                <div className="flex px-2">
                    <Button type="submit" onClick={handleSubmit} className="py-1 w-full" color="emerald">
                        Simpan
                    </Button>
                </div>
            ) : (
                editMode.kecamatan &&
                listSelectedRows.tabelKecamatanRows.length > 0 && (
                    <div className="flex px-2">
                        <Button type="submit" onClick={handleSubmit} className="py-1 w-full" color="emerald">
                            Simpan Perubahan
                        </Button>
                    </div>
                )
            )}
        </form>
    );
}
