import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { AnimatedImage } from "../../../../components/AnimatedImage";

const containerClass = "mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8";

export const HeaderSection = (): JSX.Element => {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-3 pb-6 sm:pt-4 sm:pb-6 lg:pt-5 lg:pb-8">

      <div
        className={`${containerClass} grid grid-cols-1 gap-y-8 sm:gap-y-10 lg:grid-cols-12 lg:items-center lg:gap-x-12`}
      >
        <div className="flex flex-col gap-5 sm:gap-6 lg:col-span-6">
          <div className="flex flex-col gap-3 xl:gap-4">
            <Badge className="w-fit rounded-lg border-0 bg-primary-colorssoft-blue px-4 py-1.5 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="typo-small font-semibold text-accent-colorsdark-blue">
                Принимаю по записи
              </span>
            </Badge>

            <div className="flex max-w-[640px] flex-col gap-4 sm:gap-5">
              <h1 className="typo-h1 text-text-colorsdark-gray break-all opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <span className="block text-[#59b7fd]">Сертифицированный</span>
                <span className="text-[#354b5e]">
                  Мануальный терапевт в Ташкенте
                </span>
              </h1>

              <p className="typo-subtitle text-text-colorsdark-gray opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                Диагностирую причину боли, подбираю эффективные мануальные
                техники и сопровождаю до устойчивого результата.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button
              asChild
              className="h-12 min-w-[210px] rounded-xl bg-primary-colorssky-blue px-6 py-3 hover:bg-primary-colorssky-blue/90"
            >
              <a
                href="https://t.me/Rusaro?text=Здравствуйте%21%20Хочу%20получить%20консультацию.%20Подскажите%2C%20пожалуйста%2C%20свободное%20время%20для%20записи%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                Получить консультацию
              </a>
            </Button>
            <p className="typo-small text-text-colorslight-gray sm:flex-1">
              Принимаю только по записи, работаю индивидуально с каждым кейсом.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:col-span-6 lg:justify-end">
          <div className="relative w-full max-w-[520px] sm:max-w-[560px] md:max-w-[600px] lg:max-w-[640px]">
            <div className="pointer-events-none absolute -top-8 -left-10 hidden h-40 w-40 rounded-full bg-primary-colorssoft-blue/35 blur-2xl lg:block" />
            <div className="pointer-events-none absolute bottom-[-30px] right-[-16px] hidden h-32 w-32 rounded-full bg-accent-colorslight-blue/30 blur-2xl lg:block" />
            <AnimatedImage
              src="/Ruslan%20Artjkov.webp"
              alt="Руслан Артыков"
              className="relative h-auto w-full rounded-[32px] object-cover"
              animationType="slide-in-right"
              width={640}
              height={640}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
