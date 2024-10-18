import React, { PropsWithChildren, ButtonHTMLAttributes } from "react";

export default function Button({
    children,
    className = "py-1", // Menambahkan className sebagai props
    color = "blue",
    ...buttonProps
}: PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement> & {
        className?: string;
        color?: string;
    }
>) {
    return (
        <button
            className={`transition-colors text-white bg-${color}-500 hover:bg-${color}-400 active:bg-${color}-500 duration-150 text-sm rounded-lg shadow border border-gray-200 ${className}`} // Menggabungkan dengan className
            {...buttonProps} // Menyebarkan props button lainnya
        >
            {children || "Btn"}
        </button>
    );
}
