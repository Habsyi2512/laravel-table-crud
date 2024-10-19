import React, { PropsWithChildren, ButtonHTMLAttributes } from "react";

export default function Button({
    children,
    className = "py-1", // Menambahkan className sebagai props
    color = "blue",
    active = true,
    ...buttonProps
}: PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement> & {
        className?: string;
        color?: string;
        active?: boolean;
    }
>) {
    return (
        <button
            className={`transition-colors cu text-white ${active ? `hover:bg-${color}-400 bg-${color}-500 active:bg-${color}-500`:'hover:bg-gray-200 bg-gray-200 cursor-not-allowed'} duration-150 text-sm rounded-lg shadow border border-gray-200 ${className}`} // Menggabungkan dengan className
            {...buttonProps} // Menyebarkan props button lainnya
        >
            {children || "Btn"}
        </button>
    );
}
