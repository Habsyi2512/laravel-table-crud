import { RenderTabelProps } from "@/interface/props";

export default function RenderClickedComponent({ nav, components }: RenderTabelProps) {
    const ComponentToRender: JSX.Element = components?.find(
        (c) => c.label === nav,
    )?.component;

    return ComponentToRender || null;
}
