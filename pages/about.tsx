import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import TechStack from "../components/TechStack";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Container>
        <Navigation />
        <Footer />
      </Container>
    </>
  );
};

export default About;

const Container = styled.div``;
