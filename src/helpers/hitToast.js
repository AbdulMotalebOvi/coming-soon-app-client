import { toast } from 'react-toastify';
const hitToast = (variant, message) => {
    try {
        if (!['success', 'error'].includes(variant)) {
            throw new Error(` ${variant}`);
        }

        toast[`${variant}`](message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } catch (error) {
        hitToast('error', error.message);
    }
}
export default hitToast;