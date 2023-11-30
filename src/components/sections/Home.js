import React, { lazy, Suspense } from 'react'
import styled, { keyframes } from 'styled-components'
// import CoverVideo from '../CoverVideo'
// import TypeWriterText from '../TypeWriterText'
// import RoundTextBlack from '../../assets/Rounded-Text-Black.png';
import Loading from '../Loading';

import dashboard from '../../assets/PS_Dashboard.png';
import { useEffect } from 'react';


const CoverVideo = lazy(() => import('../CoverVideo'));
const TypeWriterText = lazy(() => import('../TypeWriterText'));

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`   };
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};
`

const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;
/* background-color: lightblue; */

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 64em) {
  width: 85%;
}
@media (max-width: 48em) {
  flex-direction: column-reverse;
  width: 100%;
  &>*:first-child{
    width: 100%;
    margin-top: 2rem;
  }
}
`
const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 50%;
  }
`



// Define a styled component for your image
const FloatingImage = styled.img`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.3s ease-out;
  width: 100%; // here we make the image width relative to its container
  height: auto; 

  &:hover {
    transform: translateY(-10px);
  }

  @media (min-width: 1200px) {
    width: 800px; // force the image to be 950px wide on larger screens
  }
  
  @media (min-width: 768px) {
    width: 700px; // force the image to be 950px wide on larger screens
  }

  @media (max-width: 768px) {
    width: 90%; // reduce the size on medium screens
  }

  @media (max-width: 576px) {
    width: 100%; // use full width on small screens
  }
`;

const Home = () => {

  useEffect(() => {
    const logWindowSize = () => {
      console.log(`Width: ${window.innerWidth}px, Height: ${window.innerHeight}px`);
    };

    // Log the initial window size
    logWindowSize();

    // Log the window size every time it changes
    window.addEventListener('resize', logWindowSize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', logWindowSize);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount
  return (
    <Section id="home">
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <TypeWriterText /></Suspense>
        </Box>
        <Box>
          <Suspense fallback={<Loading />}>
            <FloatingImage src={dashboard} alt='Dashboard'/> {" "}</Suspense>

        </Box>
      </Container>
    </Section>
  )
}

export default Home