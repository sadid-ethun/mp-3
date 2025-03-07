import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ContentDiv, ResumeItemDiv, StyledMain, StyledH2 } from "../StyledComponents";
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
                    <img src={programmingImg} alt="Programming Languages" />
                    <ResumeItemDiv>
                        <h3>Programming Languages</h3>
                        <p>Python | Java | JavaScript | C | HTML | CSS | SQL</p>
                    </ResumeItemDiv>
                    <ResumeItemDiv>
                        <h3>Frameworks</h3>
                        <p>React | Next.js | React Native | Node.js | Flask | Apache</p>
                    </ResumeItemDiv>
                    <ResumeItemDiv>
                        <h3>Developer Tools</h3>
                        <p>Git | AWS Amplify | AWS Cognito | AWS DynamoDB | Firebase | MongoDB</p>
                    </ResumeItemDiv>
                </StyledMain>
            </ContentDiv>
            <Footer />
        </>
    )
}