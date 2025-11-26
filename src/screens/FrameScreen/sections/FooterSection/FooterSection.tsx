import { MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";

const navigationLinks = [
  { label: "Главная", href: "#hero" },
  { label: "Услуги", href: "#services" },
  { label: "О специалисте", href: "#about" },
  { label: "Отзывы", href: "#video-reviews" },
  { label: "Контакты", href: "#contacts" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-accent-colorsdark-blue py-8 sm:py-12">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 mb-8">
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-4">
            <h2 className="typo-h2 text-accent-colorslight-blue">
              Руслан Артыков.
            </h2>

            <p className="typo-body max-w-[360px] text-white">
              <span className="font-semibold text-[#59b7fd]">
                Сертифицированный
              </span>
              <br />
              <span className="text-[#d8e7f3]">
                Мануальный терапевт в Ташкенте
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:col-span-1 lg:col-span-4">
            <h3 className="typo-h3 text-white">Главная</h3>

            <nav className="flex flex-col gap-4">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="typo-body text-white transition-colors duration-200 hover:text-accent-colorslight-blue"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-6 sm:col-span-1 lg:col-span-4">
            <h3 className="typo-h3 text-white">Контакты</h3>

            <div className="flex flex-col gap-4">
              <p className="typo-body text-white">
                Работаю с 8.00 до 20.00
                <br />
                По предварительной записи
              </p>

              <a
                href="tel:+998998385885"
                className="typo-body flex items-center gap-2 text-white transition-colors duration-200 hover:text-accent-colorslight-blue"
              >
                <PhoneIcon className="w-5 h-5 flex-shrink-0 text-accent-colorslight-blue" />
                +998998385885
              </a>

              <div className="typo-body flex items-start gap-2 text-white">
                <MapPinIcon className="w-5 h-5 mt-1.5 flex-shrink-0 text-accent-colorslight-blue" />
                <span>
                  Ташкент, Мирабадский район, Мирабад махалля, Катта Мирабад
                  1-тор кўчаси, 5/2
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/20 mb-6" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 sm:items-center">
          <p className="typo-body text-white text-center sm:text-left sm:col-span-2 lg:col-span-4">
            Руслан Артыков&nbsp;&nbsp;© 2025
          </p>

          <div className="sm:col-span-1 lg:col-span-4 lg:col-start-9">
            <p className="typo-small text-white text-center sm:text-left">
              <span className="text-accent-colorslight-blue">Мануальный терапевт в Ташкенте</span>&nbsp;&nbsp;|&nbsp;&nbsp;Все права защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
