import React from "react";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-accent-colorsdark-blue py-8 sm:py-12">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 mb-8">
          <div className="flex flex-col gap-4">
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
        </div>

        <div className="w-full h-px bg-white/20 mb-6" />

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <p className="typo-body text-white text-center sm:text-left">
            Руслан Артыков&nbsp;&nbsp;© 2025
          </p>

          <p className="typo-small text-white text-center sm:text-right">
            <span className="text-accent-colorslight-blue">Мануальный терапевт в Ташкенте</span>&nbsp;&nbsp;|&nbsp;&nbsp;Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};
