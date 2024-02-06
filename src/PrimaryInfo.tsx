import styled from 'styled-components';
import React from 'react';

const PrimaryInfoContainer = styled.div`
  display: flex;
  padding: calc(6px * 4) 0;
  flex-direction: column;
  row-gap: calc(6px * 1);
  width: 60%;
  
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const Line = styled.div`
  display: flex;
  padding: 0 calc(6px * 2);
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  color: ${props => props.theme.primaryText};
  text-transform: capitalize;
  font-weight: 500;
  &:after {
    content: ":";
  }
`;

const Value = styled.div`
  color: ${props => props.theme.secondaryText};
`;

export const PrimaryInfo = (): React => (
  <PrimaryInfoContainer>
    <Line>
      <Title>residence</Title>
      <Value>Czech Republic</Value>
    </Line>
    <Line>
      <Title>city</Title>
      <Value>Prague</Value>
    </Line>
    <Line>
      <Title>age</Title>
      <Value>{Math.floor((new Date().getTime() - new Date('1998-02-21').getTime()) / 3.15576e+10)}</Value>
    </Line>
  </PrimaryInfoContainer>
);
