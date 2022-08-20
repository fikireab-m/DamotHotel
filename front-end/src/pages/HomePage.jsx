import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import NavBar from "../components/navBar/NavBar";
const Wrapper = styled.div`
  height: 150px;
  width: 50%;
  margin: 0 auto;
  perspective: 100px;
`;

const Table = styled.div`
  padding: 50px;
  border-radius: 1rem;
  background: linear-gradient(
    to bottom right,
    var(--primary),
    var(--secondary)
  );
  transform-style: preserve-3d;
  transform: rotateX(15deg);
`;

const HeaderContainer = styled.div`
  height: 50vh;
  padding: 1rem 2rem;
  background: linear-gradient(to bottom right, var(--primary), var(--white));
`;
const HomePage = () => {
  return (
    <HeaderContainer>
      <NavBar />
      <Wrapper>
        <Table />
      </Wrapper>
    </HeaderContainer>
  );
};

export default HomePage;
