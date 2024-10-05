import { PropsWithChildren } from "react";
import React from "react";


export default function Template({ children }: PropsWithChildren) {
    return <div className="w-full min-h-screen px-5 bg-slate-100 flex items-center justify-center">{children}</div>;
}
