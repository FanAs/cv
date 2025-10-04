import styled from 'styled-components';
import React from 'react';

const GreetingContainer = styled.header`
  background-color: ${props => props.theme.foreground};
  padding: calc(6px * 2) 0 calc(6px * 2) calc(6px * 2);
  height: calc(6px * 32);

  @media screen and (max-width: 1024px) {
    height: inherit;
  }
`;

const Title = styled.h1`
  font-size: 20pt;
  font-weight: bold;
  color: ${props => props.theme.primaryText};

  @media print {
    display: none;
  }
`;

const Description = styled.h3`
  font-weight: normal;
  font-size: 14pt;
  color: ${props => props.theme.secondaryText};
`;

const InnerContainer = styled.div`
  padding: 0 calc(6px * 4);
  max-width: calc(6px * 180);
`;

const PrintMe = styled.p`
  @media print {
    display: none;
  }
`;

const Link = styled.a`
  cursor: pointer;
`;

export const Greeting = (): React.ReactElement => (
  <GreetingContainer>
    <InnerContainer>
      <Title>Hi.</Title>
      <Description>
        I&apos;m a <b>Node.js expert</b> with{' '}
        {Math.floor((new Date().getTime() - new Date('2016-06-01').getTime()) / 3.15576e10)}+ years
        crafting scalable backends, leading tech transformations at{' '}
        <a href="https://en.wikipedia.org/wiki/Semrush" target={'_blank'} rel="noreferrer">
          Semrush
        </a>{' '}
        and{' '}
        <a href="https://en.wikipedia.org/wiki/Livesport" target="_blank" rel="noreferrer">
          Livesport
        </a>
        . Passionate about performance optimization, security, and mentoring, I drive projects to
        innovate and excel.
        <PrintMe>
          You can{' '}
          <Link
            onClick={() => {
              window.print();
            }}
          >
            print the page
          </Link>{' '}
          to get my CV, or you can{' '}
          <a download={true} href={`/${encodeURIComponent('Artyom Suchkov - CV.pdf')}`}>
            download my full CV
          </a>
        </PrintMe>
      </Description>
    </InnerContainer>
  </GreetingContainer>
);
