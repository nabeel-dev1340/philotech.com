import React from "react";
import styled from "styled-components";
import Link from "next/link";
import HamburgerIcon from "../../icons/Hamburger";

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container>
      <StyledHeader>
        <StyledNav>
          <Link href="/" passHref style={LinkStyles}>
            <StyledBranding>&#123; PhiloTech &#125;</StyledBranding>
          </Link>
          <StyledNavIcon
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <HamburgerIcon />
          </StyledNavIcon>
          <StyledNavItems
            isOpen={isOpen}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
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
      </StyledHeader>
    </Container>
  );
};

export default Navigation;

const StyledNavIcon = styled.div`
  align-self: center;
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const LinkStyles = {
  textDecoration: "none",
  color: "white",
};

const Container = styled.div`
  width: 100%;
`;

const StyledHeader = styled.header``;
const StyledBranding = styled.h1`
  font-size: 2rem;
  background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    justify-content: space-between;
    margin-left: 30px;
    margin-right: 30px;
  }
`;
const StyledNavItems = styled("ul")<{ isOpen: boolean }>`
  display: flex;
  list-style-type: none;
  align-items: center;
  gap: 67px;
  @media only screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "" : "none")};
    position: absolute;
    top: 8%;
    left: 0;
    right: 0;
    background: #1e1e1e;
    padding: 30px 0;
    border-radius: 20px;
    gap: 20px;
    flex-direction: column;
    text-align: center;
  }
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
