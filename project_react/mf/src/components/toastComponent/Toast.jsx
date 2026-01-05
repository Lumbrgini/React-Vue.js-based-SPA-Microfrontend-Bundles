import './Toast.css'
import { createPortal } from "react-dom";

export default function Toast({ open, message }) {
  if (!open) return null;

  return createPortal(
    <div className="toast" role="status" aria-live="polite">
      {message}
    </div>,
    document.body
  );
}