import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { LazyIframe } from "../../../../components/LazyIframe";

const testimonials = [
  {
    name: "Диана",
    avatar: "/img-1.svg",
    rating: "/div-1.svg",
    bgColor: "bg-primary-colorssoft-blue",
    videoId: "Jr97TmNV5Vo",
  },
  {
    name: "Сардор",
    avatar: "/img-5.svg",
    rating: "/div-1.svg",
    bgColor: "bg-secondary-colorslight-sand",
    videoId: "WYK_pxZEebE",
  },
  {
    name: "Анатолий",
    avatar: "/img-6.svg",
    rating: "/div-1.svg",
    bgColor: "bg-primary-colorssoft-blue",
    videoId: "qbarWzeb9AA",
  },
  {
    name: "Диля",
    avatar: "/img-2.svg",
    rating: "/div-8.svg",
    bgColor: "bg-secondary-colorslight-sand",
    videoId: "7lHMxVCc-mg",
  },
  {
    name: "Олехан",
    avatar: "/img-3.svg",
    rating: "/div-1.svg",
    bgColor: "bg-primary-colorssoft-blue",
    videoId: "ZPQKpUZNt4Q",
  },
  {
    name: "Констанстин",
    avatar: "/img-4.svg",
    rating: "/div-1.svg",
    bgColor: "bg-secondary-colorslight-sand",
    videoId: "iL_3c7VvbPs",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-12">
      <header className="grid grid-cols-12">
        <h2 className="col-span-12 text-center typo-h2 text-text-colorsdark-gray">
          Отзывы клиентов о мануальном терапевте в Ташкенте
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="md:col-span-6 lg:col-span-4">
            <Card
              className={`${testimonial.bgColor} rounded-xl border-0 shadow-[0px_1px_2px_#0000000d]`}
            >
              <CardContent className="flex flex-col gap-4 p-0">
                <div className="flex items-center justify-center rounded-[20px] border border-[#59b7fd] p-1 shadow-drop-shadow-medium overflow-hidden">
                  <LazyIframe
                    className="h-40 w-full rounded-[20px] sm:h-48 aspect-video"
                    src={`https://www.youtube.com/embed/${testimonial.videoId}?rel=0&modestbranding=1`}
                    title={`Видео отзыв от ${testimonial.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>

                <div className="px-4 pb-4">
                  <p className="typo-body text-center text-text-colorsdark-gray font-medium">
                    {testimonial.name}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          asChild
          className="h-12 rounded-lg bg-[#000000] px-6 py-3 text-white hover:bg-[#000000]/90"
        >
          <a
            href="https://www.youtube.com/@RuslanArtikov-d3v"
            target="_blank"
            rel="noopener noreferrer"
          >
            Посмотреть все отзывы
          </a>
        </Button>
      </div>
    </section>
  );
};
