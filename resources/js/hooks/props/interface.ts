export interface HandleChangeProps {
    id: number;
    e: React.ChangeEvent<HTMLInputElement>;
    inputList: { id: number; value: string }[];
    setInputList: React.Dispatch<React.SetStateAction<{ id: number; value: string }[]>>;
}

export interface HandleRemoveProps {
    id: number;
    inputList: { id: number; value: string }[];
    setInputList: React.Dispatch<React.SetStateAction<{ id: number; value: string }[]>>;
}

export interface HandleAddInputProps {
    inputList: { id: number; value: string }[];
    setInputList: React.Dispatch<React.SetStateAction<{ id: number; value: string }[]>>;
}