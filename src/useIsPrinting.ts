import { useEffect, useState } from 'react';

export const useIsPrinting = (): boolean => {
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    if ('matchMedia' in window) {
      const mediaQueryList = window.matchMedia('print');
      mediaQueryList.addEventListener('change', mql => {
        setIsPrinting(mql.matches);
      });
    }
  }, [window.matchMedia]);

  return isPrinting;
};
