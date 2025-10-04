import styled from 'styled-components';
import { PrimaryInfo } from './PrimaryInfo';
import { Languages } from './Languages';
import { Technologies } from './Technologies';
import React from 'react';

const LeftColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.background};
`;

const Separator = styled.div`
  width: 90%;
  height: 2px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.secondaryText};
`;

export const LeftColumn = (): React.ReactElement => (
  <LeftColumnContainer>
    <PrimaryInfo />
    <Separator />
    <Languages />
    <Separator />
    <Technologies />
  </LeftColumnContainer>
);
