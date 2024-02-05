import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import {LeftColumn} from "./LeftColumn";
import {Content} from "./Content";
import {Me} from "./Me";
import {Greeting} from "./Greeting";

const theme = {
    background: '#20202a',
    background2: '#252531',
    foreground: '#20252a',
    primaryText: 'white',
    primaryLightText: '#dcd9d9',
    secondaryText: 'grey',
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  grid-template-rows: fit-content() 100%;
`;

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <Grid>
                <Me />
                <Greeting />
                <LeftColumn />
                <Content />
            </Grid>
        </ThemeProvider>
    </div>
  );
}

export default App;
