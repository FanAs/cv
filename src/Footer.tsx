import styled from 'styled-components';
import React from 'react';

const FooterContainer = styled.div`
  background-color: ${props => props.theme.foreground};
  color: ${props => props.theme.primaryText};
  font-size: 14pt;
  text-align: center;
  padding: calc(6px * 4);
  
  @media print {
    display: none;
  }
`;

export const Footer = (): React.ReactElement => (
  <FooterContainer>
    You can find source code for this webpage on my <a href={'https://github.com/FanAs/cv/'} target={'_blank'}
                                                           rel="noreferrer">GitHub</a>.
  </FooterContainer>
);
