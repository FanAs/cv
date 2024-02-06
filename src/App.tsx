import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useIsPrinting } from './useIsPrinting';
import { Footer } from './Footer';
import { ResponsiveGrid } from './ResponsiveGrid';

const darkTheme = {
  background: '#20202a',
  background2: '#252531',
  foreground: '#20252a',
  primaryText: 'white',
  primaryLightText: '#dcd9d9',
  secondaryText: '#c2c2c2'
};

const lightTheme = {
  background: '#ffffff',
  background2: '#ffffff',
  foreground: '#ffffff',
  primaryText: '#000',
  primaryLightText: '#000',
  secondaryText: '#1a1a1a'
};

const App = (): React.ReactElement => {
  const isPrinting = useIsPrinting();

  return (
    <div className="App">
      <ThemeProvider theme={isPrinting ? lightTheme : darkTheme}>
        <ResponsiveGrid />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
