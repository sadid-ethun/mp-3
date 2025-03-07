import styled from "styled-components";

export const StyledMain = styled.main`
    width: 80%;
    min-height: 100vh;
    padding: 3%;
    background-color: #202020;

    @media screen and (max-width: 750px) {
        width: 94%;
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
`;