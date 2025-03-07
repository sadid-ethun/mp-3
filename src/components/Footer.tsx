import { Link } from 'react-router';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #2b3c5d;
    padding: 1%;
`;

export default function Footer() {

    return (
        <StyledFooter>
            <p>All Rights Reserved by Sadid Ethun <Link to={``}>Credits</Link> &copy;</p>
        </StyledFooter>
    );

}