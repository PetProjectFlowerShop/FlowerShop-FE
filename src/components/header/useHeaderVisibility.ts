import { useEffect, useRef, useState } from 'react';

const TOP_BAR_HEIGHT = 150;

export const useHeaderVisibility = () => {
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [headerVisible, setHeaderVisible] = useState(true);

  const previousScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - previousScrollY.current;

      if (currentScrollY <= 10) {
        setTopBarVisible(true);
        setHeaderVisible(true);

        previousScrollY.current = currentScrollY;
        return;
      }

      if (delta > 0) {
        if (currentScrollY > TOP_BAR_HEIGHT) {
          setTopBarVisible(false);
        }

        if (!topBarVisible && currentScrollY > TOP_BAR_HEIGHT) {
          setHeaderVisible(false);
        }
      }

      if (delta < 0) {
        setHeaderVisible(true);
      }

      previousScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [topBarVisible]);

  return {
    topBarVisible,
    headerVisible,
  };
};
