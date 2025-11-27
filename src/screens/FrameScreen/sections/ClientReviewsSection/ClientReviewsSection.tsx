import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

const reviewsData = [
  {
    name: "Алия",
    avatar: "/ellipse-3.png",
    rating: 5,
    review:
      "С первого сеанса убрал мою хроническую боль в шее я даже не верила, что можно так быстро почувствовать облегчение.",
  },
  {
    name: "Сергей",
    avatar: "/ellipse-3-2.png",
    rating: 5,
    review:
      "После его работы у меня впервые за год прошла боль в пояснице и я понял, что затягивал с визитом зря.",
  },
  {
    name: "Сергей",
    avatar: "/ellipse-3-2.png",
    rating: 5,
    review:
      "После его работы у меня впервые за год прошла боль в пояснице и я понял, что затягивал с визитом зря.",
  },
];

export const ClientReviewsSection = (): JSX.Element => {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-12">
      {reviewsData.map((review, index) => (
        <div key={index} className="md:col-span-6 lg:col-span-4">
          <Card className="h-full rounded-2xl border-0 bg-secondary-color shadow-drop-shadow-medium">
            <CardContent className="flex h-full flex-col justify-between gap-4 p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={review.avatar}
                      alt={review.name}
                      className="object-cover"
                      width="48"
                      height="48"
                      loading="lazy"
                    />
                  </Avatar>
                  <div className="typo-small font-semibold text-text-colorsdark-gray">
                    {review.name}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <img
                      key={starIndex}
                      className="h-3.5 w-3.5"
                      alt="Star"
                      src="/star-3.svg"
                      width="14"
                      height="14"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
              <p className="typo-body text-text-colorsdark-gray">
                {review.review}
              </p>
            </CardContent>
          </Card>
        </div>
      ))}
    </section>
  );
};
