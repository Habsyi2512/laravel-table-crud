import toast from "react-hot-toast";

type ToastType = "success" | "error" | "warning" | "info";

export const showNotification = (
    message: string,
    type: ToastType = "success",
) => {
    switch (type) {
        case "success":
            toast.success(message, {
                position: "top-right",
                duration: 2500,
            });
            break;
        case "error":
            toast.error(message, {
                position: "top-right",
                duration: 2500,
            });
            break;
        default:
            toast.success(message);
    }
};
