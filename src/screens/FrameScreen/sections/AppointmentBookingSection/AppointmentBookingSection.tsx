import React from "react";
import { MapPinIcon, PhoneIcon, ClockIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

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
          <iframe
            src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=133464079129"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            style={{ border: 0 }}
            title="Карта расположения"
          />
        </div>
      </div>
    </section>
  );
};
