import React from "react";
import TrashIcon from "../icons/TrashIcon";
import Button from "./Button";

export default function ActionBarButtonDelete() {
    return (
        <li>
            <Button>
                <TrashIcon />
            </Button>
        </li>
    );
}
