import styled from "styled-components";

const GreetingContainer = styled.header`
  background-color: ${props => props.theme.foreground};
`;

const Title = styled.h1`
  padding-left: calc(12px * 1);
  font-size: 20pt;
  font-weight: bold;
  color: ${props => props.theme.primaryText};
`;

const Description = styled.h3`
  font-weight: normal;
  font-size: 14pt;
  color: ${props => props.theme.secondaryText};
`;

const Image = styled.div`
  background: url("/images/conference.png") no-repeat center;
  background-size: cover;
  width: 100%;
  height: 210px;
`;

const InnerContainer = styled.div`
  padding: calc(6px * 4);
`;

export const Greeting = () => {
    return (
        <GreetingContainer>
            <a target="_blank" href="https://slideslive.com/38966117/how-to-trace-the-history-of-mysql-data"><Image /></a>
            <InnerContainer>
                <Title>Hi. I'm Artyom.</Title>
                <Description>
                    I'm a <b>Node.js expert</b> with {Math.floor((new Date().getTime() - new Date('2016-06-01').getTime()) / 3.15576e+10)}+ years crafting scalable backends, leading tech transformations at <a href="https://en.wikipedia.org/wiki/Semrush" target={"_blank"}>Semrush</a> and <a href="https://en.wikipedia.org/wiki/Livesport" target="_blank">Livesport</a>. Passionate about performance optimization, security, and mentoring, I drive projects to innovate and excel.
                </Description>
            </InnerContainer>
        </GreetingContainer>
    );
}