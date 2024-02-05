import styled from "styled-components";
import {Me} from "./Me";
import {PrimaryInfo} from "./PrimaryInfo";
import {Languages} from "./Languages";
import {Technologies} from "./Technologies";

const LeftColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.background};
`;

const Separator = styled.div`
  width: 90%;
  height: 2px;
  margin: 0 auto;
  background-color: ${({theme}) => theme.secondaryText};
`;

export const LeftColumn = () => {
    return (
        <LeftColumnContainer>
            <PrimaryInfo />
            <Separator />
            <Languages />
            <Separator />
            <Technologies />
        </LeftColumnContainer>
    )
}