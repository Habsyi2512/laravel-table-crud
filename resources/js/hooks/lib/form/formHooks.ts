import { HandleChangeProps, HandleRemoveProps, HandleAddInputProps } from '../../props/interface';
import { useCallback } from 'react';

export const useFormHandlers = () => {
    const handleAddInput = useCallback(({ inputList, setInputList }: HandleAddInputProps) => {
        const updatedList = [...inputList, { id: inputList.length + 1, nama: '' }];
        setInputList(updatedList);
    }, []);

    const handleChange = useCallback(({ id, e, inputList, setInputList, setListSelectedRows, tabel }: HandleChangeProps) => {
        const updatedList = inputList.map((input) => (input.id === id ? { ...input, nama: e.target.value } : input));
        setListSelectedRows ? setListSelectedRows((prevState) => ({ ...prevState, [tabel]: updatedList })) : setInputList && setInputList(updatedList);
    }, []);

    const handleRemove = useCallback(({ id, inputList, setInputList, setListSelectedRows, tabel }: HandleRemoveProps) => {
        const keyword = tabel.replace('tabel', '').replace('Rows', '').toLowerCase();
        const updatedList = inputList.filter((input) => input.id !== id);
        setListSelectedRows
            ? setListSelectedRows((prevState) => ({
                  ...prevState,
                  [tabel]: updatedList,
                  length: {
                      ...prevState.length,
                      [keyword]: updatedList.length, // Mengupdate length sesuai dengan kata kunci
                  },
              }))
            : setInputList && setInputList(updatedList);
    }, []);
    // id: input.id,
    // inputList: listSelectedRows.tabelKecamatanRows,
    // setListSelectedRows: setListSelectedRows,
    // tabel: 'tabelKecamatanRows',

    return { handleAddInput, handleChange, handleRemove };
};
