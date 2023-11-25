import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as LogoSvg } from '../assets/logo/PointSwitch_logo.svg'; // Path to your SVG file


const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;

&:hover{
    transform: scale(1.1);
}

@media (max-width: 64em){
font-size: ${props => props.theme.fontxxl};

}
`

const Logo = () => {
  return (
    <div>
      <LogoSvg style={{ width: '50px', height: '50px', fill: 'red' }} /> {/* Adjust the size and color as needed */}
    </div>
  );
};

export default Logo