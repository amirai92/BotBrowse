import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Box>
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
    </Box>
  );
};
export default PageNotFound;

const Box = styled.div`
  font-size: 6rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
