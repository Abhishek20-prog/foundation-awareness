import { useState, useEffect } from "react";

export const useScrollPosition = () => {
  const [scrollData, setScrollData] = useState({
    scrollY: 0,
    scrollPercent: 0,
    isScrolled: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

      setScrollData({
        scrollY,
        scrollPercent,
        isScrolled: scrollY > 50
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollData;
};
