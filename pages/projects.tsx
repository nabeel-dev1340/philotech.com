import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import Toggle from "../components/Toggle";
import { ProjectTypes, ProjectsData } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import Head from "next/head";

const Projects = () => {
  const [active, setActive] = React.useState("All");

  const selectors = ProjectTypes.map((type) => {
    return (
      <Toggle
        key={type}
        text={type}
        active={active.includes(type)}
        onClick={() => {
          handleToggle(type);
        }}
      />
    );
  });

  const renderCards = () => {
    if (ProjectsData) {
      return ProjectsData.filter(
        (project: any) => project.type.includes(active) || active === "All"
      ).map((project: any) => (
        <ProjectCard key={project.id} {...project} viewType="modal" />
      ));
    }
  };

  const handleToggle = (toggle: string) => {
    setActive(toggle);
  };

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Container>
        <Navigation />
        <PageContainer>
          <StyledSectionHeader>
            <StyledHeadline>Explore Our Creative Journey</StyledHeadline>
            <StyledBodycopy>
              Check out some of our latest projects
            </StyledBodycopy>
          </StyledSectionHeader>
          <SelectorsContainer>{selectors}</SelectorsContainer>
          <StyledCardsContainer>{renderCards()}</StyledCardsContainer>
        </PageContainer>
        <Footer />
      </Container>
    </>
  );
};

export default Projects;

const Container = styled.div``;

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 80px auto;
`;

const SelectorsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 50px 0;
  flex-wrap: wrap;
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

const StyledSectionHeader = styled.div`
  text-align: center;
`;

const StyledCardsContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
`;
