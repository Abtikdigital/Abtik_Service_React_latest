"use client";
import { memo, useEffect } from "react";
import { usePathname as useLocation } from "next/navigation";;

const ScrollToUp = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return null;
};
export default memo(ScrollToUp);
