import React from "react";
import styled from "styled-components";
import Image from "next/image";
import TechCapsule from "../TechCapsule";
const Fade = require("react-reveal/Fade");

interface ProjectCardProps {
  title?: string;
  url?: string | "#";
  techStack?: string[];
  images: string[];
  viewType: string;
}

const ProjectCard = ({
  title,
  url,
  techStack,
  images,
  viewType,
}: ProjectCardProps) => {
  const renderCapsules = () => {
    if (techStack) {
      return techStack.map((tech) => <TechCapsule key={tech} name={tech} />);
    }
  };

  const renderViewType = () => {
    if (viewType === "modal") {
      return (
        <ProjectCardLink href={url} target="_blank" rel="noopener noreferrer">
          View Details
        </ProjectCardLink>
      );
    } else if (viewType === "link") {
      return (
        <ProjectCardLink href={url} target="_blank" rel="noopener noreferrer">
          View Live
        </ProjectCardLink>
      );
    }
  };

  return (
    <Fade left>
      <ProjectCardContainer>
        <StyledImage>
          <Image
            src={`/images/${title?.split(" ")[0].toLowerCase()}/${images[0]}`}
            width={300}
            height={250}
            layout="fixed"
            alt={""}
          />
        </StyledImage>
        <ProjectCardHeading>{title}</ProjectCardHeading>
        <CapsulesContainer>{renderCapsules()}</CapsulesContainer>
        {renderViewType()}
      </ProjectCardContainer>
    </Fade>
  );
};

export default ProjectCard;

const ProjectCardContainer = styled.div`
  width: 300px;
  height: 600px;
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
  img {
    border-radius: 10px;
  }
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
