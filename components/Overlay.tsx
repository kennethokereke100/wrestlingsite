'use client';

import { ReactNode, useEffect } from 'react';

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Overlay({ isOpen, onClose, children }: OverlayProps) {
  // Close overlay on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="popup-backdrop" 
      onClick={onClose}
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        width: "100%",
        minHeight: "100vh",
        padding: "100px 0",
      }}
    >
      <div
        className="popup-outer"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "12px",
          padding: "24px",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "relative",
            float: "right",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            cursor: "pointer"
          }}
        >
          ×
        </button>
        <div style={{ marginTop: "50px" }}>
          {children}
        </div>
      </div>
    </div>
  );
} 