import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import DrawSvg from "../DrawSvg";
import BankAnimation from "../BankAnimation";
import dashboard from "../../assets/PS_Dashboard.png";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const BankAnimationContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1600px;

   @media (max-width: 768px) { // you can adjust the breakpoint as needed
    display: none;
`;

const ReconcileAnimationContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -200px;

   @media (max-width: 768px) { // you can adjust the breakpoint as needed
    display: none;
`;

const DashboardAnimationContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1600px;
  margin-right: -100px;

  img {
    max-width: 450px;  // This will ensure that the image is not larger than its container
    height: auto;  // This will maintain the image's aspect ratio
  }

   @media (max-width: 768px) { // you can adjust the breakpoint as needed
    display: none;
`;

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
  height: 300vh;
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
const SvgContainerBank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -50px;
  
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const AbsoluteSvgContainer = styled(SvgContainer)`
  position: absolute;
  left: 0;
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
const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  font-weight: 400;
  margin: 0.5rem 0;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;



const RoadMapItem = ({ title, subtext, addToRef, hasSvgAnimation }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

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
        <BankAnimationContainer>
          <BankAnimation />
        </BankAnimationContainer>
        <ReconcileAnimationContainer>
          <BankAnimation />
        </ReconcileAnimationContainer>
        <DashboardAnimationContainer>
          <img src={dashboard} alt="dashboard" />
        </DashboardAnimationContainer>
        <Items>
          <Item>&nbsp;</Item>
            
            <RoadMapItem
              addToRef={addToRefs}
              title="Brings together all of your bank accounts"
              subtext=""
            />
         
          <RoadMapItem
            addToRef={addToRefs}
            title="Label and categorise transactions"
            subtext=""
          />
         
          <RoadMapItem
            addToRef={addToRefs}
            title="3-way reconciliation across your banks, payments processors & accounting systems."
            subtext="Smart Transaction matching: Many to one & many to many matching through AI."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Granular cashflow visibility from AI powered categorisation of your transactions"
            
            subtext=""
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
