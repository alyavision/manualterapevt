import React from "react";

export const StructuredData = (): JSX.Element => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://manual-hijama.uz",
    name: "Мануальный терапевт Руслан Артыков",
    alternateName: "Руслан Артыков - Мануальный терапевт в Ташкенте",
    description:
      "Сертифицированный мануальный терапевт с 7+ лет опыта. Лечение боли в спине, шее, суставах. Массаж, мануальная терапия, хиджама, моксотерапия в Ташкенте.",
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
    areaServed: {
      "@type": "City",
      name: "Ташкент",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Услуги мануального терапевта",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Мануальная терапия",
            description: "Лечение боли в спине, шее, суставах",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Массаж",
            description: "Классический и спортивный массаж",
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
      "Массаж",
      "Лечение боли в спине",
      "Лечение боли в шее",
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

