import React, { PropsWithChildren, ButtonHTMLAttributes } from "react";

export default function FormBtn({
    children,
    className = "py-1", // Menambahkan className sebagai props
    color,
    ...buttonProps
}: PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement> & {
        className?: string;
        color?: string;
    }
>) {
    const [col, setCol] = React.useState(color ?? "blue");
    return (
        <button
            className={`transition-colors text-white bg-${col}-500 hover:bg-${col}-400 active:bg-${col}-500 duration-150 text-sm w-full rounded-lg shadow border border-gray-200 ${className}`} // Menggabungkan dengan className
            {...buttonProps} // Menyebarkan props button lainnya
        >
            {children || "Btn"}
        </button>
    );
}
