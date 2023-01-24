import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Navigation = () => {
  return (
    <Container>
      <StyledHeader>
        <StyledNav>
          <Link href="/" passHref style={LinkStyles}>
            <StyledBranding>&#123; PhiloTech &#125;</StyledBranding>
          </Link>
          <StyledNavItems>
            <StyledNavItem>
              <Link href="/" style={LinkStyles}>
                Home
              </Link>
            </StyledNavItem>
            <StyledNavItem>
              <Link href="/about" style={LinkStyles}>
                About
              </Link>
            </StyledNavItem>
            <StyledNavItem>
              <Link href="/tech-stack" style={LinkStyles}>
                Tech Stack
              </Link>
            </StyledNavItem>
            <StyledNavItem>
              <Link href="/projects" style={LinkStyles}>
                Projects
              </Link>
            </StyledNavItem>
            <StyledNavItem>
              <Link href="/contact" style={LinkStyles}>
                Contact Us
              </Link>
            </StyledNavItem>
          </StyledNavItems>
        </StyledNav>
        <hr />
      </StyledHeader>
    </Container>
  );
};

export default Navigation;

const LinkStyles = {
  textDecoration: "none",
  color: "white",
};

const Container = styled.div`
  width: 100%;
`;

const StyledHeader = styled.header`
`;
const StyledBranding = styled.h1`
  font-size: 2rem;
  background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
`;
const StyledNavItems = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  gap: 67px;
`;
const StyledNavItem = styled.li`
  &:last-child {
    padding: 10px 15px;
    border-radius: 20px;
    font-weight: 600;
    background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
  }
  font-weight: 600;
`;
