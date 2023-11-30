import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import DrawSvg from "../DrawSvg";
import BankAnimation from "../BankAnimation";
import dashboard from "../../assets/PS_Dashboard.png";
import reconc from "../../assets/reconc.png";


const Section = styled.section`
  min-height: 150vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: inline-block;
  overflow: hidden;

`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Container = styled.div`
  width: 70%;
  height: 400vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;


const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;


const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: lightblue; */

  @media (max-width: 48em) {
    width: 90%;
    margin-left: 20%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: end;
    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;

      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
      text-align: left;
        p {
          border-radius: 0 40px 0 40px;

        }
      }
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: start;
    @media (max-width: 48em) {
      justify-content: center;
    }
    div {
      border-radius: 0 50px 0 50px;
      text-align: left;

      
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;
const Item = styled.li`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row-reverse;  // Changed from row to row-reverse
  margin: 4rem 0; // add vertical margin

  
  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};
  
  @media (max-width: 48em) {
    width: 70%;

  }
`;

const Box = styled.p`
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;

const BoxPlain = styled.p`
  height: fit-content;
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  margin-right: ${(props) => (props.hasImage ? '-100px' : '0')};  // Adjust the margin if it contains an image

  @media (max-width: 768px) {
    width: 80%; // or any percentage or fixed size you want
    height: auto;
  }
`;

const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;

const Image = ({ src }) => (
  <img src={src} alt="" style={{ width: '450px' }} />
);

const RoadMapItem = ({ title, addToRef, animation }) => (
  <Item ref={addToRef}>
    <ItemContainer>
      <Box>
        <SubTitle>{title}</SubTitle>
        {animation && animation}
      </Box>
    </ItemContainer>
  </Item>
);

const RoadMapItemPlain = ({ title, addToRef, animation }) => (
  <Item ref={addToRef}>
    <BoxPlain hasImage={!!animation}>
      <SubTitle>{title}</SubTitle>
      {animation && animation}
    </BoxPlain>
  </Item>
);

const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el,
        {
          y: "0",
        },
        {
          y: "-30%",

          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
            // markers:true,
          },
        }
      );
    });

    return () => {
      if (t1) t1.kill();
    };
  }, []);


  return (
    <Section id="roadmap">
      <Title>Our solution</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        {/* <BankAnimationContainer>
          <BankAnimation />
        </BankAnimationContainer>
        <ReconcileAnimationContainer>
          <BankAnimation />
        </ReconcileAnimationContainer>
        <DashboardAnimationContainer>
          <img src={dashboard} alt="dashboard" />
        </DashboardAnimationContainer> */}
        <Items>
          <Item>&nbsp;</Item>
            
            <RoadMapItem
              addToRef={addToRefs}
              title="Brings together all of your bank accounts"
              subtext=""
            />

          <RoadMapItemPlain
            addToRef={addToRefs}
            animation={<BankAnimation />}  // Pass the SVG animation
          />
         
        
         
          <RoadMapItem
            addToRef={addToRefs}
            title="3-way reconciliation across your banks, payments processors & accounting systems."
            subtext="Smart Transaction matching: Many to one & many to many matching through AI."
          />

          <RoadMapItemPlain
            addToRef={addToRefs}
            animation={<Image src={reconc} />}  // Pass the image
          />
          
          <RoadMapItem
            addToRef={addToRefs}
            title="Granular cashflow visibility from AI powered categorisation of your transactions"
            
            subtext=""
          />


          <RoadMapItemPlain
            addToRef={addToRefs}
            animation={<Image src={dashboard} />}  // Pass the image
          />

          <RoadMapItem
            addToRef={addToRefs}
            title="Stay in control over inflows and outflows with automated management of AP & AR "
            subtext=""
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;
