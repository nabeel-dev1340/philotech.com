import Link from "next/link";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import Fade from "react-reveal/Fade";

const Hero = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <Container>
      <LeftContainer>
        <Fade top spy={false}>
          <StyledHeadline>
            <span>Develop Your&nbsp;</span>
            <GradientHeadline>&lt;Innovation&gt;</GradientHeadline>
          </StyledHeadline>
        </Fade>
        <Fade top spy={false}>
          <StyledBodycopy>
            &quot;Our team of experts is dedicated to delivering cutting-edge
            software solutions that drive efficiency and productivity for
            businesses of all sizes. With a focus on innovation and
            user-centered design.&quot;
          </StyledBodycopy>
        </Fade>
        <Fade top spy={false}>
          <StyledButton>
            <Link href="/contact" style={LinkStyles}>
              Let&apos;s Get Started
            </Link>
          </StyledButton>
        </Fade>
      </LeftContainer>
      <Fade top spy={false}>
        <RightContainer>
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_obkemuop.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </RightContainer>
      </Fade>
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
  justify-content: space-around;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLine = styled.hr`
  opacity: 0.5;
  width: 100%;
  margin-top: 50px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    align-items: center;
    gap: 20px;
  }
`;

const RightContainer = styled.div`
  width: 600px;
  height: 600px;
  @media only screen and (max-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;

const StyledHeadline = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 65px;
  color: #cccccc;
  text-align: left;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1024px) {
    font-size: 48px;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    font-size: 48px;
  }
`;

const GradientHeadline = styled.span`
  background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledBodycopy = styled.p`
  width: 600px;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #a7a7a7;
  text-align: left;
  line-height: 2rem;
  margin: 0;
  @media only screen and (max-width: 768px) {
    width: 350px;
    text-align: center;
  }
`;

const StyledButton = styled.div`
  width: 150px;
  height: 25px;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  font-weight: 600;
  font-size: 16px;
  background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
`;
