import React, { lazy, Suspense } from 'react'
import styled, { keyframes } from 'styled-components'
// import CoverVideo from '../CoverVideo'
// import TypeWriterText from '../TypeWriterText'
// import RoundTextBlack from '../../assets/Rounded-Text-Black.png';
import Loading from '../Loading';

import dashboard from '../../assets/dashboard.png';


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
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`



// Define a styled component for your image
const FloatingImage = styled.img`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.3s ease-out;
  width: 550px; 
  height: auto; 

  &:hover {
    transform: translateY(-10px);
  }
`;

const Home = () => {
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