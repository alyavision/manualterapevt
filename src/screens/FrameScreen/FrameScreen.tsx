import type { ReactElement } from "react";
import { useState, useRef, useEffect } from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { AppointmentBookingSection } from "./sections/AppointmentBookingSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { ServicesSection } from "./sections/ServicesSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
import { FAQSection } from "./sections/FAQSection";
import { MobileMenu } from "../../components/MobileMenu";
import { Button } from "../../components/ui/button";
import { ServicesCarousel } from "../../components/ServicesCarousel";
import { DiplomaModal } from "../../components/DiplomaModal";
import { StructuredData } from "../../components/StructuredData";

const containerClass =
  "mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8";

const topBarData = {
  phone: "+998 99 838 58 85",
  phoneIcon: "/line-rounded-phone.svg",
};

const navigationLinks = [
  { label: "Главная", href: "#hero" },
  { label: "Услуги", href: "#services" },
  { label: "О специалисте", href: "#about" },
  { label: "Отзывы", href: "#video-reviews" },
  { label: "Контакты", href: "#contacts" },
];

const certificationData = {
  title: "Сертификаты и квалификация",
  diplomas: [
    {
      src: "/Diploma1.webp",
      alt: "Diploma",
    },
    {
      src: "/Diploma2.webp",
      alt: "Diploma",
    },
    {
      src: "/dipoloma3.webp",
      alt: "Dipoloma",
    },
    {
      src: "/diploma5.webp",
      alt: "Diploma",
    },
    {
      src: "/diploma6.webp",
      alt: "Diploma",
    },
  ],
};

const ARROW_PAUSE_MS = 800;
const AUTO_SCROLL_SPEED = 0.6;

export const FrameScreen = (): ReactElement => {
  const [selectedDiploma, setSelectedDiploma] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const diplomaTrackRef = useRef<HTMLDivElement>(null);
  const diplomaCardRef = useRef<HTMLDivElement>(null);
  const diplomaSegmentWidthRef = useRef(0);
  const diplomaInitializedRef = useRef(false);
  const diplomaResumeTimeoutRef = useRef<number>();
  const [isDiplomaPaused, setIsDiplomaPaused] = useState(false);

  const duplicatedDiplomas = [
    ...certificationData.diplomas,
    ...certificationData.diplomas,
    ...certificationData.diplomas,
  ];

  const pauseDiplomaAutoScroll = (duration?: number): void => {
    setIsDiplomaPaused(true);
    if (diplomaResumeTimeoutRef.current) {
      window.clearTimeout(diplomaResumeTimeoutRef.current);
    }

    if (duration && duration > 0) {
      diplomaResumeTimeoutRef.current = window.setTimeout(() => {
        setIsDiplomaPaused(false);
        diplomaResumeTimeoutRef.current = undefined;
      }, duration);
    }
  };

  const resumeDiplomaAutoScroll = (): void => {
    if (diplomaResumeTimeoutRef.current) {
      window.clearTimeout(diplomaResumeTimeoutRef.current);
      diplomaResumeTimeoutRef.current = undefined;
    }
    setIsDiplomaPaused(false);
  };

  useEffect(() => {
    const el = diplomaTrackRef.current;
    if (!el) return;

    const calculateSegment = (): void => {
      if (!el) return;
      const segment = el.scrollWidth / 3;
      diplomaSegmentWidthRef.current = segment;
      if (!diplomaInitializedRef.current) {
        el.scrollLeft = segment;
        diplomaInitializedRef.current = true;
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      const previousSegment = diplomaSegmentWidthRef.current;
      calculateSegment();
      if (previousSegment) {
        el.scrollLeft = diplomaSegmentWidthRef.current;
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
      const el = diplomaTrackRef.current;
      const segment = diplomaSegmentWidthRef.current;

      if (el && segment && !isDiplomaPaused) {
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
  }, [isDiplomaPaused]);

  useEffect(
    () => () => {
      if (diplomaResumeTimeoutRef.current) {
        window.clearTimeout(diplomaResumeTimeoutRef.current);
      }
    },
    [],
  );

  const handleDiplomaScroll = (): void => {
    const el = diplomaTrackRef.current;
    const segment = diplomaSegmentWidthRef.current;
    if (!el || !segment) return;

    if (el.scrollLeft >= segment * 2) {
      el.scrollLeft -= segment;
    } else if (el.scrollLeft <= segment * 0.3) {
      el.scrollLeft += segment;
    }
  };

  const scrollDiplomaByCard = (direction: "left" | "right"): void => {
    const el = diplomaTrackRef.current;
    if (!el) return;

    const cardWidth = (diplomaCardRef.current?.offsetWidth ?? 300) + 24;
    const offset = direction === "left" ? -cardWidth : cardWidth;

    pauseDiplomaAutoScroll(ARROW_PAUSE_MS);
    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white">
      <StructuredData />
      <div className="sticky top-0 z-40 bg-accent-colorsdark-blue">
        <div
          className={`${containerClass} flex items-center justify-between gap-4 py-2 lg:grid lg:grid-cols-12 lg:gap-x-12`}
        >
          <div className="flex items-center gap-2 text-genericwhite lg:col-span-6">
            <img
              className="h-4 w-4 flex-shrink-0"
              alt=""
              src={topBarData.phoneIcon}
              width="16"
              height="16"
              aria-hidden="true"
            />
            <a
              className="typo-small leading-5 text-genericwhite transition-opacity duration-200 hover:opacity-80"
              href="tel:+998998385885"
            >
              {topBarData.phone}
            </a>
          </div>

          <div className="flex items-center justify-end gap-3 lg:col-span-6">
            <nav className="hidden items-center gap-4 text-genericwhite md:flex">
              {navigationLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="typo-small text-genericwhite transition-colors duration-200 hover:text-accent-colorslight-blue"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <Button
              asChild
              className="hidden h-9 items-center gap-2 rounded-lg bg-[#59b7fd] px-4 py-0 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#59b7fd]/85 md:inline-flex"
            >
              <a
                href="https://t.me/Rusaro"
                target="_blank"
                rel="noopener noreferrer"
              >
                Связаться со мной
              </a>
            </Button>

            <div className="md:hidden">
              <MobileMenu
                navigationItems={[
                  ...navigationLinks,
                  { label: "Связаться со мной", href: "https://t.me/Rusaro" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <main className="flex flex-col gap-0">
        <section id="hero" className={`${containerClass} py-0`}>
          <HeaderSection />
        </section>

        <section id="services" className={`${containerClass} py-0`}>
          <ServicesCarousel />
        </section>

        <section id="about" className={`${containerClass} py-10 sm:py-12 lg:py-14`}>
          <AboutUsSection />
        </section>

        <section id="reviews" className={`${containerClass} py-12 sm:py-14 lg:py-16`}>
          <WhyChooseUsSection />
        </section>

        <section className="bg-secondary-colorslight-sand py-12 sm:py-14 lg:py-16">
          <div
            className={`${containerClass} flex flex-col items-center gap-8 sm:gap-10`}
          >
            <h2 className="typo-h2 text-center text-text-colorsdark-gray">
              {certificationData.title}
            </h2>

            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-secondary-colorslight-sand via-secondary-colorslight-sand/95 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-secondary-colorslight-sand via-secondary-colorslight-sand/95 to-transparent" />

              <div
                ref={diplomaTrackRef}
                className="flex gap-6 overflow-x-auto scroll-smooth px-1 py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                onMouseEnter={(): void => pauseDiplomaAutoScroll()}
                onMouseLeave={(): void => resumeDiplomaAutoScroll()}
                onTouchStart={(): void => pauseDiplomaAutoScroll()}
                onTouchEnd={(): void => {
                  pauseDiplomaAutoScroll();
                  setTimeout(() => resumeDiplomaAutoScroll(), ARROW_PAUSE_MS);
                }}
                onTouchCancel={(): void => resumeDiplomaAutoScroll()}
                onScroll={handleDiplomaScroll}
              >
                {duplicatedDiplomas.map((diploma, index) => (
                  <div
                    key={`${diploma.src}-${index}`}
                    ref={index === 0 ? diplomaCardRef : undefined}
                    className="flex h-[267px] w-[280px] shrink-0 cursor-pointer items-center justify-center rounded-[20px] border border-[#59b7fd] p-1 shadow-drop-shadow-medium transition-transform duration-200 hover:scale-105 sm:w-[300px]"
                    onClick={() => setSelectedDiploma(diploma)}
                  >
                    <img
                      className="h-full w-full rounded-[20px] object-cover"
                      alt={`Сертификат мануального терапевта Руслана Артыкова - ${diploma.alt}`}
                      src={diploma.src}
                      loading="lazy"
                      width="300"
                      height="267"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={(): void => scrollDiplomaByCard("left")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-colorslight-blue bg-white text-accent-colorslight-blue shadow-sm transition-colors duration-200 hover:bg-accent-colorslight-blue/10 active:scale-95"
                aria-label="Листать дипломы назад"
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
                onClick={(): void => scrollDiplomaByCard("right")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-colorslight-blue bg-white text-accent-colorslight-blue shadow-sm transition-colors duration-200 hover:bg-accent-colorslight-blue/10 active:scale-95"
                aria-label="Листать дипломы вперёд"
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
        </section>

        <section
          id="video-reviews"
          className={`${containerClass} py-12 sm:py-14 lg:py-16`}
        >
          <ServicesSection />
        </section>

        <section className={`${containerClass} py-12 sm:py-14 lg:py-16`}>
          <FAQSection />
        </section>

        <section
          id="contacts"
          className="bg-primary-colorssky-blue py-12 sm:py-14 lg:py-16"
        >
          <div className={`${containerClass}`}>
            <AppointmentBookingSection />
          </div>
        </section>

        <FooterSection />
      </main>

      {selectedDiploma && (
        <DiplomaModal
          isOpen={!!selectedDiploma}
          onClose={() => setSelectedDiploma(null)}
          src={selectedDiploma.src}
          alt={selectedDiploma.alt}
        />
      )}
    </div>
  );
};
