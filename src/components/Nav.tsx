import { Link } from "react-router"
import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    width: 30%;
    background-color: #101010;
    padding: 1% 0;

    @media screen and (max-width: 750px) {
        width: 100%;
    } 
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 6%;
    width: 100%;
    margin: 0;
    gap: 2vw;

    @media screen and (max-width: 750px) {
        flex-direction: row;
        padding: 1%;
        width: 100%;
        gap: 1%;
    }
`;

const StyledLi = styled.li`
    list-style-type: none;

    @media screen and (max-width: 750px) {
        display: flex;
        width: 100%;
    }
`;

const StyledLink = styled(Link)`
    display: flex;
    font-size: calc(4px + 1.5vw);
    background-color: #202020;
    width: 90%;
    padding: 5%;
    border-radius: 1vw;
    color: #f0f0f0;
    text-decoration: none;

    @media screen and (max-width: 750px) {
        justify-content: center;
        font-size: calc(4px + 1vw);
        width: 100%;
    }
`;


export default function Nav() {

    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to={`/`}>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/education`}>Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/experience`}>Experience</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/projects`}>Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/contact`}>Contact</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/skills`}>Skills</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    )

}