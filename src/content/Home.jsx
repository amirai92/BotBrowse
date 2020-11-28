import React from "react";
import styled from "styled-components";

const Home = () => (
  <Box>
    <Title>The bot browse!</Title>
    <Img
      src="https://robohash.org/etaperiamqui.jpg?size=300x300&set=set1"
      alt="Loading avatar"
    />
  </Box>
);

export default Home;

const Img = styled.img`
  background: linear-gradient(to bottom, #f5f5dc 0%, thistle 100%);
  border-radius: 50%;
  margin-top: 2rem;
  border: dotted mediumvioletred 2px;
`;
const Title = styled.h1`
  text-shadow: 2px 2px 10px rgba(71, 0, 37, 0.2);
  color: coral;
  font-size: 7rem;
  padding-left: 1rem;
  background: -webkit-linear-gradient(gold, coral);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Box = styled.div`
  font-size: 3rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
