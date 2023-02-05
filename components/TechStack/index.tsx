import React from "react";
import styled from "styled-components";
import HtmlIcon from "../../icons/HTML";
import CssIcon from "../../icons/CSS";
import JsIcon from "../../icons/JS";
import ReactIcon from "../../icons/React";
import NextIcon from "../../icons/Next";
import BootStrapIcon from "../../icons/Bootstrap";
import TailwindIcon from "../../icons/Tailwind";
import SassIcon from "../../icons/Sass";
import GitIcon from "../../icons/Git";
import GithubIcon from "../../icons/Github";
import NodeIcon from "../../icons/Node";
import TypescriptIcon from "../../icons/Typescript";
const Fade = require("react-reveal/Fade");

const TechStack = () => {
  return (
    <Container>
      <StyledSectionHeader>
        <StyledHeadline>Our Tech Stack</StyledHeadline>
        <StyledBodycopy>
          Technologies We’ve been working with recently
        </StyledBodycopy>
      </StyledSectionHeader>
      <Fade random>
        <StyledIconsContainer>
          <StyledIcon>
            <HtmlIcon />
          </StyledIcon>
          <StyledIcon>
            <CssIcon />
          </StyledIcon>
          <StyledIcon>
            <JsIcon />
          </StyledIcon>
          <StyledIcon>
            <TypescriptIcon />
          </StyledIcon>
          <StyledIcon>
            <ReactIcon />
          </StyledIcon>
          <StyledIcon>
            <NextIcon />
          </StyledIcon>
          <StyledIcon>
            <BootStrapIcon />
          </StyledIcon>
          <StyledIcon>
            <TailwindIcon />
          </StyledIcon>
          <StyledIcon>
            <SassIcon />
          </StyledIcon>
          <StyledIcon>
            <GitIcon />
          </StyledIcon>
          <StyledIcon>
            <GithubIcon />
          </StyledIcon>
          <StyledIcon>
            <NodeIcon />
          </StyledIcon>
        </StyledIconsContainer>
      </Fade>
    </Container>
  );
};

export default TechStack;

const Container = styled.section`
  max-width: 1400px;
  margin: 100px auto;
`;

// const StyledLine = styled.hr`
//   opacity: 0.5;
//   width: 100%;
//   margin-top: 100px;
// `;

const StyledSectionHeader = styled.div`
  text-align: center;
`;

const StyledHeadline = styled.h1`
  font-weight: 700;
  font-size: 35px;
  line-height: 26px;
  color: #cccccc;
`;

const StyledBodycopy = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #a7a7a7;
`;

const StyledIconsContainer = styled.div`
  margin-top: 140px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 70px;
`;

const StyledIcon = styled.div`
  flex-basis: 2;
`;
