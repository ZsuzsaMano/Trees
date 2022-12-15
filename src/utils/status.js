import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const clearAllToasts = () => {
  toast.dismiss();
};

export const setToast = (
  message,
  type = "info",
  toastId = undefined,
  options = {}
) => {
  const toastConfig = {
    position: toast.POSITION.TOP_CENTER,
    hideProgressBar: true,
    autoClose: 10000,
    toastId: toastId,
    ...options,
  };
  // Find toast and update or add new toast
  if (!message) return;
  switch (type) {
    case "success":
      return toast.isActive(toastId)
        ? toast.update(toastId, toastConfig)
        : toast.success(message, toastConfig);
    case "warning":
      return toast.isActive(toastId)
        ? toast.update(toastId, toastConfig)
        : toast.warning(message, toastConfig);
    case "error":
      return toast.isActive(toastId)
        ? toast.update(toastId, toastConfig)
        : toast.error(message, toastConfig);
    default:
      return toast.isActive(toastId)
        ? toast.update(toastId, toastConfig)
        : toast.info(message, toastConfig);
  }
};
