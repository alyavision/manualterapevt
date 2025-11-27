import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { createPortal } from "react-dom";
import { Button } from "./ui/button";

type MobileMenuProps = {
  navigationItems: Array<{ label: string; href?: string }>;
};

export const MobileMenu = ({
  navigationItems,
}: MobileMenuProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    setPortalTarget(document.body);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-colorslight-blue text-accent-colorslight-blue transition-colors duration-200 hover:bg-accent-colorslight-blue/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-colorslight-blue focus-visible:ring-offset-2"
        onClick={(): void => setIsOpen((prev) => !prev)}
      >
        <span className="sr-only">{isOpen ? "Закрыть меню" : "Открыть меню"}</span>
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {portalTarget &&
        createPortal(
          <>
            <div
              className={clsx(
                "fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ease-in-out",
                isOpen ? "visible opacity-100" : "invisible opacity-0",
              )}
              onClick={(): void => setIsOpen(false)}
              aria-hidden="true"
            />

            <aside
              className={clsx(
                "fixed top-0 right-0 z-50 h-full w-[280px] max-w-[320px] bg-white shadow-[0_10px_40px_rgba(15,23,42,0.18)] transition-transform duration-300 ease-in-out sm:w-[320px]",
                isOpen ? "translate-x-0" : "translate-x-full",
              )}
            >
              <div className="flex h-full flex-col gap-8 overflow-y-auto px-6 py-8">
                <div className="flex items-center justify-between">
                  <span className="typo-h3 text-text-colorsdark-gray">Меню</span>
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-colorslight-blue text-accent-colorslight-blue transition-colors duration-200 hover:bg-accent-colorslight-blue/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-colorslight-blue focus-visible:ring-offset-2"
                    onClick={(): void => setIsOpen(false)}
                    aria-label="Закрыть меню"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                <nav className="flex flex-col gap-6 text-[17px] font-medium text-[#1f2937]">
                  {navigationItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href ?? "#"}
                      className="typo-body font-medium rounded-lg px-2 py-2 text-[#1f2937] transition-colors duration-200 hover:bg-accent-colorslight-blue/10"
                      onClick={(): void => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <Button
                  asChild
                  className="mt-auto h-12 rounded-xl bg-primary-colorssky-blue py-3 text-white hover:bg-primary-colorssky-blue/90"
                >
                  <a
                    href="https://t.me/Rusaro?text=Здравствуйте%21%20Хочу%20получить%20консультацию.%20Подскажите%2C%20пожалуйста%2C%20свободное%20время%20для%20записи%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(): void => setIsOpen(false)}
                  >
                    Связаться со мной
                  </a>
                </Button>
              </div>
            </aside>
          </>,
          portalTarget,
        )}
    </>
  );
};

