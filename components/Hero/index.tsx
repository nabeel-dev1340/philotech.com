import Link from "next/link";
import React from "react";
import styled, { keyframes } from "styled-components";

const Hero = () => {
  return (
    <Container>
      <StyledHeadline>
        <span>Develop Your&nbsp;</span>
        <GradientHeadline>&lt; Innovation &gt;</GradientHeadline>
      </StyledHeadline>
      <StyledBodycopy>
        &quot;Our team of experts is dedicated to delivering cutting-edge
        software solutions that drive efficiency and productivity for businesses
        of all sizes. With a focus on innovation and user-centered design, we
        empower our clients to achieve their goals and stay ahead of the
        competition.&quot;
      </StyledBodycopy>
      <StyledButton>
        <Link href="/contact" style={LinkStyles}>
          Let&apos;s Get Started
        </Link>
      </StyledButton>
      <StyledLine />
    </Container>
  );
};

export default Hero;

const LinkStyles = {
  textDecoration: "none",
  color: "white",
};

const Container = styled.div`
  max-width: 1400px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const hrAnimation = keyframes`
0% {
  transform: translateX(-50%);
}
50% {
  transform: translateX(50%);
}
100% {
  transform: translateX(-50%);
}`;

const StyledLine = styled.hr`
  opacity: 0.5;
  width: 100%;
  margin-top: 200px;
`;

const StyledHeadline = styled.h1`
  font-weight: 700;
  font-size: 70px;
  color: #cccccc;
  text-align: center;
  display: flex;
  @media only screen and (max-width: 1024px) {
    font-size: 48px;
    flex-direction: column;
  }
  @media only screen and (max-width: 768px) {
    font-size: 48px;
    flex-direction: column;
  }
`;

const GradientHeadline = styled.span`
  background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledBodycopy = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #a7a7a7;
  text-align: center;
  line-height: 2rem;
`;

const StyledButton = styled.div`
  width: 200px;
  height: 25px;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  font-weight: 600;
  font-size: 20px;
  background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
  margin-top: 20px;
`;
