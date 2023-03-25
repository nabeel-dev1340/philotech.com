import React, { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useForm, SubmitHandler } from "react-hook-form";
import { CourseFormInput } from "../types";
import Image from "next/image";

const CourseRegisterationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CourseFormInput>();

  const [submissionDone, setSubmisssionDone] = useState(false);

  const onSubmit: SubmitHandler<CourseFormInput> = (data) => {
    console.log(data);
    setSubmisssionDone(true);
  };
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
            {!submissionDone ? (
              <Form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Firstname"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && <span>This field is required</span>}
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Your LastName"
                  {...register("lastName")}
                />
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter Your Mobile no."
                  {...register("phoneNumber", { required: true })}
                />
                {errors.phoneNumber && <span>This field is required</span>}
                <label>Course</label>
                <select {...register("course", { required: true })}>
                  <option value="">Select Course</option>
                  <option value="mobile-development-using-flutter-and-dart">
                    Mobile Development Using Flutter & Dart
                  </option>
                </select>
                {errors.course && <span>This field is required</span>}
                <label>Payment Proof</label>
                <input
                  type="file"
                  id="paymentProof"
                  {...register("paymentProof", { required: true })}
                />
                {errors.paymentProof && <span>This field is required</span>}
                <button type="submit">Submit</button>
              </Form>
            ) : (
              <FormConfirmation>
                <Image
                  src="/images/check.png"
                  alt="check"
                  width={60}
                  height={60}
                />
                <h2>
                  Form Submitted Successfully
                  <br />
                  You will get a confirmation email shortly
                </h2>
              </FormConfirmation>
            )}
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
  margin-top: 30px;
`;

const FormConfirmation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 80px;

  h2 {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #a7a7a7;
    margin-top: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }

  label {
    font-weight: 400;
    font-size: 20px;
    margin-top: 20px;
  }

  input {
    padding: 10px;
    border: none;
    border-radius: 5px;
    outline: none;
  }

  span {
    color: red;
    font-size: 12px;
    margin-top: 3px;
  }

  select {
    padding: 10px;
    border: none;
    border-radius: 5px;
    outline: none;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
  }

  button {
    margin-top: 20px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: #f5a623;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    width: 50%;
  }
`;
