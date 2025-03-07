import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ContentDiv, ResumeItemDiv, StyledMain, StyledH2 } from "../StyledComponents";
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
                        <h3>Boston University | Boston, MA</h3>
                        <p></p>
                        <p><em>BA/MS in Computer Science</em></p>
                        <p>Class of 2026</p>
                        <StyledDiv>
                            <p><strong>Coursework:</strong></p>
                            <ul>
                                <li>Data Structures and Algorithms</li>
                                <li>Linear Algebra</li>
                                <li>Discrete Mathematics</li>
                                <li>Computer Systems</li>
                                <li>Probability</li>
                                <li>Software Engineering</li>
                                <li>Machine Learning</li>
                            </ul>
                        </StyledDiv>
                    </ResumeItemDiv>
                    <ResumeItemDiv>
                        <h3>Stuyvesant High School | New York, NY</h3>
                        <p><em>High School Diploma</em></p>
                        <p>Class of 2022</p>
                    </ResumeItemDiv>
                </StyledMain>
            </ContentDiv>
            <Footer />
        </>
    )
}