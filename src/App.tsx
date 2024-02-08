import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
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

const CenteredContainer = styled.div`
  display: flex;
  background: ${props => props.theme.background};
  justify-content: center;
`;

const BackgroundWideScreenWasher = styled.div`
  @media screen and (min-width: 1390px) {
    position: absolute;
    width: 100%;
    height: calc(6px * 36);
    background: ${props => props.theme.foreground};
  }
`;

const App = (): React.ReactElement => {
  const isPrinting = useIsPrinting();

  return (
    <div className="App">
      <ThemeProvider theme={isPrinting ? lightTheme : darkTheme}>
        <CenteredContainer>
          <BackgroundWideScreenWasher />
          <ResponsiveGrid />
        </CenteredContainer>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
