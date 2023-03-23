import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useForm, SubmitHandler } from "react-hook-form";
import { CourseFormInput } from "../types";

const CourseRegisterationForm = () => {
  const { register, handleSubmit } = useForm<CourseFormInput>();
  const onSubmit: SubmitHandler<CourseFormInput> = (data) => console.log(data);
  return (
    <>
      <Head>
        <title>Course Registeration</title>
      </Head>
      <Container>
        <Navigation />
        <PageContainer>
          <StyledSectionHeader>
            <StyledHeadline>Course Registeration</StyledHeadline>
            <StyledBodycopy>
              Kindly fill this registeration form to register for our courses
            </StyledBodycopy>
          </StyledSectionHeader>
          <FormContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <label>First Name</label>
              <input type="text" {...register("firstName")} />
              <label>Last Name</label>
              <input type="text" {...register("lastName")} />
              <label>Email</label>
              <input type="email" {...register("email")} />
              <label>Phone Number</label>
              <input type="tel" {...register("phoneNumber")} />
              <label>Course</label>
              <input type="text" {...register("course")} />
              <label>Payment Proof</label>
              <input
                type="file"
                id="paymentProof"
                {...register("paymentProof")}
              />
              <button type="submit">Submit</button>
            </Form>
          </FormContainer>
        </PageContainer>
        <Footer />
      </Container>
    </>
  );
};

export default CourseRegisterationForm;

const Container = styled.div``;

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 80px auto;
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

const FormContainer = styled.div`
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
`;
