import Button from "../action/Button";
import XCircleIcon from "../icons/XCircleIcon";
import { handleRemove, handleChange } from "@/hooks/formHooks";
import { InputItem } from "@/interface/props";
import { router, usePage } from "@inertiajs/react";
export default function KecamatanForm({
    inputListKecamatan,
    setInputListKecamatan,
}: {
    inputListKecamatan: InputItem[];
    setInputListKecamatan: any;
}) {
    const props = usePage().props;
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Kirim data ke server
        router.post(
            "/kecamatan/post",
            {
                kecamatan: inputListKecamatan.map((item) => ({
                    nama: item.value,
                })),
                _token: props.csrf_token as string,
                // Kirim dengan key `nama`
            },
            {
                onSuccess: setInputListKecamatan([]),
            },
        );
    };
    return (
        <form action="POST" onSubmit={handleSubmit}>
            <div className="max-h-[250px] p-2 overflow-y-auto">
                {inputListKecamatan.map((input, index) => (
                    <div
                        key={input.id}
                        className="relative w-full px-3 focus-within:border-blue-500 rounded-lg border mb-3 flex gap-x-2 items-center"
                    >
                        <label
                            htmlFor={`nama-kec-${input.id}`}
                            className="block text-sm font-medium text-gray-500"
                        >
                            {index + 1}.
                        </label>
                        <input
                            type="text"
                            id={`nama-kec-${input.id}`}
                            value={input.value}
                            onChange={(e) =>
                                handleChange({
                                    id: input.id,
                                    e,
                                    inputList: inputListKecamatan,
                                    setInputList: setInputListKecamatan,
                                })
                            }
                            className="w-[95%] px-2 border focus:ring-0 p-1 border-none rounded-lg text-sm placeholder:text-sm"
                            placeholder="Kecamatan"
                        />
                        <span
                            onClick={() =>
                                handleRemove({
                                    id: input.id,
                                    inputList: inputListKecamatan,
                                    setInputList: setInputListKecamatan,
                                })
                            }
                            className="absolute -right-1 -top-2 cursor-pointer"
                        >
                            <XCircleIcon
                                size={5}
                                className="text-white transition-colors duration-150 bg-gray-200 hover:bg-red-500 rounded-full text-sm"
                            />
                        </span>
                    </div>
                ))}
            </div>
            {inputListKecamatan.length > 0 && (
                <div className="flex px-2">
                    <Button
                        type="submit"
                        onClick={handleSubmit}
                        className="py-1 w-full"
                        color="emerald"
                    >
                        Simpan
                    </Button>
                </div>
            )}
        </form>
    );
}
