import { useEffect, useState } from 'react';

export const useIsPrinting = (): boolean => {
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    // Chromium bug https://issues.chromium.org/issues/40998363
    const originalPrint = window.print;
    window.print = () => {
      setIsPrinting(true);
      setTimeout(() => { originalPrint(); }, 0);
    };

    window.addEventListener('beforeprint', () => {
      setIsPrinting(true);
    });

    window.addEventListener('afterprint', () => {
      setIsPrinting(false);
    });
  });

  return isPrinting;
};
