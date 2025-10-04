import styled from 'styled-components';
import React from 'react';
import {
  Clock,
  BarChart3,
  Users,
  Target,
  Shield,
  Trophy,
  Zap,
  Database,
  CheckCircle,
  Code,
  TrendingUp,
  Wrench,
  Activity,
  Bell,
  Rocket,
} from 'lucide-react';

const WorkExperienceContainer = styled.div`
  background-color: ${props => props.theme.background};
  padding: calc(6px * 2);
  page-break-before: always;
`;

const Header = styled.h1`
  color: ${props => props.theme.primaryText};
  padding: 0 calc(6px * 2);
  font-weight: 800;
`;

const Works = styled.div``;

const Work = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: calc(6px * 2);
  background-color: ${props => props.theme.background};
  padding: calc(6px * 2);
`;

const WorkName = styled.h2`
  margin: 0;
  font-weight: 700;
`;

const WorkLogo = styled.div<{ $url: string }>`
  background: url('${props => props.$url}') no-repeat center;
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
  font-weight: 700;
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
  padding-left: 5%;
  width: 70%;

  @media print {
    width: 90%;
  }

  svg {
    color: white;
    width: calc(6px * 2);
  }
`;

const Point = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: calc(6px * 1);
  padding-left: calc(6px * 1);
  font-size: 12pt;
  margin-block-start: calc(6px * 1);
  margin-block-end: calc(6px * 1);
`;

const Bullet = styled.span`
  &::before {
    content: '•';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 16px;
    height: 16px;
    margin-top: 3px;
    font-size: 14pt;
  }

  padding-left: 16px;
  text-indent: -16px;
`;

const MetricsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: calc(6px * 1);
  margin-top: calc(6px * 1);
  margin-left: calc(6px * 4);
`;

const Metric = styled.span`
  display: inline-flex;
  align-items: center;
  gap: calc(6px * 0.5);
  padding: calc(6px * 0.5) calc(6px * 1);
  background-color: ${props => props.theme.foreground};
  border-radius: calc(6px * 1);
  font-size: 10pt;
  font-weight: 600;
  white-space: nowrap;

  svg {
    width: 14px;
    height: 14px;
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
            <WorkLogo $url={'/images/semrush-logo.jpeg'} />
            <WorkRef href="https://www.semrush.com/company/" target="_blank">
              <WorkName>Semrush</WorkName>
            </WorkRef>
          </WorkMain>
          <WorkDates>aug 2022 - now</WorkDates>
        </WorkTitle>
        <WorkRole>Senior Node.js Developer</WorkRole>
        <WorkDescription>
          <b>Lead developer</b> on a universal metrics API platform, <b>technical mentor</b>,{' '}
          <b>technical Interviewer</b>, handling critical issues across teams:
          <Point>
            <Bullet>
              <b>Leading the development</b> of a universal metrics API platform from conception to
              production - similar to Google Analytics but designed for seamless integration across
              any service or data source.
            </Bullet>
            <MetricsContainer>
              <Metric>
                <BarChart3 /> 99.99% uptime
              </Metric>
              <Metric>
                <Zap /> 30+ data sources
              </Metric>
            </MetricsContainer>
          </Point>
          <Point>
            <Bullet>
              <b>Conducting technical interviews</b> to hire and assess top engineering talent,
              evaluating technical skills, problem-solving abilities, and cultural fit.
            </Bullet>
            <MetricsContainer>
              <Metric>
                <Users /> 100+ candidates evaluated
              </Metric>
            </MetricsContainer>
          </Point>
          <Point>
            <Bullet>
              <b>Mentoring junior and mid-level developers</b> through technical onboarding, code
              reviews, and career progression — fostering growth toward independent contributor
              roles.
            </Bullet>
            <MetricsContainer>
              <Metric>
                <Users /> 3 developers
              </Metric>
            </MetricsContainer>
          </Point>
          <Point>
            <Bullet>
              <b>Serving as the go-to engineer</b> for high-priority incidents and complex technical
              challenges requiring immediate resolution, providing technical leadership and
              expertise across multiple product teams.
            </Bullet>
            <MetricsContainer>
              <Metric>
                <Target /> 4 product teams supported
              </Metric>
              <Metric>
                <Activity />
                20+ resolved incidents
              </Metric>
              <Metric>
                <Clock />
                &lt;15m response time
              </Metric>
              <Metric title="MTTR - Mean Time To Repair">
                <Bell />
                &lt;3h incident MTTR
              </Metric>
            </MetricsContainer>
          </Point>
          <Point>
            <Bullet>
              <b>
                Researching security vulnerabilities and participating in Capture The Flag
                competitions
              </b>
              , collaborating with teammates to identify, exploit, and defend against security
              threats in simulated environments.
            </Bullet>
            <MetricsContainer>
              <Metric>
                <Shield /> 3 CTFs
              </Metric>
              <Metric>
                <Trophy /> 3rd/20 teams
              </Metric>
            </MetricsContainer>
          </Point>
        </WorkDescription>
      </Work>
      <Separator />
      <Work>
        <WorkTitle>
          <WorkMain>
            <WorkLogo $url={'/images/livesport.jpeg'} />
            <WorkRef href="https://www.flashscore.com/" target="_blank">
              <WorkName>Livesport</WorkName>
            </WorkRef>
          </WorkMain>
          <WorkDates>dec 2017 - jul 2022</WorkDates>
        </WorkTitle>
        <WorkRole>Senior Node.js Developer</WorkRole>
        <WorkDescription>
          <b>Senior backend engineer</b> responsible for database architecture, API development, and
          system modernization, delivering high-performance solutions for a global platform serving
          100+ million users:
          <Point>
            <Bullet>
              <b>Architected and executed MongoDB infrastructure improvements</b> - designed and
              implemented database systems handling massive query loads, successfully migrating
              production data with zero data loss while maintaining system availability.
            </Bullet>
            <MetricsContainer>
              <Metric>
                <Zap /> 250k+ qps
              </Metric>
              <Metric>
                <Database /> 1TB+ data
              </Metric>
              <Metric>
                <CheckCircle /> zero data loss migration
              </Metric>
            </MetricsContainer>
          </Point>
          <Point>
            <Bullet>
              <b>Developed and maintained high-performance APIs</b> serving massive traffic using
              Node.js, achieving exceptional response times while optimizing database operations and
              implementing GraphQL to improve system performance and developer experience across the
              organization.
            </Bullet>
            <MetricsContainer>
              <Metric>
                <Rocket /> 10k+ rps
              </Metric>
              <Metric>
                <Clock /> P95 &lt;50ms
              </Metric>
            </MetricsContainer>
          </Point>
          <Point>
            <Bullet>
              <b>Led the modernization of legacy systems</b>, migrating critical APIs from
              CoffeeScript to TypeScript, reducing technical debt and implementing modern
              development practices and testing culture without AI assistance.
            </Bullet>
            <MetricsContainer>
              <Metric title="LOC = Lines of Code">
                <Code /> 100k LOC (no LLMs)
              </Metric>
            </MetricsContainer>
          </Point>
          <Point>
            <Bullet>
              <b>Designed and implemented real-time database replication system</b> using
              multi-master replicas, achieving exceptional uptime for production services. Presented
              the architecture and results at WebExpo 2021:
            </Bullet>
            <MetricsContainer>
              <Metric>
                <TrendingUp /> 99.995% uptime
              </Metric>
            </MetricsContainer>
            <SlideSliveIFrame
              src="https://slideslive.com/embed/presentation/38966117?embed_token=eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NTk1MzcwMjMsImV4cCI6MTc1OTY2NjYyMywidSI6eyJ1dWlkIjoiMGNhODdkYTMtOTcyMy00ZWEzLTkwMzQtOTRhMTQ3ZTJkYjJiIiwiaSI6bnVsbCwiZSI6ImZhbmFzZXdAZ21haWwuY29tIiwibSI6ZmFsc2UsImMiOm51bGx9LCJ2X3IiOnsidXVpZCI6bnVsbH0sInAiOjM4OTY2MTE3LCJkIjpudWxsLCJ0IjpbeyJ0b2tlbl90eXBlIjoiZW1haWwiLCJ0b2tlbiI6IlVSLURmejU1SDZNYUhJX1BVOUNOTGdKU2dnOCIsImV4cGlyZXNfYXQiOiIyMDI1LTEwLTExVDAwOjE3OjAzWiIsInRhcmdldF90eXBlIjoiRm9sZGVyIiwidGFyZ2V0X2lkIjo5MDQ4OX1dfQ.9T5zbXwCmaFI5EC2i-ZQaf2au_F8K1FHcWwNmFJsjoI"
              width="100%"
              height="200px"
              allow="autoplay; fullscreen"
              sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation"
              frameBorder="0"
              scrolling="no"
            ></SlideSliveIFrame>
          </Point>
          <Point>
            <Bullet>
              <b>Built scalable solutions</b> using modern technologies including TypeScript,
              GraphQL, Protocol Buffers, Redis, and MongoDB - implementing hierarchical caching and
              optimization strategies for high-performance operations.
            </Bullet>
            <MetricsContainer>
              <Metric>
                <Wrench />
                100+ million users
              </Metric>
            </MetricsContainer>
          </Point>
          <Point>
            <Bullet>
              <b>Provided technical leadership</b>, mentoring team members, sharing architectural
              knowledge, and promoting continuous learning culture focused on emerging technologies
              and engineering best practices.
            </Bullet>
          </Point>
        </WorkDescription>
        <LetterOfRecommendation>
          <LetterOfRecommendationTitle>
            <a href="https://www.linkedin.com/in/burian-petr/" target="_blank">
              Petr Burian
            </a>{' '}
            (ex-CTO @ Livesport)
          </LetterOfRecommendationTitle>
          <svg
            style={{ float: 'left' }}
            fill={'currentColor'}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
          </svg>
          <LetterOfRecommendationText>
            <p>
              When we hired Artyom Suchkov to Livesport he was only 20 years old guy with strong
              recommendation from previous employer. Thanks to his passion for technology and focus
              on solving tough challenges, Artyom became a valuable member of our API team where he
              was responsible for implementing data processing technologies and architecture design.
            </p>
            <p>
              Artyom has strong understanding of backend technologies for data storage, caching and
              data queues. In his stack you can also find JavaScript, TypeScript, Node.js, GraphQL,
              Docker and many more.
            </p>
            <p>
              If you are looking for a developer with innovative ideas, Artyom might be your guy.
            </p>
          </LetterOfRecommendationText>
          <svg
            style={{ float: 'right' }}
            fill={'currentColor'}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
          </svg>
        </LetterOfRecommendation>
      </Work>
      <Separator />
      <Work>
        <WorkTitle>
          <WorkMain>
            <WorkLogo $url={'/images/wikidi.jpeg'} />
            <WorkRef href="https://www.crunchbase.com/organization/wikidi-cz" target="_blank">
              <WorkName>Wikidi</WorkName>
            </WorkRef>
          </WorkMain>
          <WorkDates>jul 2014 - nov 2017</WorkDates>
        </WorkTitle>
        <WorkRole>Middle (2y) - Senior (1y) Full-Stack Developer</WorkRole>
        <WorkDescription>
          <b>Full-stack developer</b> focused on modernizing technology stack and enhancing
          application performance for a news aggregation platform:
          <Point>
            <Bullet>
              <b>Led frontend modernization initiative</b>, migrating{' '}
              <a
                href={
                  'https://www.zive.cz/clanky/v-kvetnu-skonci-flowreader--ceska-rss-ctecka-a-agregator-socialnich-siti-v-jednom/sc-3-a-209594/default.aspx'
                }
                target={'_blank'}
                rel="noreferrer"
              >
                FlowReader.com
              </a>{' '}
              to React, improving user experience and development velocity.
            </Bullet>
          </Point>
          <Point>
            <Bullet>
              <b>Architected and developed microservices infrastructure</b>, transforming legacy PHP
              queue systems into modern Node.js microservices, dramatically improving news
              distribution efficiency and system reliability.
            </Bullet>
          </Point>
          <Point>
            <Bullet>
              <b>Optimized database performance</b>, performing comprehensive MongoDB analytics and
              implementing query optimizations, reducing response times and improving overall system
              efficiency.
            </Bullet>
          </Point>
          <Point>
            <Bullet>
              <b>Drove architectural modernization</b>, playing a key role in transforming the
              technology stack and establishing scalable patterns for future growth.
            </Bullet>
          </Point>
        </WorkDescription>
      </Work>
    </Works>
  </WorkExperienceContainer>
);
