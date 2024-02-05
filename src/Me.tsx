import React from 'react';
import styled, {css} from 'styled-components';

const MeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: calc(12px * 1);
  padding: 12px 0;
  background-color: ${props => props.theme.foreground};
`;

const ProfileImage = styled.div`
  background-image: url("./images/me.jpeg");
  background-size: cover;
  border-radius: 50%;
  width: calc(12px * 8);
  height: calc(12px * 8);
`;

const Name = styled.a`
  color: ${props => props.theme.primaryText};
  font-weight: bolder;
  
  &:after {
    content: "🚀";
    padding-left: calc(6px * 1);
    display: inline-block;
    text-decoration: none;
  }
`;

const Roles = styled.div`
  display: block;
  text-align: center;
`;

const Role = styled.div<{$primary?: boolean}>`
  color: ${props => props.theme.secondaryText};
  padding-bottom: calc(12px * 0.5);
  font-size: 11pt;
  
  ${props => props.$primary && css`
    font-weight: 500;
  `}
`;

export const Me = () => {
    return (
        <MeContainer>
            <ProfileImage />
            <Name href={"https://www.linkedin.com/in/artyom-suchkov/"} target={"_blank"}>Artyom Suchkov</Name>
            <Roles>
                <Role $primary>Senior Node.js Developer</Role>
                <Role>Full-Stack JS Developer</Role>
            </Roles>
        </MeContainer>
    );
}