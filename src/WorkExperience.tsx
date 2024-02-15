import styled from 'styled-components';
import React from 'react';

const WorkExperienceContainer = styled.div`
  background-color: ${props => props.theme.background};
  padding: calc(6px * 2);
  page-break-before: always;
`;

const Header = styled.h1`
  color: ${props => props.theme.primaryText};
  padding: 0 calc(6px * 2);
`;

const Works = styled.div`
`;

const Work = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: calc(6px * 2);
  background-color: ${props => props.theme.background};
  padding: calc(6px * 2);
`;

const WorkName = styled.h2`
  margin: 0;
`;

const WorkLogo = styled.div<{ $url: string }>`
  background: url("${props => props.$url}") no-repeat center;
  background-size: contain;
  width: calc(6px * 6);
  margin-right: calc(6px * 1);
  border-radius: 50%;
  height: calc(6px * 6);
`;

const WorkDescription = styled.div`
  color: ${props => props.theme.primaryLightText};
  font-size: 13pt;
  margin-left: calc(6px * 1);
`;

const WorkRole = styled.div`
  font-size: 11pt;
  padding-left: calc(6px * 1);
  color: ${props => props.theme.secondaryText};
`;

const WorkTitle = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: calc(6px * 2);
  align-items: center;
  justify-content: space-between;
`;

const WorkDates = styled.div`
  background-color: ${props => props.theme.foreground};
  border-radius: calc(6px * 2);
  font-size: 11pt;
  padding: calc(6px * 1) calc(6px * 2);
  color: ${props => props.theme.secondaryText};
`;

const LetterOfRecommendationTitle = styled.div`
  color: ${props => props.theme.primaryText};
  font-weight: bolder;
  font-size: 13pt;
`;
const LetterOfRecommendationText = styled.div`
  color: ${props => props.theme.secondaryText};
  font-size: 11pt;
  padding-left: calc(6px * 3);
  padding-right: calc(6px * 3);
  
  p {
    margin-bottom: 0;
  }
`;
const LetterOfRecommendation = styled.div`
  align-self: start;
  padding-left: 10%;
  width: 70%;
  
  @media print {
    width: 90%;
  }

  svg {
    color: white;
    width: calc(6px * 2);
  }
`;

const Bullet = styled.p`
  padding-left: calc(6px * 2);
  font-size: 12pt;
  margin-block-start: calc(6px * 1);
  margin-block-end: calc(6px * 1);

  &::before {
    content: "🔹";
    padding-right: calc(6px * 1);
  }
`;

const Separator = styled.div`
  width: 100%;
  height: 2px;
  margin: 0 auto;
  margin-bottom: calc(6px * 1);
  background-color: ${({ theme }) => theme.secondaryText};
`;

const WorkRef = styled.a`
  color: ${props => props.theme.primaryText};
  text-decoration: none;
`;

const WorkMain = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: calc(6px * 1);
  align-items: center;
`;

const SlideSliveIFrame = styled.iframe`
  @media print {
    display: none;
  }
  
  margin-bottom: calc(6px * 2);
`;

export const WorkExperience = (): React.ReactElement => (
  <WorkExperienceContainer>
    <Header>Work experience</Header>
    <Works>
      <Work>
        <WorkTitle>
          <WorkMain>
            <WorkLogo $url={'/images/semrush-logo.jpeg'}/>
            <WorkRef href="https://www.semrush.com/company/"
                                     target="_blank"><WorkName>Semrush</WorkName></WorkRef>
          </WorkMain>
          <WorkDates>aug 2022 - now</WorkDates>
        </WorkTitle>
        <WorkRole>Senior Node.js Developer</WorkRole>
        <WorkDescription>
          In my current role, I am primarily focused on the development of new APIs and enhancing the security and efficiency of our applications. Here’s a brief introduction that reflects this focus:
          <Bullet>I’ve been crucial in the entire development process of a new API, from the initial idea to the final deployment, focusing on creating scalable, maintainable, and high-quality code.</Bullet>
          <Bullet>I am involved in converting our old JavaScript applications to TypeScript. This change is making our code stronger and easier to manage, while also making it clearer and reducing errors.</Bullet>
          <Bullet>Working on finding and fixing security issues in our applications. I also participated in a tough security CTF contest and with my team, we finished in 3rd place among 20 competitors.</Bullet>
        </WorkDescription>
      </Work>
      <Separator/>
      <Work>
        <WorkTitle>
          <WorkMain>
            <WorkLogo $url={'/images/livesport.jpeg'}/>
            <WorkRef href="https://www.flashscore.com/"
                                     target="_blank"><WorkName>Livesport</WorkName></WorkRef>
          </WorkMain>
          <WorkDates>dec 2017 - jul 2022</WorkDates>
        </WorkTitle>
        <WorkRole>Senior Node.js Developer</WorkRole>
        <WorkDescription>
          As a dedicated professional at Livesport,
          I played a key role in enhancing our database and API systems,
          leading to significant improvements in performance, reliability, and scalability.
          With a hands-on approach, I successfully led projects, developed and optimized APIs, and modernized legacy systems to meet current technological standards.
          <Bullet>Looked closely at and improved MongoDB setups, leading to successful data migration without data loss on 1TB storage.</Bullet>
          <Bullet>Took charge of developing and maintaining APIs with Node.js, making database use better and starting the use of a GraphQL, which made the system work better and easier to use.</Bullet>
          <Bullet>Led the change of an old API from CoffeeScript to TypeScript, cutting down on unnecessary parts and bringing in modern ways of coding.</Bullet>
          <Bullet>Introduced a system for real-time database updates, increasing reliability for our products, reaching more than 99.99% uptime. You can see the result of my work at WebExpo 2021:
            <SlideSliveIFrame src="https://slideslive.com/embed/presentation/38966117" width="100%"
                              height="200px" allow="autoplay; fullscreen"
                              sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation"
                              frameBorder="0" scrolling="no"></SlideSliveIFrame>
          </Bullet>
          <Bullet>Used the latest tech like TypeScript, GraphQL, ProtoBuf, Redis and MongoDB, laying the groundwork for solutions that can grow and work efficiently.</Bullet>
          <Bullet>Led the team by example, encouraging a culture of learning and staying on top of new technologies and best ways of doing things.</Bullet>
        </WorkDescription>
        <LetterOfRecommendation>
          <LetterOfRecommendationTitle>Petr Burian (CTO @ Livesport)</LetterOfRecommendationTitle>
          <svg style={{ float: 'left' }} fill={'currentColor'} xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
            <path
                                d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
          </svg>
          <LetterOfRecommendationText>
            <p>When we hired Artyom Suchkov to Livesport he was only 20 years old guy with strong
              recommendation from previous employer. Thanks to his passion for technology and focus on
              solving tough challenges, Artyom became a valuable member of our API team where he was
              responsible for implementing data processing technologies and architecture design.</p>
            <p>Artyom has strong understanding of backend technologies for data storage, caching and
              data queues. In his stack you can also find JavaScript, TypeScript, Node.js, GraphQL,
              Docker and many more.</p>
            <p>If you are looking for a developer with innovative ideas, Artyom might be your guy.</p>
          </LetterOfRecommendationText>
          <svg style={{ float: 'right' }} fill={'currentColor'} xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
            <path
                                d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/>
          </svg>
        </LetterOfRecommendation>
      </Work>
      <Separator/>
      <Work>
        <WorkTitle>
          <WorkMain>
            <WorkLogo $url={'/images/wikidi.jpeg'}/>
            <WorkRef href="https://www.crunchbase.com/organization/wikidi-cz"
                                     target="_blank"><WorkName>Wikidi</WorkName></WorkRef>
          </WorkMain>
          <WorkDates>jul 2014 - nov 2017</WorkDates>
        </WorkTitle>
        <WorkRole>Middle (2y) - Senior (1y) Full-Stack Developer</WorkRole>
        <WorkDescription>
          At Wikidi, my role as a full-stack developer focused on modernizing our tech stack and enhancing application performance.

          <Bullet>Led the migration to React for frontend enhancement for <a
                        href={'https://www.lupa.cz/startupy/flowreader/'} target={'_blank'}
                        rel="noreferrer">FlowReader.com</a>.</Bullet>
          <Bullet>Transformed PHP queues into Node.js microservices, significantly improving news
            distribution efficiency.</Bullet>
          <Bullet>Performed MongoDB analytics and optimizations, improving database efficiency and query performance.</Bullet>
          <Bullet>My role was pivotal in modernizing the architecture and streamlining performance for
            scalability.</Bullet>
        </WorkDescription>
      </Work>
    </Works>
  </WorkExperienceContainer>
);
