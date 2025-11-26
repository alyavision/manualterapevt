import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

const transportModes = [
  { id: "car", icon: "/i-11.svg", label: "Авто" },
  { id: "transport", icon: "/i-6.svg", label: "Транспорт" },
  { id: "walk", icon: "/i-9.svg", label: "Пешком" },
  { id: "bike", icon: "/i-7.svg", label: "Велосипед" },
];

const routes = [
  {
    time: "18 мин",
    distance: "5.2 км",
    via: "через ул. Моховая",
    badge: "Быстрее",
    badgeColor: "bg-green-100 text-green-700",
    arrival: "13:45",
    traffic: "Без пробок",
    trafficIcon: "/i-3.svg",
    selected: true,
  },
  {
    time: "22 мин",
    distance: "6.8 км",
    via: "через Садовое кольцо",
    arrival: "13:49",
    traffic: "Небольшие пробки",
    trafficIcon: "/i.svg",
    selected: false,
  },
  {
    time: "25 мин",
    distance: "7.1 км",
    via: "через Тверскую улицу",
    arrival: "13:52",
    traffic: "Средние пробки",
    trafficIcon: "/i-2.svg",
    selected: false,
  },
];

const directions = [
  { step: "1", text: "Начните движение по ул. Моховая" },
  { step: "2", text: "Поверните направо на Волхонку" },
];

export const CertificationSection = (): JSX.Element => {
  return (
    <section className="grid grid-cols-1 gap-8 py-16 md:grid-cols-12 md:gap-12">
      <aside className="typo-small flex flex-col gap-6 rounded-xl border border-[#ced4da] bg-white p-6 text-gray-600 shadow-[0px_6px_8px_#0000001a,0px_3px_4px_#0000001a] md:col-span-4">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <h2 className="typo-h3 text-gray-900">Как добраться</h2>
          <img className="h-4 w-4" alt="Close button" src="/button-3.svg" />
        </div>

        <ToggleGroup
          type="single"
          defaultValue="route"
          className="flex gap-2"
        >
          <ToggleGroupItem
            value="route"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-white data-[state=off]:bg-gray-100 data-[state=off]:text-gray-700"
          >
            <img className="h-3 w-3" alt="Route icon" src="/i-8.svg" />
            <span className="typo-small font-medium text-current">Маршрут</span>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="place"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-700 data-[state=on]:bg-blue-600 data-[state=on]:text-white"
          >
            <img className="h-3 w-3" alt="Place icon" src="/i-12.svg" />
            <span className="typo-small font-medium text-current">Место</span>
          </ToggleGroupItem>
        </ToggleGroup>

        <div className="flex flex-wrap items-center gap-3">
          {transportModes.map((mode) => (
            <button
              key={mode.id}
              className={`flex min-w-[72px] flex-col items-center gap-2 rounded-lg border px-3 py-2 ${
                mode.id === "car"
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-transparent bg-gray-50 text-gray-700"
              }`}
            >
              <img className="h-5 w-auto" alt={mode.label} src={mode.icon} />
              <span className="typo-small font-medium text-inherit">
                {mode.label}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-b border-gray-200 pb-4">
          <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-3 py-2">
            <span className="h-2 w-2 rounded-full border border-white bg-blue-600 shadow-[0px_2px_3px_#0000001a]" />
            <Input
              defaultValue="Москва, Красная площадь"
              className="typo-small h-7 flex-1 border-0 bg-transparent p-0 text-[#adaebc] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <button className="flex h-5 w-5 items-center justify-center">
              <img className="h-3 w-3" alt="Clear button" src="/button.svg" />
            </button>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-3 py-2">
            <span className="h-2 w-2 rounded-full border border-white bg-red-600 shadow-[0px_2px_3px_#0000001a]" />
            <Input
              defaultValue="Москва, Парк Горького"
              className="typo-small h-7 flex-1 border-0 bg-transparent p-0 text-[#adaebc] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <button className="flex h-5 w-5 items-center justify-center">
              <img className="h-3 w-3" alt="Clear button" src="/button.svg" />
            </button>
          </div>

          <button className="typo-small flex items-center gap-2 font-medium text-blue-600">
            <img className="h-4 w-4" alt="Add icon" src="/i-1.svg" />
            Добавить точку
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <p className="typo-small text-gray-500">3 маршрута</p>

          <div className="flex flex-col gap-3">
            {routes.map((route, index) => (
              <Card
                key={index}
                className={`rounded-lg border ${
                  route.selected
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <CardContent className="flex flex-col gap-3 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="typo-small font-semibold text-gray-900">
                          {route.time}
                        </span>
                        <span className="typo-small text-gray-600">
                          {route.distance}
                        </span>
                      </div>
                      <p className="typo-small text-gray-600">{route.via}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      {route.badge && (
                        <Badge
                          className={`rounded-full px-2 py-0.5 text-[10px] leading-none ${route.badgeColor} border-0`}
                        >
                          {route.badge}
                        </Badge>
                      )}
                      <span className="typo-small text-gray-500">
                        {route.arrival}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <img
                      className="h-3 w-auto"
                      alt="Traffic icon"
                      src={route.trafficIcon}
                    />
                    <span className="typo-small text-gray-600">
                      {route.traffic}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-gray-200 pt-4">
          <Button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-700">
            <img className="h-4 w-4" alt="Navigation icon" src="/i-4.svg" />
            Начать навигацию
          </Button>

          <div className="flex gap-3">
            <Button className="flex-1 gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">
              <img className="h-4 w-4" alt="Share icon" src="/i-5.svg" />
              Поделиться
            </Button>
            <Button className="flex-1 gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">
              <img className="h-4 w-4" alt="Save icon" src="/i-10.svg" />
              Сохранить
            </Button>
          </div>
        </div>
      </aside>

      <div className="flex flex-col gap-6 md:col-span-8">
        <div className="overflow-hidden rounded-xl bg-gray-200">
          <div
            className="h-80 w-full bg-cover bg-center"
            style={{ backgroundImage: "url(/img.png)" }}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card className="rounded-lg border-0 shadow-[0px_3px_5px_#0000001a]">
            <CardContent className="flex items-center gap-3 p-4">
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="typo-small font-medium text-gray-700">
                Пробки: 2 балла
              </span>
              <button className="typo-small font-medium text-blue-600">
                Подробнее
              </button>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-0 shadow-[0px_3px_5px_#0000001a]">
            <CardContent className="flex flex-col gap-3 p-4">
              <div className="flex items-center gap-3">
                <img className="h-6 w-6" alt="Route icon" src="/div-3.svg" />
                <div className="flex flex-col">
                  <span className="typo-small font-medium text-gray-900">
                    18 минут
                  </span>
                  <span className="typo-small text-gray-600">
                    5.2 км • Без пробок
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {directions.map((direction) => (
                  <div key={direction.step} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-[13px] font-semibold leading-none text-blue-600">
                      {direction.step}
                    </span>
                    <span className="typo-small text-gray-700">
                      {direction.text}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
