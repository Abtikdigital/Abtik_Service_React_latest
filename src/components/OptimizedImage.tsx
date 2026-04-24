import Image, { ImageProps } from "next/image";
import { memo } from "react";

type OptimizedImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  objectFit?: "cover" | "contain" | "fill" | "none";
};

/**
 * Image component that leverages Next.js native optimization.
 */
const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  objectFit,
  loading,
  ...rest
}: OptimizedImageProps) {
  // If no width/height provided, we must use layout "fill" or "intrinsic"
  // But Next.js 13+ prefers fixed width/height or "fill"
  
  const imageProps: any = {
    src,
    alt,
    width,
    height,
    priority,
    className,
    loading: priority ? undefined : loading, // Next.js handles this automatically with priority
    ...rest
  };

  if (objectFit) {
    imageProps.style = { ...imageProps.style, objectFit };
  }

  return <Image {...imageProps} />;
});

export default OptimizedImage;
