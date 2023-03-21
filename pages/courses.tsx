import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { courseTypes, coursesList } from "../data/courses.js";
import Toggle from "../components/Toggle";
import CourseTile from "../components/CourseTile";

const Courses = () => {
  const [active, setActive] = React.useState("All");

  const selectors = courseTypes.map((type) => {
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

  const renderTiles = () => {
    return coursesList
      .filter((course: any) => course.type.includes(active) || active === "All")
      .map((course: any) => <CourseTile key={course.id} {...course} />);
  };

  const handleToggle = (toggle: string) => {
    setActive(toggle);
  };

  return (
    <>
      <Head>
        <title>Courses</title>
      </Head>
      <Container>
        <Navigation />
        <PageContainer>
          <StyledSectionHeader>
            <StyledHeadline>Browse Our Courses</StyledHeadline>
            <StyledBodycopy>
              Register for our premium courses and level up your skills
            </StyledBodycopy>
          </StyledSectionHeader>
          <SelectorsContainer>{selectors}</SelectorsContainer>
          <CoursesContainer>{renderTiles()}</CoursesContainer>
        </PageContainer>
        <Footer />
      </Container>
    </>
  );
};

export default Courses;

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

const CoursesContainer = styled.div``;
