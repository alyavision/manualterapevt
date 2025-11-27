import { ImgHTMLAttributes } from "react";

type ResponsiveImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  mobileWidth?: number;
  tabletWidth?: number;
  desktopWidth?: number;
  useSrcSet?: boolean;
};

const generateSrcSet = (baseSrc: string, widths: number[]): string => {
  return widths
    .map((width) => {
      const baseName = baseSrc.replace(/\.[^.]+$/, "");
      const extension = baseSrc.match(/\.[^.]+$/)?.[0] || ".webp";
      return `${baseName}-${width}w${extension} ${width}w`;
    })
    .join(", ");
};

export const ResponsiveImage = ({
  src,
  alt,
  mobileWidth = 380,
  tabletWidth = 520,
  desktopWidth = 800,
  className,
  loading = "lazy",
  decoding = "async",
  useSrcSet = false,
  ...props
}: ResponsiveImageProps): JSX.Element => {
  const widths = [mobileWidth, tabletWidth, desktopWidth].filter(
    (w, i, arr) => !arr.slice(0, i).includes(w),
  );

  const sizes = `(max-width: 640px) ${mobileWidth}px, (max-width: 1024px) ${tabletWidth}px, ${desktopWidth}px`;

  const srcSet = useSrcSet ? generateSrcSet(src, widths) : undefined;

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      fetchPriority={loading === "eager" ? "high" : "low"}
      {...props}
    />
  );
};

