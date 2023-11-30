import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from './Button';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

console.log(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);
const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);


const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1{
      color: blue;
  }
  .text-2{
      color: orange;
  }
  .text-3{
      color: red;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};

  }
  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  @media (max-width: 40em){
    width: 90%;
  }
  @media (min-width: 768px) {
    margin-left: -100px; /* adjust as needed */
  }

  
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight:600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (min-width: 768px) {
    margin-left: -100px; /* adjust as needed */
  }


  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};

  }

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  
`

const ButtonContainer = styled.div`
 width: 80%;
  align-self: flex-start;

 @media (min-width: 768px) {
    margin-left: -100px; /* adjust as needed */
  }

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;

    button{
      margin: 0 auto;
    }
  }

`

const EmailInput = styled.input`
  width: 100%;
  padding: 0.5em;
  margin: 1em 0;
  font-size: 1em;
  border-radius: 4px;
  border: 1px solid #ddd;
  @media (min-width: 768px) {
    margin-left: -5px; 
  }

`;




const TypeWriterText = () => {

  const [email, setEmail] = useState('');


  const submitEmail = async () => {
    const { data, error } = await supabase
      .from('emails')
      .insert([
        {
          created_at: new Date(), // current date and time
          email: email
        },
      ]);
    console.log("Data:", data);
    console.log("Error:", error);
    if (error) {
      console.error('Error submitting email: ', error);
    } else {
      setEmail('');
      alert('Email submitted successfully!');
      setEmail('');
    }
  };


  return (
    <>
      <Title fontSize="1px">
      Live view into your finances
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter          
            .typeString(`<span class="text-2">Consolidate open accounts</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-3"> Reconcile in real time</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-1">Forecast and monitor cash flow by entity</span>`)
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
    </Title>
    <SubTitle>Everything in real time</SubTitle>
    <ButtonContainer>

        <EmailInput
          type="email"
          placeholder="Enter your email"
          value={email} // add this line
          onChange={e => setEmail(e.target.value)}
        />
        <Button text="Join the waiting list" link="#about" onClick={() => submitEmail()} />
    </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
