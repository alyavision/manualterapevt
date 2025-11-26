import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const services = [
  {
    title: "Биоэнергомассаж с аппаратом DDS",
    description:
      "Глубокое восстановление нервных импульсов и снятие мышечных блоков.",
  },
  {
    title: "Массаж Туйна",
    description:
      "Китайская мануальная техника для расслабления и восстановления циркуляции энергии.",
  },
  {
    title: "Баночный массаж",
    description: "Улучшение кровообращения и снятие спазмов.",
  },
  {
    title: "Моксотерапия",
    description: "Мягкий прогрев для снятия боли и напряжения.",
  },
  {
    title: "Аппарат БЭМ",
    description: "Глубокая проработка мышц и фасций.",
  },
  {
    title: "Хиджама",
    description: "Очищение организма и улучшение самочувствия.",
  },
  {
    title: "Классический массаж",
    description: "Расслабление и восстановление.",
  },
  {
    title: "Спортивный массаж",
    description: "Восстановление после нагрузок и профилактика травм.",
  },
];

const duplicatedServices = [...services, ...services, ...services];

const ARROW_PAUSE_MS = 800;
const AUTO_SCROLL_SPEED = 0.6;

export const ServicesCarousel = (): JSX.Element => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const segmentWidthRef = useRef(0);
  const initializedRef = useRef(false);
  const resumeTimeoutRef = useRef<number>();

  const [isPaused, setIsPaused] = useState(false);

  const pauseAutoScroll = (duration?: number): void => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }

    if (duration && duration > 0) {
      resumeTimeoutRef.current = window.setTimeout(() => {
        setIsPaused(false);
        resumeTimeoutRef.current = undefined;
      }, duration);
    }
  };

  const resumeAutoScroll = (): void => {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = undefined;
    }
    setIsPaused(false);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const calculateSegment = (): void => {
      if (!el) return;
      const segment = el.scrollWidth / 3;
      segmentWidthRef.current = segment;
      if (!initializedRef.current) {
        el.scrollLeft = segment;
        initializedRef.current = true;
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      const previousSegment = segmentWidthRef.current;
      calculateSegment();
      if (previousSegment) {
        el.scrollLeft = segmentWidthRef.current;
      }
    });

    calculateSegment();
    resizeObserver.observe(el);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    let frameId: number;

    const step = (): void => {
      const el = trackRef.current;
      const segment = segmentWidthRef.current;

      if (el && segment && !isPaused) {
        el.scrollLeft += AUTO_SCROLL_SPEED;
        if (el.scrollLeft >= segment * 2) {
          el.scrollLeft -= segment;
        }
      }

      frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [isPaused]);

  useEffect(
    () => () => {
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
    },
    [],
  );

  const handleScroll = (): void => {
    const el = trackRef.current;
    const segment = segmentWidthRef.current;
    if (!el || !segment) return;

    if (el.scrollLeft >= segment * 2) {
      el.scrollLeft -= segment;
    } else if (el.scrollLeft <= segment * 0.3) {
      el.scrollLeft += segment;
    }
  };

  const scrollByCard = (direction: "left" | "right"): void => {
    const el = trackRef.current;
    if (!el) return;

    const cardWidth = (cardRef.current?.offsetWidth ?? 280) + 24;
    const offset = direction === "left" ? -cardWidth : cardWidth;

    pauseAutoScroll(ARROW_PAUSE_MS);
    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <span className="typo-section-title">Услуги</span>
          <h2 className="typo-h2 text-text-colorsdark-gray">
            Мануальная терапия и массаж в Ташкенте
          </h2>
          <p className="typo-body text-text-colorslight-gray">
            Подбираю технику индивидуально, чтобы снять боль и вернуть свободу
            движения.
          </p>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <button
            type="button"
            onClick={(): void => scrollByCard("left")}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-colorslight-blue text-accent-colorslight-blue transition-colors duration-200 hover:bg-accent-colorslight-blue/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-colorslight-blue focus-visible:ring-offset-2"
            aria-label="Листать услуги назад"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(): void => scrollByCard("right")}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-colorslight-blue text-accent-colorslight-blue transition-colors duration-200 hover:bg-accent-colorslight-blue/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-colorslight-blue focus-visible:ring-offset-2"
            aria-label="Листать услуги вперёд"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white via-white/95 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white via-white/95 to-transparent" />

        <div
          ref={trackRef}
          className={clsx(
            "flex items-stretch gap-6 overflow-x-auto scroll-smooth px-1 py-2",
            "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
          )}
          onMouseEnter={(): void => pauseAutoScroll()}
          onMouseLeave={(): void => resumeAutoScroll()}
          onTouchStart={(): void => pauseAutoScroll()}
          onTouchEnd={(): void => pauseAutoScroll(ARROW_PAUSE_MS)}
          onTouchCancel={(): void => resumeAutoScroll()}
          onScroll={handleScroll}
        >
          {duplicatedServices.map((service, index) => (
            <div
              key={`${service.title}-${index}`}
              ref={index === 0 ? cardRef : undefined}
              className="flex min-h-[200px] w-[260px] shrink-0 items-stretch rounded-[20px] border border-[#59b7fd] p-1 shadow-drop-shadow-medium transition-transform duration-200 hover:scale-[1.03] sm:w-[280px] lg:w-[300px]"
            >
              <article className="flex flex-1 w-full flex-col gap-3 rounded-[20px] bg-[#F6F1E8] p-6 text-left">
                <h3 className="typo-h3 text-text-colorsdark-gray">
                  {service.title}
                </h3>
                <p className="typo-body text-text-colorslight-gray">
                  {service.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 sm:hidden">
        <button
          type="button"
          onClick={(): void => scrollByCard("left")}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-colorslight-blue bg-white text-accent-colorslight-blue shadow-sm transition-colors duration-200 active:scale-95"
          aria-label="Листать услуги назад"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={(): void => scrollByCard("right")}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-colorslight-blue bg-white text-accent-colorslight-blue shadow-sm transition-colors duration-200 active:scale-95"
          aria-label="Листать услуги вперёд"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

