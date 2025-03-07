import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ContentDiv, ResumeItemDiv, StyledMain, StyledH2 } from "../StyledComponents";
import styled from "styled-components";
import { useEffect } from "react";

const StyledTable = styled.table`
    width: 100%;
    margin-top: 5%;
    border-collapse: collapse;
`;

const StyledTh = styled.th`
    background-color: #2b3c5d;
`;

const StyledTd = styled.td`
    background-color: #303030;
`;

export default function Contact() {

    useEffect(() => {
        document.title = "Contact | Resume";
    }, []);

    return (
        <>
            <Header />
            <ContentDiv>
                <Nav />
                <StyledMain>
                    <StyledH2>Contact</StyledH2>
                    <ResumeItemDiv>
                        <h3>Email</h3>
                        <p>sethun@bu.edu</p>
                    </ResumeItemDiv>
                    <ResumeItemDiv>
                        <h3>Phone</h3>
                        <p>(123) 456-7890</p>
                    </ResumeItemDiv>
                    <ResumeItemDiv>
                        <h3>Address</h3>
                        <p>1234 5th Ave, New York, NY 10001</p>
                    </ResumeItemDiv>
                    <div>
                        <StyledTable>
                            <tr>
                                <StyledTh>Name</StyledTh>
                                <StyledTh>Email</StyledTh>
                                <StyledTh>Phone</StyledTh>
                            </tr>
                            <tr>
                                <StyledTd>Mother</StyledTd>
                                <StyledTd>mother@gmail.com</StyledTd>
                                <StyledTd>(123) 456-7891</StyledTd>
                            </tr>
                            <tr>
                                <StyledTd>Father</StyledTd>
                                <StyledTd>father@gmail.com</StyledTd>
                                <StyledTd>(123) 456-7892</StyledTd>
                            </tr>
                            <tr>
                                <StyledTd>Sister</StyledTd>
                                <StyledTd>sister@gmail.com</StyledTd>
                                <StyledTd>(123) 456-7893</StyledTd>
                            </tr>
                        </StyledTable>
                    </div>
                </StyledMain>
            </ContentDiv>
            <Footer />
        </>
    )
}