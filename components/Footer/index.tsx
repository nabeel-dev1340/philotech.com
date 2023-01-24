import React from "react";
import styled from "styled-components";
import Link from "next/link";
import GithubMiniIcon from "../../icons/GithubMini";
import TwitterMiniIcon from "../../icons/TwitterMini";
import LinkedinMiniIcon from "../../icons/LinkedinMini";

const Footer = () => {
  return (
    <Container>
      <StyledFooter>
        <hr />
        <StyledFooterNav>
          <Link href="/" passHref style={LinkStyles}>
            <StyledBranding>&#123; PhiloTech &#125;</StyledBranding>
          </Link>
          <StyledFooterNavItems>
            <StyledFooterNavItem>Designed By PhiloTech.</StyledFooterNavItem>
            <StyledFooterNavItem>+91 12345 09876</StyledFooterNavItem>
            <StyledFooterNavItem>philotech@gmail.com</StyledFooterNavItem>
            <StyledFooterNavItem>
              <StyledLink href="#">
                <GithubMiniIcon />
              </StyledLink>
              <StyledLink href="#">
                <TwitterMiniIcon />
              </StyledLink>
              <StyledLink href="#">
                <LinkedinMiniIcon />
              </StyledLink>
            </StyledFooterNavItem>
          </StyledFooterNavItems>
        </StyledFooterNav>
      </StyledFooter>
    </Container>
  );
};

export default Footer;

const LinkStyles = {
  textDecoration: "none",
  color: "white",
};

const Container = styled.div`
  width: 100%;
`;

const StyledLink = styled.a``;

const StyledFooter = styled.footer``;
const StyledBranding = styled.h1`
  font-size: 1.7rem;
  background: #a7a7a7;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const StyledFooterNav = styled.div`
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const StyledFooterNavItems = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  gap: 67px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    margin: 0;
    padding: 0;
  }
`;
const StyledFooterNavItem = styled.li`
  &:last-child {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  &:first-child {
    background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  font-weight: 600;
  color: #a7a7a7;
`;
