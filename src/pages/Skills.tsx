import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ContentDiv, ResumeItemDiv, StyledMain, StyledH2, StyledImg, StyledH3, StyledP } from "../StyledComponents";
import { useEffect } from "react";
import programmingImg from "../assets/programmng-languages.jpg";

export default function Skills() {

    useEffect(() => {
        document.title = "Skills | Resume";
    }, []);

    return (
        <>
            <Header />
            <ContentDiv>
                <Nav />
                <StyledMain>
                    <StyledH2>Skills</StyledH2>
                    <StyledImg src={programmingImg} alt="Programming Languages" />
                    <ResumeItemDiv>
                        <StyledH3>Programming Languages</StyledH3>
                        <StyledP>Python | Java | JavaScript | C | HTML | CSS | SQL</StyledP>
                    </ResumeItemDiv>
                    <ResumeItemDiv>
                        <StyledH3>Frameworks</StyledH3>
                        <StyledP>React | Next.js | React Native | Node.js | Flask | Apache</StyledP>
                    </ResumeItemDiv>
                    <ResumeItemDiv>
                        <StyledH3>Developer Tools</StyledH3>
                        <StyledP>Git | AWS Amplify | AWS Cognito | AWS DynamoDB | Firebase | MongoDB</StyledP>
                    </ResumeItemDiv>
                </StyledMain>
            </ContentDiv>
            <Footer />
        </>
    )
}