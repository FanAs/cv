import styled from "styled-components";

const WorkExperienceContainer = styled.div`
  background-color: ${props => props.theme.background};
  padding: calc(6px * 2);
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
  row-gap: calc(12px * 1);
  background-color: ${props => props.theme.background};
  padding: calc(12px * 1);
`;

const WorkName = styled.h2`
  margin: 0;
`;

const WorkLogo = styled.div<{$url: string}>`
  background: url("${props => props.$url}") no-repeat center;
  background-size: contain;
  width: calc(12px * 3);
  height: calc(12px * 3);
`;

const WorkDescription = styled.div`
  color: ${props => props.theme.secondaryText};
`;

const WorkRole = styled.div`
  font-size: smaller;
  padding-left: calc(6px * 1);
  color: ${props => props.theme.secondaryText};
`;

const WorkTitle = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: calc(12px * 1);
  align-items: center;
`;

const WorkDates = styled.div`
  background-color: ${props => props.theme.foreground};
  border-radius: calc(12px * 1);
  font-size: 11pt;
  padding: calc(12px * 0.5) calc(12px * 1);
  color: ${props => props.theme.secondaryText};
`;

const LetterOfRecommendationTitle = styled.div`
  color: ${props => props.theme.primaryText};
  font-weight: bolder;
`;
const LetterOfRecommendationText = styled.div`
  color: ${props => props.theme.secondaryText};
  font-size: 9pt;
`;
const LetterOfRecommendation = styled.div`
  align-self: end;
  width: 60%;
`;

const Separator = styled.div`
  width: 100%;
  height: 2px;
  margin: 0 auto;
  margin-bottom: calc(6px * 1);
  background-color: ${({theme}) => theme.secondaryText};
`;

const WorkRef = styled.a`
  color: ${props => props.theme.primaryText};
`;

export const WorkExperience = () => {
    return (
        <WorkExperienceContainer>
            <Header>Work experience</Header>
            <Works>
                <Work>
                    <WorkTitle>
                        <WorkLogo $url={"/images/semrush-logo.jpeg"} />
                        <WorkRef href="https://www.semrush.com/company/" target="_blank"><WorkName>Semrush</WorkName></WorkRef>
                        <WorkDates>aug 2022 - now</WorkDates>
                    </WorkTitle>
                    <WorkRole>Senior Node.js Developer</WorkRole>
                    <WorkDescription>
                        I focused on refactoring to TypeScript for better code quality and security, and took key role in developing a comprehensive set of microservices.
                        I also worked on optimizing data streams for efficiency and scalability.
                        Additionally, I contributed to enhancing security practices, culminating in our team securing third place in a security CTF competition.
                    </WorkDescription>
                </Work>
                <Separator />
                <Work>
                    <WorkTitle>
                        <WorkLogo $url={"/images/livesport.jpeg"} />
                        <WorkRef href="https://www.flashscore.com/" target="_blank"><WorkName>Livesport</WorkName></WorkRef>
                        <WorkDates>dec 2017 - jul 2022</WorkDates>
                    </WorkTitle>
                    <WorkRole>Senior Node.js Developer</WorkRole>
                    <WorkDescription>
                        My focus was on backend optimization, modernizing legacy systems for scalable, high-performance results.
                        I enhanced MongoDB solutions and developed a zero-loss data migration microservice.
                        I also transitioned APIs from CoffeeScript to TypeScript.
                        Additionally, I introduced a system for real-time database updates, increasing reliability for our products.
                    </WorkDescription>
                    <LetterOfRecommendation>
                        <LetterOfRecommendationTitle>Petr Burian (CTO @ Livesport)</LetterOfRecommendationTitle>
                        <LetterOfRecommendationText>
                            <p>When we hired Artyom Suchkov to Livesport he was only 20 years old guy with strong recommendation from previous employer. Thanks to his passion for technology and focus on solving tough challenges, Artyom became a valuable member of our API team where he was responsible for implementing data processing technologies and architecture design.</p>
                            <p>Artyom has strong understanding of backend technologies for data storage, caching and data queues. In his stack you can also find JavaScript, TypeScript, Node.js, GraphQL, Docker and many more.</p>
                            <p>If you are looking for a developer with innovative ideas, Artyom might be your guy.</p>
                        </LetterOfRecommendationText>
                    </LetterOfRecommendation>
                </Work>
                <Separator />
                <Work>
                    <WorkTitle>
                        <WorkLogo $url={"/images/wikidi.jpeg"} />
                        <WorkRef href="https://www.crunchbase.com/organization/wikidi-cz" target="_blank"><WorkName>Wikidi</WorkName></WorkRef>
                        <WorkDates>jul 2014 - nov 2017</WorkDates>
                    </WorkTitle>
                    <WorkRole>Middle (2y) - Senior (1y) Full-Stack Developer</WorkRole>
                    <WorkDescription>
                        I led the migration to React for frontend enhancement for <a href={"https://www.lupa.cz/startupy/flowreader/"} target={"_blank"}>FlowReader.com</a>.
                        Additionally, I transformed PHP queues into Node.js microservices, significantly improving news distribution efficiency and system maintainability.
                        My role was pivotal in modernizing the architecture and streamlining performance for scalability.
                    </WorkDescription>
                </Work>
            </Works>
        </WorkExperienceContainer>
    );
}