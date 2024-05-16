import { useState, useEffect } from 'react';

interface WindowSize {
  widthScreen: number;
  heightScreen: number;
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    widthScreen: window.innerWidth,
    heightScreen: window.innerHeight,
  });

  const handleResize = (): void => {
    setWindowSize({
      widthScreen: window.innerWidth,
      heightScreen: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    widthScreen: windowSize.widthScreen,
    heightScreen: windowSize.heightScreen,
  };
};
