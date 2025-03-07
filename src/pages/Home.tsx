import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styled from "styled-components";
import { ContentDiv, StyledMain, StyledH2, StyledP } from "../StyledComponents";
import { useEffect } from "react";
import headshot from "../assets/headshot.jpg";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3%;

    @media screen and (max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledImg = styled.img`
    width: 50%;
    margin: 3%;
`;

export default function Home() {

    useEffect(() => {
        document.title = "Home | Resume";
    }, []);

    return (
        <>
            <Header />
            <ContentDiv>
                <Nav />
                <StyledMain>
                    <StyledH2>Home</StyledH2>
                    <StyledDiv>
                        <StyledImg src={headshot} alt="Sadid Ethun" />
                        <StyledP>
                            Hi, my name is Sadid Ethun. I am a currently a junior studying Computer Science at Boston
                            Univeristy.
                            I live in New York City and I am an aspiring software engineer.
                            I am passionate about technology, especially in the field of machine learning and artificial
                            intelligence.
                            I am also a big soccer fan, my favorite team being FC Barcelona, and I enjoy watching Formula 1.
                        </StyledP>
                    </StyledDiv>
                    <StyledP>
                        Welcome to my online portfolio.
                        Here you can find information about my education, experience, skills, projects, and contact information.
                        Please hire me.
                    </StyledP>
                </StyledMain>
            </ContentDiv>
            <Footer />
        </>
    )
}