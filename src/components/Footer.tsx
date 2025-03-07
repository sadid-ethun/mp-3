import { Link } from 'react-router';
import styled from 'styled-components';
import { StyledP } from '../StyledComponents';

const StyledFooter = styled.footer`
    background-color: #2b3c5d;
    padding: 1%;
`;

export default function Footer() {

    return (
        <StyledFooter>
            <StyledP>All Rights Reserved by Sadid Ethun <Link to={``}>Credits</Link> &copy;</StyledP>
        </StyledFooter>
    );

}