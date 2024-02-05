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
    secondaryText: '#c2c2c2',
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  grid-template-rows: fit-content() 100%;
`;

const Footer = styled.div`
  background-color: ${props => props.theme.foreground};
  color: ${props => props.theme.primaryText};
  font-size: 14pt;
  text-align: center;
  padding: calc(6px * 4);
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
            <Footer>
                You can find source code for this webpage on <a href={"https://github.com/FanAs/cv/"} target={"_blank"}>GitHub</a>
            </Footer>
        </ThemeProvider>
    </div>
  );
}

export default App;
