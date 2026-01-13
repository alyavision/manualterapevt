import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { LazyIframe } from "../../../../components/LazyIframe";

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const AppointmentBookingSection = (): JSX.Element => {
  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <h2 className="typo-h2 mb-6 text-white">Контакты и запись</h2>

        <Card className="rounded-xl border border-[#d4d4d4] bg-white shadow-[0px_3px_5px_#0000001a]">
          <CardContent className="flex flex-col gap-6 p-4 sm:p-6">
            <div className="flex flex-col gap-2 border-b border-gray-200 pb-4 last:border-0 last:pb-0">
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 flex-shrink-0 text-accent-colorslight-blue" />
                <h3 className="typo-h3 text-text-colorsdark-gray">Телефон</h3>
              </div>
              <a
                href="tel:+998998385885"
                className="typo-body text-text-colorsdark-gray transition-colors duration-200 hover:text-accent-colorslight-blue"
              >
                +998 99 838 58 85
              </a>
            </div>

            <div className="flex flex-col gap-2 border-b border-gray-200 pb-4 last:border-0 last:pb-0">
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 flex-shrink-0 text-accent-colorslight-blue" />
                <h3 className="typo-h3 text-text-colorsdark-gray">Адрес</h3>
              </div>
              <p className="typo-body text-text-colorsdark-gray">
                Ташкент, Мирабадский район, Мирабад махалля, Катта Мирабад
                1-тор кўчаси, 5/2
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 flex-shrink-0 text-accent-colorslight-blue" />
                <h3 className="typo-h3 text-text-colorsdark-gray">
                  Время работы
                </h3>
              </div>
              <p className="typo-body text-text-colorsdark-gray">
                Работаю с 8.00 до 20.00
                <br />
                По предварительной записи
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-7">
        <div className="h-[400px] w-full overflow-hidden rounded-xl sm:h-[500px]">
          <LazyIframe
            src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=160982765150"
            width="100%"
            height="100%"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full rounded-xl"
            title="Карта расположения"
          />
        </div>
      </div>
    </section>
  );
};
