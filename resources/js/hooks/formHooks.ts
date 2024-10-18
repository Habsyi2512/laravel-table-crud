import {
    HandleChangeProps,
    HandleRemoveProps,
    HandleAddInputProps,
} from "./props/interface";
import { useCallback } from "react";

export const handleChange = ({
    id,
    e,
    inputList,
    setInputList,
}: HandleChangeProps) => {
    const updatedList = inputList.map((input) =>
        input.id === id ? { ...input, value: e.target.value } : input,
    );
    setInputList(updatedList);
};

export const handleRemove = ({
    id,
    inputList,
    setInputList,
}: HandleRemoveProps) => {
    const updatedList = inputList.filter((input) => input.id !== id);
    setInputList(updatedList);
};

export const useFormHandlers = () => {
    const handleAddInput = useCallback(
        ({ inputList, setInputList }: HandleAddInputProps) => {
            const updatedList = [
                ...inputList,
                { id: inputList.length + 1, value: "" },
            ];
            setInputList(updatedList);
        },
        [],
    );

    const handleChange = useCallback(
        ({ id, e, inputList, setInputList }: HandleChangeProps) => {
            const updatedList = inputList.map((input) =>
                input.id === id ? { ...input, value: e.target.value } : input,
            );
            setInputList(updatedList);
        },
        [],
    );

    const handleRemove = useCallback(
        ({ id, inputList, setInputList }: HandleRemoveProps) => {
            const updatedList = inputList.filter((input) => input.id !== id);
            setInputList(updatedList);
        },
        [],
    );

    return { handleAddInput, handleChange, handleRemove };
};
