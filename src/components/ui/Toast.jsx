import { useEffect } from "react";
import closeIcon from "/assets/images/icon-close.svg";

const Toast = ({ message, icon, iconAlt, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);
  return (
    <div className="toast">
      {icon && <img src={icon} alt={iconAlt} className="toast-icon" />}
      <p className="toast-message">{message}</p>

      <button onClick={onClose} className="toast-close" aria-label="Dismiss">
        <img src={closeIcon} alt="Close Icon" />
      </button>
    </div>
  );
};

export default Toast;
