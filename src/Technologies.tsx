import styled from "styled-components";
import {ReactElement, useState} from "react";

const TechnologiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  row-gap: calc(12px * 1);
  width: 100%;
  padding: calc(12px * 1) 0;
`;

const TechnologyContainer = styled.div<{$hide?: boolean}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc(12px * 1);

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  
  animation: ${props => props.$hide ? '0.5s ease-out 0s 1 slideInFromLeft' : 'none'};
`;

const NameWithIcon = styled.div<{$size?: 'normal' | 'small'}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: calc(12px * 1);
`;

const Name = styled.div`
  color: ${({theme}) => theme.primaryText};
  font-weight: 500;
  font-size: 11pt;
`;

const Icon = styled.div<{$url: string}>`
  background: url("${props => props.$url}") no-repeat center center;
  background-size: contain;
  width: calc(12px * 3);
  height: calc(12px * 3);
`;

const Header = styled.div`
  color: ${({theme}) => theme.primaryText};
  font-weight: bold;
  padding: 0 calc(12px);
  text-transform: capitalize;
  
  &:after {
    content: ":";
  }
`;

const KnowledgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const KnowledgeName = styled.div`
  font-size: smaller;
  color: ${({theme}) => theme.secondaryText}
`;

const KnowledgeLevelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  column-gap: 4px;
  width: 100%;
`;

const knowledgeLevel = {
    expert: { level: 5, color: '#4CAF50' },
    proficient: { level: 4, color: '#26A69A' },
    competent: {level: 3, color: '#9D79BC' },
    advanced: { level: 2, color: '#507DBC' },
    novice: { level: 1, color: '#5A5A66' }
};

const Star = styled.div<{$color: string}>`
  width: calc(10px);
  height: calc(10px);
  border-radius: 50%;
  background-color: ${props => props.$color};
`;

const Knowledge = ({children}: {children: keyof typeof knowledgeLevel}) => {
    return (
        <KnowledgeContainer>
            <KnowledgeName>{children}</KnowledgeName>
            <KnowledgeLevelContainer>{[...Array(knowledgeLevel[children].level)].map((_, i) => <Star key={i} $color={knowledgeLevel[children].color} />)}</KnowledgeLevelContainer>
        </KnowledgeContainer>
    )
}

const Technology = ({hide, knowledge, icon, children}: {hide?: boolean, knowledge: keyof typeof knowledgeLevel, icon: string, children: string}) => {
    return (
        <TechnologyContainer $hide={hide}>
            <NameWithIcon>
                <Icon $url={icon} />
                <Name>{children}</Name>
            </NameWithIcon>
            <Knowledge>{knowledge}</Knowledge>
        </TechnologyContainer>
    )
}

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: calc(12px * 1);
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SectionButton = styled.div`
  color: ${({theme}) => theme.primaryText};
  font-size: small;
  padding: 0 calc(12px * 1);
  text-decoration: underline;
  cursor: pointer;
`;

const Section = ({children, header}: {children: ReactElement<typeof Technology>[], header: string}) => {
    const [showAll, setShowAll] = useState(false);

    return (
        <SectionContainer>
            <HeaderContainer>
                <Header>{header}</Header>
                {children.some(child => (child.props as any).hide) && <SectionButton onClick={() => setShowAll(!showAll)}>{showAll ? 'show less' : 'show all'}</SectionButton>}
            </HeaderContainer>
            {children.filter(child => showAll ? true : !(child.props as any).hide)}
        </SectionContainer>
    )
}

export const Technologies = () => {
    return (
        <TechnologiesContainer>
            <Section header={'languages'}>
                <Technology knowledge={'expert'} icon={'https://cdn.svgporn.com/logos/typescript-icon.svg'}>TypeScript</Technology>
                <Technology knowledge={'expert'} icon={'https://cdn.svgporn.com/logos/javascript.svg'}>JavaScript</Technology>
                <Technology knowledge={'proficient'} icon={'https://cdn.svgporn.com/logos/php.svg'}>PHP</Technology>
                <Technology knowledge={'proficient'} icon={'https://cdn.svgporn.com/logos/html-5.svg'}>HTML5</Technology>
                <Technology knowledge={'proficient'} icon={'https://cdn.svgporn.com/logos/css-3.svg'}>CSS</Technology>
                <Technology hide knowledge={'competent'} icon={'https://cdn.svgporn.com/logos/c-sharp.svg'}>C#</Technology>
                <Technology hide knowledge={'competent'} icon={'https://cdn.svgporn.com/logos/java.svg'}>Java</Technology>
                <Technology hide knowledge={'advanced'} icon={'https://cdn.svgporn.com/logos/c-plusplus.svg'}>C/C++</Technology>
                <Technology hide knowledge={'novice'} icon={'https://cdn.svgporn.com/logos/python.svg'}>Python</Technology>
                <Technology hide knowledge={'novice'} icon={'https://cdn.svgporn.com/logos/go.svg'}>Go</Technology>
            </Section>
            <Section header={'frameworks'}>
                <Technology knowledge={'expert'} icon={'https://cdn.svgporn.com/logos/nodejs-icon-alt.svg'}>Node.js</Technology>
                <Technology hide knowledge={'expert'} icon={'https://cdn.svgporn.com/logos/jest.svg'}>Jest/Mocha</Technology>
                <Technology knowledge={'proficient'} icon={'https://cdn.svgporn.com/logos/react.svg'}>React</Technology>
                <Technology hide knowledge={'proficient'} icon={'https://cdn.svgporn.com/logos/redux.svg'}>Redux</Technology>
                <Technology knowledge={'proficient'} icon={'https://cdn.svgporn.com/logos/graphql.svg'}>GraphQL</Technology>
                <Technology hide knowledge={'proficient'} icon={'https://cdn.svgporn.com/logos/apollostack.svg'}>Apollo</Technology>
            </Section>
            <Section header={'databases'}>
                <Technology knowledge={'expert'} icon={'https://cdn.svgporn.com/logos/mongodb-icon.svg'}>MongoDB</Technology>
                <Technology knowledge={'expert'} icon={'https://cdn.svgporn.com/logos/redis.svg'}>Redis</Technology>
                <Technology knowledge={'proficient'} icon={'https://cdn.svgporn.com/logos/mysql-icon.svg'}>MySQL</Technology>
                <Technology hide knowledge={'competent'} icon={'https://cdn.svgporn.com/logos/postgresql.svg'}>PostgreSQL</Technology>
                <Technology hide knowledge={'advanced'} icon={'https://cdn.svgporn.com/logos/elasticsearch.svg'}>ElasticSearch</Technology>
                <Technology hide knowledge={'advanced'} icon={'https://cdn.svgporn.com/logos/neo4j.svg'}>Neo4j</Technology>
                <Technology hide knowledge={'novice'} icon={'https://cdn.svgporn.com/logos/influxdb-icon.svg'}>InfluxDB</Technology>
            </Section>
            <Section header={'DevOps'}>
                <Technology knowledge={'proficient'} icon={'https://cdn.svgporn.com/logos/docker-icon.svg'}>Docker</Technology>
                <Technology hide knowledge={'proficient'} icon={'https://cdn.svgporn.com/logos/gitlab.svg'}>GitLab CI/CD</Technology>
                <Technology knowledge={'competent'} icon={'https://cdn.svgporn.com/logos/kubernetes.svg'}>Kubernetes</Technology>
                <Technology hide knowledge={'competent'} icon={'https://cdn.svgporn.com/logos/helm.svg'}>Helm</Technology>
                <Technology knowledge={'competent'} icon={'https://cdn.svgporn.com/logos/google-cloud.svg'}>Google Cloud</Technology>
                <Technology hide knowledge={'competent'} icon={'https://cdn.svgporn.com/logos/nginx.svg'}>NGINX</Technology>
                <Technology hide knowledge={'competent'} icon={'https://cdn.svgporn.com/logos/apache.svg'}>Apache</Technology>
                <Technology hide knowledge={'advanced'} icon={'https://cdn.svgporn.com/logos/consul.svg'}>Consul</Technology>
            </Section>
            <Section header={'message queues'}>
                <Technology knowledge={'competent'} icon={'https://cdn.svgporn.com/logos/nats-icon.svg'}>NATS</Technology>
                <Technology knowledge={'advanced'} icon={'https://cdn.svgporn.com/logos/kafka-icon.svg'}>Kafka</Technology>
                <Technology knowledge={'advanced'} icon={'https://activemq.apache.org/assets/img/activemq_logo_icon_border.png'}>ActiveMQ</Technology>
                <Technology hide knowledge={'advanced'} icon={'https://cdn.svgporn.com/logos/rabbitmq-icon.svg'}>RabbitMQ</Technology>
            </Section>
            <Section header={'other'}>
                <Technology knowledge={'expert'} icon={'https://cdn.svgporn.com/logos/git-icon.svg'}>Git</Technology>
                <Technology knowledge={'expert'} icon={'https://cdn.svgporn.com/logos/prometheus.svg'}>Prometheus</Technology>
            </Section>
        </TechnologiesContainer>
    )
}