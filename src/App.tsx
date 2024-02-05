import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import {LeftColumn} from "./LeftColumn";
import {Content} from "./Content";

const theme = {
    background: '#20202a',
    background2: '#252531',
    foreground: '#20252a',
    primaryText: 'white',
    secondaryText: 'grey',
}

const Layout = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <Layout>
                <LeftColumn />
                <Content />
            </Layout>
        </ThemeProvider>
    </div>
  );
}

export default App;
