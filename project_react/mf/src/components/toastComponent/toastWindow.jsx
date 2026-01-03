import { useRef, useState, useEffect } from "react";

export function useToast() {
  const [toast, setToast] = useState({ open: false, message: "" });
  const timerRef = useRef(null);

  const showToast = (message, duration = 3500) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    setToast({ open: true, message });

    timerRef.current = setTimeout(() => {
      setToast((t) => ({ ...t, open: false }));
    }, duration);
  };

  const hideToast = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast((t) => ({ ...t, open: false }));
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return { toast, showToast, hideToast };
}

