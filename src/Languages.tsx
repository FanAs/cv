import styled from "styled-components";

const LanguagesContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: row;
  justify-content: space-between;
`;

const LanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(12px * 1);
`;

const LanguageName = styled.div`
  color: ${props => props.theme.primaryText};
  font-weight: bolder;
`;

const LanguageLevel = styled.div`
  color: ${props => props.theme.secondaryText};
  font-size: small;
`;

const Language = ({ level, children }: {level: 'proficient' | 'native' | 'beginner', children: string}) => (
    <LanguageContainer>
        <LanguageName>{children}</LanguageName>
        <LanguageLevel>{level}</LanguageLevel>
    </LanguageContainer>
)

export const Languages = () => {
    return (
        <LanguagesContainer>
            <Language level={'proficient'}>English</Language>
            <Language level={'proficient'}>Czech</Language>
            <Language level={'native'}>Russian</Language>
        </LanguagesContainer>
    )
}