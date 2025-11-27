import { useEffect, useRef, useState } from "react";

type LazyIframeProps = {
  src: string;
  title: string;
  className?: string;
  allow?: string;
  allowFullScreen?: boolean;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  referrerPolicy?: string;
};

export const LazyIframe = ({
  src,
  title,
  className,
  allow,
  allowFullScreen,
  width,
  height,
  style,
  referrerPolicy,
}: LazyIframeProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px",
      },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={className} style={style}>
      {shouldLoad ? (
        <iframe
          src={src}
          title={title}
          width={width || "100%"}
          height={height || "100%"}
          allow={allow}
          allowFullScreen={allowFullScreen}
          loading="lazy"
          referrerPolicy={referrerPolicy}
          className="h-full w-full rounded-[20px]"
          style={{ border: 0 }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-100 rounded-[20px]">
          <div className="text-gray-400">Загрузка...</div>
        </div>
      )}
    </div>
  );
};

