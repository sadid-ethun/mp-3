import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ContentDiv, ResumeItemDiv, StyledMain, StyledH2, DescriptionP, StyledH3, StyledP } from "../StyledComponents";
import Calculator from "../components/Calculator";
import { useEffect } from "react";

export default function Projects() {

    useEffect(() => {
        document.title = "Projects | Resume";
    }, []);

    return (
        <>
            <Header />
            <ContentDiv>
                <Nav />
                <StyledMain>
                    <StyledH2>Projects</StyledH2>
                    <ResumeItemDiv>
                        <StyledH3>Pantry</StyledH3>
                        <StyledP><em>September 2024 – Present</em></StyledP>
                        <DescriptionP>
                            Created a full-stack web application using Apache, Python, and SQL, integrating
                            the Yelp API to provide personalized restaurant recommendations and food recipes based on
                            user-selected cuisine filters.
                            Implemented features enabling users to create posts, like and comment on others' posts, and bookmark
                            restaurants and recipes for personalized user engagement.
                        </DescriptionP>
                    </ResumeItemDiv>
                    <ResumeItemDiv>
                        <StyledH3>Call Assist</StyledH3>
                        <StyledP><em>January 2023 – June 2024</em></StyledP>
                        <DescriptionP>
                            Developed a mobile app using React Native and MongoDB to automate phone calls and bypass virtual
                            receptionists, leveraging the Twilio API for speech-to-text transcription and automated response
                            generation.
                            Collaborated weekly with a Google employee to troubleshoot and resolve development challenges,
                            enhancing app functionality and user experience through expert guidance.
                        </DescriptionP>
                    </ResumeItemDiv>
                    <Calculator />
                </StyledMain>
            </ContentDiv>
            <Footer />
        </>
    )
}