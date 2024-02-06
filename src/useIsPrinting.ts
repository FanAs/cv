import { useEffect, useState } from 'react';

export const useIsPrinting = (): boolean => {
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeprint', () => {
      setIsPrinting(true);
    });

    window.addEventListener('afterprint', () => {
      setIsPrinting(false);
    });
  });

  return isPrinting;
};
