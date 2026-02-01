import React from "react";

export const StructuredData = (): JSX.Element => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://manual-hijama.uz",
    name: "Мануальный терапевт Руслан Артыков",
    alternateName: [
      "Руслан Артыков - Мануальный терапевт в Ташкенте",
      "Костоправ Ташкент",
      "Суякчи Ташкент",
      "Suyakchi Toshkent",
      "Костоправ Чиланзар",
      "Костоправ Юнусабад",
    ],
    description:
      "Костоправ, суякчи (suyakchi) в Ташкенте: вправление позвонков, правка позвоночника (umurtqa to'g'irlash), снятие блоков. Masaj, massaj, мануальная терапия, глубокий массаж спины. Хиджама, моксотерапия. Запись: +998 99 838 58 85.",
    image: "https://manual-hijama.uz/Ruslan%20Artjkov.webp",
    url: "https://manual-hijama.uz",
    telephone: "+998998385885",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Катта Мирабад 1-тор кўчаси, 5/2",
      addressLocality: "Ташкент",
      addressRegion: "Мирабадский район",
      addressCountry: "UZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.3111,
      longitude: 69.2406,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Ташкент" },
      { "@type": "AdministrativeArea", name: "Чиланзарский район" },
      { "@type": "AdministrativeArea", name: "Юнусабадский район" },
      { "@type": "AdministrativeArea", name: "Мирабадский район" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Услуги мануального терапевта и костоправа",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Правка позвоночника",
            description: "Вправление позвонков, снятие блоков и зажимов",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Правка атланта",
            description: "Постановка первого шейного позвонка",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Биомеханическая коррекция",
            description: "Восстановление положения суставов и позвоночника",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Мануальная терапия",
            description: "Лечение боли в спине, шее, суставах, вправление",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Глубокий массаж спины",
            description: "Снятие блоков и зажимов, оздоровительный массаж",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Хиджама",
            description: "Очищение организма и улучшение самочувствия",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Моксотерапия",
            description: "Мягкий прогрев для снятия боли и напряжения",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1000+",
    },
  };

  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Руслан Артыков",
    jobTitle: "Мануальный терапевт",
    description:
      "Сертифицированный мануальный терапевт с 7+ лет опыта в Ташкенте",
    image: "https://manual-hijama.uz/Ruslan%20Artjkov.webp",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ташкент",
      addressCountry: "UZ",
    },
    knowsAbout: [
      "Мануальная терапия",
      "Вправление позвонков",
      "Правка позвоночника",
      "Правка атланта",
      "Защемление нерва",
      "Защемление седалищного нерва",
      "Глубокий массаж спины",
      "Биомеханическая коррекция",
      "Снятие блоков и зажимов",
      "Хиджама",
      "Моксотерапия",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
    </>
  );
};

