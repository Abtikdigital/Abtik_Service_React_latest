import { memo } from "react";

type OptimizedImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** WebP source for modern format; when set, renders <picture> with WebP + fallback */
  webpSrc?: string;
  /** Use for LCP image (e.g. hero) to load eagerly */
  priority?: boolean;
  className?: string;
  /** Prefer "cover" or "contain" to avoid distorted images */
  objectFit?: "cover" | "contain" | "fill" | "none";
  loading?: "lazy" | "eager";
  [key: string]: unknown;
};

/**
 * Image component for better LCP, properly sized images, and optional WebP.
 * - Always set width/height (or in className) to avoid layout shift and distortion.
 * - Use webpSrc when you have a WebP version for smaller file size.
 */
const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  width,
  height,
  webpSrc,
  priority = false,
  className = "",
  objectFit,
  loading,
  ...rest
}: OptimizedImageProps) {
  const loadAttr = loading ?? (priority ? "eager" : "lazy");
  const style = objectFit ? { objectFit } : undefined;

  if (webpSrc) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loadAttr}
          decoding="async"
          className={className}
          style={style}
          {...rest}
        />
      </picture>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loadAttr}
      decoding="async"
      className={className}
      style={style}
      {...rest}
    />
  );
});

export default OptimizedImage;
