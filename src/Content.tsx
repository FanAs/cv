import styled from 'styled-components';
import { WorkExperience } from './WorkExperience';
import React from 'react';

const ContentContainer = styled.div`
  flex-grow: 1;
  padding-left: calc(6px * 2);
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
`;

const ContentInnerContainer = styled.div`
  max-width: calc(6px * 180);
`;

export const Content = (): React.ReactElement => (
  <ContentContainer>
    <ContentInnerContainer>
      <WorkExperience />
    </ContentInnerContainer>
  </ContentContainer>
);
