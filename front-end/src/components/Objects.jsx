import styled from "styled-components";
import React from "react";
const TableTop = styled.div`
  padding: 50px;
  border-radius: 1rem;
  /* border: 1px solid var(--white); */
  background: linear-gradient(to bottom right, #a86e34, #a88c64);
  transform-style: preserve-3d;
  transform: rotateX(15deg);
  /* clip-path: path("M 20 240 \
 C 20 0 300 0 300 240 Z"); */
`;

const Wrapper = styled.div`
  height: 150px;
  width: 50%;
  margin: 0 auto;
  perspective: 100px;
`;

export const Table = () => {
  return (
    <>
      <Wrapper>
        <TableTop />
      </Wrapper>
    </>
  );
};

