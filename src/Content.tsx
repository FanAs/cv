import {Greeting} from "./Greeting";
import styled from "styled-components";
import {WorkExperience} from "./WorkExperience";

const ContentContainer = styled.div`
  flex-grow: 1;
  padding-left: calc(6px * 2);
  background: ${({theme}) => theme.background};
  display: flex;
  flex-direction: column;
`;

const ContentInnerContainer = styled.div`
  max-width: calc(6px * 180);
`;

export const Content = () => {
    return (
        <ContentContainer>
            <ContentInnerContainer>
                <WorkExperience />
            </ContentInnerContainer>
        </ContentContainer>
    )
}