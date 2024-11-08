import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import DownIcon from "@/components/icons/DownIcon";
import { TahunTabelProps, Year } from "@/interface/props";

export default function TahunTabel({
    dataTahun,
    tahunSekarang,
}: TahunTabelProps) {
    const [openTahun, setOpenTahun] = useState(false);
    const [tahun, setTahun] = useState(tahunSekarang);

    const handleTahunSearchButton = () => {
        setOpenTahun(!openTahun);
    };

    useEffect(() => {
        window.addEventListener("click", (e: any) => {
            if (openTahun && !e.target.classList.contains("openTable")) {
                setOpenTahun(false);
            }
        });
    }, [openTahun]);

    return (
        <div className="flex mb-2 relative space-x-3">
            <div>
                <button
                    onClick={handleTahunSearchButton}
                    className="border w-24 openTable justify-between space-x-2 hover:bg-slate-200 active:bg-white transition-colors duration-150 flex items-center rounded border-slate-200 p-1 px-2"
                >
                    <p className="openTable text-gray-700 text-sm">{tahun}</p>
                    <DownIcon size={5} className="openTable" />
                </button>
                {openTahun && (
                    <ul className="absolute mt-1 w-24 max-h-[120px] rounded border border-slate-200 overflow-y-auto bg-white">
                        {dataTahun.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={(e) => {
                                        setTahun(
                                            e.currentTarget.textContent ?? "",
                                        );
                                    }}
                                    className="p-1 px-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-slate-200 transition-colors duration-150 cursor-pointer border-b"
                                >
                                    {item.nama}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
            <Link
                method="get"
                as="button"
                type="button"
                href={`/?year=${tahun}`}
                className="px-2 flex items-center justify-center text-white text-sm transition-colors duration-150 bg-blue-500 hover:bg-blue-400 active:bg-blue-500 rounded-lg"
            >
                Cari Data
            </Link>
        </div>
    );
}
