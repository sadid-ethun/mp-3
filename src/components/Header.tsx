import styled from "styled-components";
import { StyledH1, StyledP } from "../StyledComponents";

const StyledHeader = styled.header`
    display: flex;
    background-color: #2b3c5d;
    padding: 1% 2%;

    @media screen and (max-width: 750px) {
        justify-content: center;
    }
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Header() {

    return (
        <StyledHeader>
            <StyledDiv>
                <StyledH1>Sadid Ethun</StyledH1>
                <StyledP>My Online Resume</StyledP>
            </StyledDiv>
        </StyledHeader>
    );

}