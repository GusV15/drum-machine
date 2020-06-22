import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/js/all';

const HeaderStyled = styled.div`  
    .inner-logo {
        display: block;
        margin-top: -25px;
        font-style: italic;
        font-weight: bold;
        font-size: 1.2em;
        color: black;
        text-align: right;
    }
`

const Header = () => {
    return (
        <HeaderStyled>
            <div className="inner-logo">
                FCC <i className="fab fa-free-code-camp"></i>
            </div>
        </HeaderStyled>
    )
}

export default Header;
