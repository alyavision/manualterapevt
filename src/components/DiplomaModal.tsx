import { useEffect, useState } from "react";
import clsx from "clsx";

type DiplomaModalProps = {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
};

export const DiplomaModal = ({
  isOpen,
  onClose,
  src,
  alt,
}: DiplomaModalProps): JSX.Element | null => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const timer = setTimeout(() => setIsAnimating(false), 400);
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-500 ease-out",
        isOpen ? "opacity-100" : "opacity-0",
      )}
      onClick={onClose}
    >
      <div
        className={clsx(
          "fixed inset-0 bg-black/70 transition-opacity duration-500 ease-out",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        aria-hidden="true"
      />

      <div
        className={clsx(
          "relative z-50 max-h-[90vh] w-full max-w-4xl transform transition-all duration-500 ease-out",
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-90 opacity-0 translate-y-4",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-10 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/60 sm:-right-10 sm:top-0"
          aria-label="Закрыть"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="relative rounded-lg bg-white p-2 shadow-2xl sm:p-4">
          <img
            src={src}
            alt={alt}
            className="h-auto w-full rounded-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
};

