import { ResponsiveImage } from "../../../../components/ResponsiveImage";

const bulletPoints = [
  {
    text: "Точная диагностика и работа с причиной боли, а не с симптомами",
  },
  {
    boldText: "7+ ",
    regularText: "лет практики",
  },
  {
    boldText: "1,000+",
    regularText: " успешно проведённых сеансов",
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center md:gap-10 lg:gap-12">
      <div className="flex justify-center md:col-span-5">
        <ResponsiveImage
          src="/3606768_1764141440762261800-ezgif.com-video-to-webp-converter.webp"
          alt="Руслан Артыков - сертифицированный мануальный терапевт и массажист в Ташкенте"
          mobileWidth={380}
          tabletWidth={420}
          desktopWidth={640}
          width={420}
          height={420}
          className="h-full max-h-[420px] w-full max-w-[420px] rounded-[20px] object-cover"
        />
      </div>

      <div className="flex flex-col gap-8 md:col-span-7">
        <div className="flex flex-col gap-6">
          <h2 className="typo-h2 text-text-colorsdark-gray">
            <span className="block text-[#59b7fd]">Руслан Артыков</span>
            <span className="text-text-colorsdark-gray">
              мануальный терапевт, который возвращает движение без боли
            </span>
          </h2>

          <p className="typo-body text-text-colorsdark-gray">
            Семь лет ежедневной практики, глубокое понимание анатомии и
            биомеханики всё это позволяет мне точно находить источник боли и
            возвращать телу свободу движения. Я провожу индивидуальную
            диагностику, определяю истинную причину дискомфорта и помогаю убрать
            боль безопасными и эффективными мануальными техниками.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {bulletPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <img
                className="h-8 w-8 flex-shrink-0"
                alt="Frame"
                src="/frame.svg"
              />
              <p className="typo-body text-text-colorsdark-gray">
                {point.boldText && (
                  <span className="font-semibold">{point.boldText}</span>
                )}
                {point.regularText && <span>{point.regularText}</span>}
                {point.text && <span>{point.text}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
