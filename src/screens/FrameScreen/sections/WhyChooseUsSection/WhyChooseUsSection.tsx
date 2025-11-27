import { ResponsiveImage } from "../../../../components/ResponsiveImage";

const contentBlocks = [
  {
    id: 1,
    imagePosition: "left",
    imageSrc: "/3608565_1764144829327469900-ezgif.com-video-to-webp-converter.webp",
    imageAlt: "Image",
    title: "Индивидуальная диагностика",
    description:
      "Каждый человек уникален  так же уникальна и причина боли. Я начинаю работу с подробного анализа: анамнез, визуальная оценка осанки, тесты подвижности и пальпация. Это помогает определить истинный источник боли и выбрать правильную тактику лечения.",
  },
  {
    id: 2,
    imagePosition: "right",
    imageSrc: "/3609723_1764146891488837400-ezgif.com-video-to-webp-converter.webp",
    imageAlt: "Person sharing",
    title: "Подход, основанный на движении",
    description:
      "Сеансы направлены на восстановление естественной подвижности суставов, фасций и мышечных цепей. Безопасные мануальные техники помогают снять спазм, улучшить кровообращение и вернуть телу свободу движений.",
  },
  {
    id: 3,
    imagePosition: "left",
    imageSrc: "/3609734_1764146834925700400-ezgif.com-video-to-webp-converter.webp",
    imageAlt: "Image",
    title: "Работа в комфортной и доверительной атмосфере",
    description:
      "Ваше состояние  в центре внимания. Я объясняю каждый шаг, отвечаю на вопросы и работаю бережно, без грубых манипуляций и болезненных приёмов. Терапия проходит спокойно и уважительно к вашему телу.",
  },
  {
    id: 4,
    imagePosition: "right",
    imageSrc: "/3609894_1764147219495721100-ezgif.com-video-to-webp-converter.webp",
    imageAlt: "Element",
    title: "Сопровождение до стабильного результата",
    description:
      "Я не просто снимаю боль я помогаю вам удерживать эффект. Дам рекомендации по осанке, нагрузке, упражнениям и образу движения, чтобы результат сохранялся в долгую, а тело меньше возвращалось к старым паттернам.",
  },
];

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-16">
      <h2 className="text-center typo-h2 text-[#59b7fd]">
        Почему выбирают меня?
      </h2>

      <div className="flex flex-col gap-14">
        {contentBlocks.map((block) => {
          const isImageLeft = block.imagePosition === "left";
          return (
            <div
              key={block.id}
              className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-12"
            >
              <div
                className={`flex justify-center ${
                  isImageLeft ? "md:order-1" : "md:order-2"
                } md:col-span-5`}
              >
                <ResponsiveImage
                  src={block.imageSrc}
                  alt={block.imageAlt}
                  className="h-auto w-full max-w-[520px] rounded-[20px] object-cover"
                  mobileWidth={380}
                  tabletWidth={520}
                  desktopWidth={800}
                  width={520}
                  height={400}
                />
              </div>

              <div
                className={`flex flex-col gap-6 ${
                  isImageLeft ? "md:order-2" : "md:order-1"
                } md:col-span-7`}
              >
                <h3 className="typo-h3 text-text-colorsdark-gray">
                  {block.title}
                </h3>
                <p className="typo-body text-text-colorsdark-gray">
                  {block.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
