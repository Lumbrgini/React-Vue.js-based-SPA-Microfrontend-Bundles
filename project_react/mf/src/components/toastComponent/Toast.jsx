import './Toast.css'

export default function Toast({ open, message }) {
  if (!open) return null;

  return (
    <div className="toast" role="status" aria-live="polite">
      {message}
    </div>
  );
}