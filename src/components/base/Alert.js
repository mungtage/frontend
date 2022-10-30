import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Alert(state, message) {
  const config = {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };
  if (state === 'success') {
    return toast.success(message, config);
  }
  if (state === 'fail') {
    return toast.error(message, config);
  }
  return toast.warn(message, config);
}

export default Alert;
