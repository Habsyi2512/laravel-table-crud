import { PaginationProps } from "@/interface/props";
import { Link } from "@inertiajs/react";

export default function Pagination({links}:PaginationProps) {
    return (
        <ul className="flex justify-center">
            {links.map((item: any, index: any) => {
                let className = "";
                if (item.label.includes("Prev")) {
                    item.label = "Prev";
                    className = "rounded-l";
                }
                if (item.label.includes("Next")) {
                    item.label = "Next";
                    className = "rounded-r";
                }

                return (
                    <li key={index}>
                        <Link
                            href={item.url}
                            className={`inline-block ${className} transition-colors duration-150 hover:bg-gray-200 active:bg-white text-sm px-2 py-1 border ${item.active ? "bg-gray-200" : item.label.includes("Prev") || item.label.includes("Next") ? "bg-gray-300" : ""}`}
                        >
                            {item.label.includes("Previous")
                                ? "Previous"
                                : item.label.includes("Next")
                                  ? "Next"
                                  : item.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
