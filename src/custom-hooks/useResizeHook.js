import { useState, useEffect } from "react";

export const useResizeScreen = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (windowWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => window.removeEventListener("resize", handleWindowSizeChange);
  });

  return { isMobile };
};
