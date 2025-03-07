import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ContentDiv, ResumeItemDiv, StyledMain, StyledH2, DescriptionP, StyledH3, StyledP } from "../StyledComponents";
import { useEffect } from "react";

export default function Experience() {

    useEffect(() => {
        document.title = "Experience | Resume";
    }, []);

    return (
        <>
            <Header />
            <ContentDiv>
                <Nav />
                <StyledMain>
                    <StyledH2>Experience</StyledH2>
                    <ResumeItemDiv>
                        <StyledH3>Hack4Impact | Boston, MA</StyledH3>
                        <StyledP><em>Software Engineer</em> | <em>September 2024 – Present</em></StyledP>
                        <DescriptionP>Redesigned and rebuilt the Boston University CGSA website with React
                            to enhance user experience and
                            accessibility.
                            Implemented a secure login system using Google OAuth and blog posting feature to allow admins to
                            manage blog and newsletter content efficiently, ensuring seamless content creation and editing
                            workflows.
                            Integrated a newsletter signup form to increase student engagement and simplify process for
                            subscribing to updates.
                            Created a centralized management platform using React and Node.js to allow board members
                            to seamlessly manage events, monitor finances, and track headcounts throughout the year.
                        </DescriptionP>
                    </ResumeItemDiv>
                    <ResumeItemDiv>
                        <StyledH3>Niura | New York, MA</StyledH3>
                        <StyledP><em>Software Engineer</em> | <em>May 2024 – September 2024</em></StyledP>
                        <DescriptionP>Designed and developed a mobile app with React Native and Expo,
                            enabling interaction with
                            EEG-measuring earbuds that provide users with' stress and focus data to facilitate productivity.
                            Implemented authentication and data storage using AWS Amplify, Cognito, and DynamoDB, ensuring
                            secure and efficient data management for user sessions, EEG data, and task management system.
                            Integrated Bluetooth Low Energy to read real-time EEG data being updated every second, providing
                            users with live reports of stress and focus levels, along with historical data visualization through
                            interactive graphs.
                            Contributed to generating over $60,000 in pre-sales by showcasing the app in product demos and
                            advertisements.
                        </DescriptionP>
                    </ResumeItemDiv>
                </StyledMain>
            </ContentDiv>
            <Footer />
        </>
    )
}