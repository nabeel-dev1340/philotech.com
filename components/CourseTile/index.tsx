import Link from "next/link";
import React from "react";
import styled from "styled-components";

type CourseTileProps = {
  name: string;
  description: string;
  price: String;
};

const CourseTile = ({ name, description, price }: CourseTileProps) => {
  return (
    <Container>
      <CourseDetails>
        <CourseHeading>{name}</CourseHeading>
        <CourseDescription>{description}</CourseDescription>
        <CoursePrice>{price} PKR/-</CoursePrice>
      </CourseDetails>
      <Enroller>
        <EnrollerContainer>
          <Link href={"/course-reg"} style={LinkStyles}>
            Enroll Now
          </Link>
        </EnrollerContainer>
      </Enroller>
    </Container>
  );
};

export default CourseTile;

const LinkStyles = {
  textDecoration: "none",
  color: "white",
};

const Container = styled.div`
  display: flex;
  background-color: #fff;
  color: black;
  border-radius: 10px;
  width: 80%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px auto;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CourseDetails = styled.div`
  width: 70%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const CourseHeading = styled.h1``;

const CourseDescription = styled.p`
  width: 70%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Enroller = styled.div`
  width: 20%;
  align-self: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const EnrollerContainer = styled.div`
  padding: 20px 30px;
  border-radius: 20px;
  font-weight: 600;
  text-align: center;
  font-size: 18px;
  background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
`;

const CoursePrice = styled.p`
    font-weight: 600;
    font-size: 18px;
`;
