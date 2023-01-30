import React from "react";
import styled from "styled-components";
import ProjectCard from "../ProjectCard";
import Link from "next/link";

const Projects = () => {
  const [active, setActive] = React.useState("web");

  const handleToggle = (toggle: string) => {
    setActive(toggle);
  };

  return (
    <Container>
      <StyledSectionHeader>
        <StyledHeadline>Our Portfolio Projects</StyledHeadline>
        <StyledBodycopy>Things that we have built so far</StyledBodycopy>
      </StyledSectionHeader>
      <StyledToggleContainer>
        <StyledToggleItem
          active={active.includes("web")}
          onClick={() => {
            handleToggle("web");
          }}
        >
          Web
        </StyledToggleItem>
        <StyledToggleItem
          active={active.includes("mobile")}
          onClick={() => {
            handleToggle("mobile");
          }}
        >
          Mobile
        </StyledToggleItem>
      </StyledToggleContainer>
      <StyledCardsContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </StyledCardsContainer>
      <StyledButton>
        <Link href="/contact" style={LinkStyles}>
          See All Projects
        </Link>
      </StyledButton>
    </Container>
  );
};

export default Projects;

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

const StyledButton = styled.div`
  width: 150px;
  height: 25px;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  font-weight: 600;
  font-size: 18px;
  background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
  margin-top: 50px;
`;

const StyledToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const StyledToggleItem = styled("div")<{ active: boolean }>`
  border: 1px solid #cccccc;
  background: ${({ active }) =>
    active ? "linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%)" : "#000"};
  padding: 10px 20px;
  width: 100px;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
`;

const StyledCardsContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
`;
