import React from "react";
import styled from "styled-components";
import Image from "next/image";
import TechCapsule from "../TechCapsule";

interface ProjectCardProps {
  name?: string;
  description?: string;
  link?: string;
}

const ProjectCard = ({
  name = "Gym Tracker",
  link = "#",
}: ProjectCardProps) => {
  return (
    <ProjectCardContainer>
      <StyledImage>
        <Image
          src="https://www.appstudio.ca/blog/wp-content/uploads/2020/09/Modern-Software-Development.jpg"
          width={300}
          height={250}
          alt={""}
        />
      </StyledImage>
      <ProjectCardHeading>{name}</ProjectCardHeading>
      <CapsulesContainer>
        <TechCapsule name="Flutter" />
        <TechCapsule name="Firebase" />
        <TechCapsule name="Redux" />
      </CapsulesContainer>
      <ProjectCardLink href={link}>View Project</ProjectCardLink>
    </ProjectCardContainer>
  );
};

export default ProjectCard;

const ProjectCardContainer = styled.div`
  width: 300px;
  height: 500px;
  background: #fff;
  color: #000;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CapsulesContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const StyledImage = styled.div`
  border-radius: 15px;
  overflow: hidden;
`;

const ProjectCardHeading = styled.h2``;

const ProjectCardLink = styled.a`
  margin: 20px 0;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 10px;
  padding: 10px 20px;
  background: #000;
  text-align: center;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
