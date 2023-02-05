import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import TestimonialCard from "../TestimonialCard";

const Testimonials = () => {
  return (
    <Container>
      <StyledSectionHeader>
        <StyledHeadline>What Our Clients Say</StyledHeadline>
        <StyledBodycopy>
          We have been working with some amazing clients
        </StyledBodycopy>
      </StyledSectionHeader>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Testimonials;

const Container = styled.section`
  max-width: 1400px;
  margin: 100px auto;
  .swiper-pagination-bullet {
    background: #ffcb45;
  }
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
