import React from "react";
import styled from "styled-components";
import StarIcon from "../../icons/Star";
const Fade=require('react-reveal/Fade');

const TestimonialCard = () => {
  return (
    <Container>
      <Fade right>
        <StyledReview>
          <q>
            <i>
              I am extremely satisfied with the final product.The website looks
              great and is running smoothly.
            </i>
          </q>
        </StyledReview>
      </Fade>
      <Fade right>
        <ClientName>-- Devan Lewis --</ClientName>
      </Fade>
     <Fade top>
         <StarsContainer>
           <StarIcon />
           <StarIcon />
           <StarIcon />
           <StarIcon />
           <StarIcon />
         </StarsContainer>
     </Fade>
    </Container>
  );
};

export default TestimonialCard;

const Container = styled.section`
  max-width: 1400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const StyledReview = styled.div`
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  @media only screen and (max-width: 768px) {
    font-size: 25px;
}
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ClientName = styled.h2``;
