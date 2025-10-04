import styled from 'styled-components';
import React from 'react';

const LanguagesContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const LanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(6px * 2);
`;

const LanguageName = styled.div`
  color: ${props => props.theme.primaryText};
  font-weight: bolder;
`;

const LanguageLevel = styled.div`
  color: ${props => props.theme.secondaryText};
  font-size: small;
`;

const Language = ({
  level,
  children,
}: {
  level: 'proficient' | 'native' | 'beginner';
  children: string;
}): React.ReactElement => (
  <LanguageContainer>
    <LanguageName>{children}</LanguageName>
    <LanguageLevel>{level}</LanguageLevel>
  </LanguageContainer>
);

export const Languages = (): React.ReactElement => (
  <LanguagesContainer>
    <Language level={'proficient'}>English</Language>
    <Language level={'proficient'}>Czech</Language>
    <Language level={'native'}>Russian</Language>
  </LanguagesContainer>
);
