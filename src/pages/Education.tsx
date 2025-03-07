import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ContentDiv, ResumeItemDiv, StyledMain, StyledH2, StyledH3, StyledP, StyledUl, StyledLi } from "../StyledComponents";
import styled from "styled-components";
import { useEffect } from "react";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3%;
`;

export default function Education() {

    useEffect(() => {
        document.title = "Education | Resume";
    }, []);

    return (
        <>
            <Header />
            <ContentDiv>
                <Nav />
                <StyledMain>
                    <StyledH2>Education</StyledH2>
                    <ResumeItemDiv>
                        <StyledH3>Boston University | Boston, MA</StyledH3>
                        <StyledP><em>BA/MS in Computer Science</em></StyledP>
                        <StyledP>Class of 2026</StyledP>
                        <StyledDiv>
                            <StyledP><strong>Coursework:</strong></StyledP>
                            <StyledUl>
                                <StyledLi>Data Structures and Algorithms</StyledLi>
                                <StyledLi>Linear Algebra</StyledLi>
                                <StyledLi>Discrete Mathematics</StyledLi>
                                <StyledLi>Computer Systems</StyledLi>
                                <StyledLi>Probability</StyledLi>
                                <StyledLi>Software Engineering</StyledLi>
                                <StyledLi>Machine Learning</StyledLi>
                            </StyledUl>
                        </StyledDiv>
                    </ResumeItemDiv>
                    <ResumeItemDiv>
                        <StyledH3>Stuyvesant High School | New York, NY</StyledH3>
                        <StyledP><em>High School Diploma</em></StyledP>
                        <StyledP>Class of 2022</StyledP>
                    </ResumeItemDiv>
                </StyledMain>
            </ContentDiv>
            <Footer />
        </>
    )
}