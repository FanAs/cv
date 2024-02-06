import styled from 'styled-components';
import { Me } from './Me';
import { Greeting } from './Greeting';
import { LeftColumn } from './LeftColumn';
import { Content } from './Content';
import React from 'react';

const ResponsiveGridContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  grid-template-rows: fit-content() 100%;

  @media print {
    grid-template-columns: 100%;
  }
  
  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
  }
`;

export const ResponsiveGrid = (): React => (
  <ResponsiveGridContainer>
    <Me/>
    <Greeting/>
    <LeftColumn/>
    <Content/>
  </ResponsiveGridContainer>
);
