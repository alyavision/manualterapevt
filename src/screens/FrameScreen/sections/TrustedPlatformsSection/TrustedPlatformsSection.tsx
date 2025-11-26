import React from "react";

const painItems = ["Боль в шее и плечах.", "Онемение, прострелы, защемления."];

export const TrustedPlatformsSection = (): JSX.Element => {
  return (
    <section className="grid grid-cols-12 gap-y-8">
      <h2 className="col-span-12 text-center font-heading-h1-semibold-desktop font-[number:var(--heading-h1-semibold-desktop-font-weight)] text-text-colorsdark-gray text-[length:var(--heading-h1-semibold-desktop-font-size)] tracking-[var(--heading-h1-semibold-desktop-letter-spacing)] leading-[var(--heading-h1-semibold-desktop-line-height)] [font-style:var(--heading-h1-semibold-desktop-font-style)]">
        С какими болями я работаю
      </h2>

      <div className="col-span-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
        {painItems.map((item, index) => (
          <div
            key={index}
            className="rounded-xl bg-secondary-colorslight-sand px-6 py-4 text-center [font-family:'Urbanist',Helvetica] text-2xl font-bold leading-9 tracking-[-0.32px] text-text-colorslight-gray lg:col-span-6"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};
