import React from "react";
import Button from "./Button";
import PencilIcon from "../icons/PencilIcon";

export default function ActionBarButtonEdit() {
    return (
        <li>
            <Button>
                <PencilIcon />
            </Button>
        </li>
    );
}
