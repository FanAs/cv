import {Greeting} from "./Greeting";
import styled from "styled-components";
import {WorkExperience} from "./WorkExperience";

const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 0 calc(6px * 4);
  background: ${({theme}) => theme.background2};
  display: flex;
  flex-direction: column;
`;

const ContentInnerContainer = styled.div`
  max-width: 640px;
`;

export const Content = () => {
    return (
        <ContentContainer>
            <ContentInnerContainer>
                <Greeting />
                <WorkExperience />
            </ContentInnerContainer>
        </ContentContainer>
    )
}