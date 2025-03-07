import styled from "styled-components";

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
                <h1>Sadid Ethun</h1>
                <p>My Online Resume</p>
            </StyledDiv>
        </StyledHeader>
    );

}