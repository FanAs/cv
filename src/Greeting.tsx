import styled from "styled-components";

const GreetingContainer = styled.header`
  background-color: ${props => props.theme.foreground};
  padding-left: calc(6px * 2);
`;

const Title = styled.h1`
  font-size: 20pt;
  font-weight: bold;
  color: ${props => props.theme.primaryText};
`;

const Description = styled.h3`
  font-weight: normal;
  font-size: 14pt;
  color: ${props => props.theme.secondaryText};
`;

const InnerContainer = styled.div`
  padding: calc(6px * 4);
  max-width: calc(6px * 180);
`;

export const Greeting = () => {
    return (
        <GreetingContainer>
            <InnerContainer>
                <Title>Hi.</Title>
                <Description>
                    I'm a <b>Node.js expert</b> with {Math.floor((new Date().getTime() - new Date('2016-06-01').getTime()) / 3.15576e+10)}+ years crafting scalable backends, leading tech transformations at <a href="https://en.wikipedia.org/wiki/Semrush" target={"_blank"}>Semrush</a> and <a href="https://en.wikipedia.org/wiki/Livesport" target="_blank">Livesport</a>. Passionate about performance optimization, security, and mentoring, I drive projects to innovate and excel.
                </Description>
            </InnerContainer>
        </GreetingContainer>
    );
}