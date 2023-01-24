import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import TechStack from "../components/TechStack";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Head>
        <title>PhiloTech</title>
      </Head>
      <Container>
        <Navigation />
        <Hero />
        <TechStack />
        <Projects />
        <Footer />
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div``;
