import styled from "styled-components";

export const StyledMain = styled.main`
    width: 80%;
    min-height: 100vh;
    padding: 3%;
    background-color: #202020;

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

export const StyledH2 = styled.h2`
    margin: 0;
    font-size: calc(4px + 2.5vw);
    font-weight: 500;
    align-self: center;
    color: #00acfb;
    margin-bottom: 4%;

    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

export const ContentDiv = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

export const ResumeItemDiv = styled.div`
    border-left: 0.5vw solid #00acfb;
    padding-left: 2%;
    margin-bottom: 5%;
`;

export const DescriptionP = styled.p`
    margin-top: 3%;
    font-size: calc(4px + 1vw);
`;

export const StyledH1 = styled.h1`
    margin: 0;
    font-size: calc(4px + 2vw);
    font-weight: 500;
`;

export const StyledH3 = styled.h3`
    margin: 0;
    font-size: calc(4px + 1.25vw);
    font-weight: 500;
`;

export const StyledP = styled.p`
    font-size: calc(4px + 1vw);
    margin: 0;
`;

export const StyledA = styled.a`
    text-decoration: none;
    margin: 0;
    font-size: calc(4px + 1vw);
    color: #00acfb;
`;

export const StyledUl = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const StyledLi = styled.li`
    font-size: calc(4px + 1vw);
`;

export const StyledImg = styled.img`
    width: 100%;
    margin: 0 3% 3% 0;
`;