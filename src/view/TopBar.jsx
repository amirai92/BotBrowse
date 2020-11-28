import React from "react";
import styled, { keyframes } from "styled-components/macro";

const TopBar = ({ children }) => (
  <Box>
    <Title>{children}</Title>
    <Logo src="https://bi86g.csb.app/icons/logo.svg" alt="logo" />
  </Box>
);

export default TopBar;

const Box = styled.div`
  background: slategray;
  width: 100%;
  height: 70px;
  padding: 20px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  color: papayawhip;
  cursor: pointer;
  user-select: none;
`;
const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;
const Logo = styled.img`
  height: 5rem;
  animation: ${spin} 2s linear infinite;
`;
