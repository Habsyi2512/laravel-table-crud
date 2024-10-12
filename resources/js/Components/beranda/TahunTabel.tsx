import React, { useState, useEffect } from "react";
import DownIcon from "../icons/DownIcon";

export default function TahunTabel() {
    const [openTahun, setOpenTahun] = useState(false);
    const [tahun, setTahun] = useState("2022");

    interface DataTahun {
        id: any;
        tahun: string;
    }

    const dataTahun: DataTahun[] = [
        { id: 1, tahun: "2022" },
        { id: 2, tahun: "2023" },
        // Add more data as needed...
    ];

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
                    onClick={() => setOpenTahun(!openTahun)}
                    className="border openTable justify-between space-x-2 hover:bg-slate-200 active:bg-white transition-colors duration-150 flex items-center rounded border-slate-200 p-1 px-2"
                >
                    <p className="openTable">{tahun}</p>
                    <DownIcon size={5} className="openTable" />
                </button>
                {openTahun && (
                    <ul className="absolute mt-1 rounded border border-slate-200 overflow-hidden bg-white">
                        {dataTahun.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={(e) => {
                                        setTahun(
                                            e.currentTarget.textContent ?? "",
                                        );
                                        // setOpenTahun(false);
                                    }}
                                    className=" hover:bg-slate-200 transition-colors duration-150 cursor-pointer border-b"
                                >
                                    <a href="#" className="px-4 py-2">
                                        {item.tahun}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
            <button className="px-2 text-white text-sm transition-colors duration-150 bg-blue-500 hover:bg-blue-400 active:bg-blue-500 rounded-lg">
                Cari Data
            </button>
        </div>
    );
}
