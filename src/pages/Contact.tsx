import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ContentDiv, ResumeItemDiv, StyledMain, StyledH2, StyledH3, StyledP } from "../StyledComponents";
import styled from "styled-components";
import { useEffect } from "react";

const StyledTable = styled.table`
    width: 100%;
    margin-top: 5%;
    border-collapse: collapse;
`;

const StyledTh = styled.th`
    background-color: #2b3c5d;
    text-align: left;
    font-size: calc(4px + 1vw);
    border: #101010 1px solid;
    padding: 1%;
`;

const StyledTd = styled.td`
    background-color: #303030;
    text-align: left;
    font-size: calc(4px + 1vw);
    border: #101010 1px solid;
    padding: 1%;
`;

export const StyledTr = styled.tr`
    text-align: left;
    font-size: calc(4px + 1vw);
    border: #101010 1px solid;
    padding: 1%;
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
                        <StyledH3>Email</StyledH3>
                        <StyledP>sethun@bu.edu</StyledP>
                    </ResumeItemDiv>
                    <ResumeItemDiv>
                        <StyledH3>Phone</StyledH3>
                        <StyledP>(123) 456-7890</StyledP>
                    </ResumeItemDiv>
                    <ResumeItemDiv>
                        <StyledH3>Address</StyledH3>
                        <p>1234 5th Ave, New York, NY 10001</p>
                    </ResumeItemDiv>
                    <div>
                        <StyledTable>
                            <StyledTr>
                                <StyledTh>Name</StyledTh>
                                <StyledTh>Email</StyledTh>
                                <StyledTh>Phone</StyledTh>
                            </StyledTr>
                            <StyledTr>
                                <StyledTd>Mother</StyledTd>
                                <StyledTd>mother@gmail.com</StyledTd>
                                <StyledTd>(123) 456-7891</StyledTd>
                            </StyledTr>
                            <StyledTr>
                                <StyledTd>Father</StyledTd>
                                <StyledTd>father@gmail.com</StyledTd>
                                <StyledTd>(123) 456-7892</StyledTd>
                            </StyledTr>
                            <StyledTr>
                                <StyledTd>Sister</StyledTd>
                                <StyledTd>sister@gmail.com</StyledTd>
                                <StyledTd>(123) 456-7893</StyledTd>
                            </StyledTr>
                        </StyledTable>
                    </div>
                </StyledMain>
            </ContentDiv>
            <Footer />
        </>
    )
}