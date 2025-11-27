import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { ResponsiveImage } from "./ResponsiveImage";

type AnimatedImageProps = {
  src: string;
  alt: string;
  className?: string;
  animationType?: "slide-in-left" | "slide-in-right";
  containerClassName?: string;
  width?: number;
  height?: number;
};

export const AnimatedImage = ({
  src,
  alt,
  className,
  animationType = "slide-in-right",
  containerClassName,
  width,
  height,
}: AnimatedImageProps): JSX.Element => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (imageError) {
    return (
      <div className={clsx("flex items-center justify-center bg-gray-100 rounded-[20px]", containerClassName)}>
        <span className="text-gray-400">Изображение не загружено</span>
      </div>
    );
  }

  return (
    <div
      ref={elementRef}
      className={clsx(
        !isVisible && "opacity-0",
        isVisible &&
          (animationType === "slide-in-left"
            ? "animate-slide-in-left"
            : "animate-slide-in-right"),
        containerClassName,
      )}
      style={
        isVisible
          ? {
              animationDelay: "0.1s",
              "--animation-delay": "0.1s",
              willChange: "transform, opacity",
            } as React.CSSProperties
          : { willChange: "transform, opacity" }
      }
    >
      <ResponsiveImage
        src={src}
        alt={alt}
        className={className}
        onError={() => setImageError(true)}
        mobileWidth={348}
        tabletWidth={520}
        desktopWidth={640}
        width={width}
        height={height}
      />
    </div>
  );
};

