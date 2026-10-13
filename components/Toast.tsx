"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  show: boolean;
}

export default function Toast({ message, show }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 2200);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [show]);

  return (
    <div className={`toast${visible ? " show" : ""}`} id="toast">
      {message}
    </div>
  );
}
