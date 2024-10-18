import React from "react";
import FormBtn from "../action/FormBtn";

export default function KecamatanForm() {
    return (
        <form action="">
            <input
                type="text"
                className="block mb-2 w-full border focus:ring-0 border-gray-200 rounded-lg text-sm placeholder:text-sm"
                placeholder="Kecamatan"
            />

            <FormBtn type="button" className="mb-1 py-1">
                Tambah Kecamatan
            </FormBtn>
            <FormBtn type="submit" color="emerald">
                Simpan
            </FormBtn>
        </form>
    );
}
