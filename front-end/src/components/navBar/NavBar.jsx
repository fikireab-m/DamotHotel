import React from "react";
import styled from "styled-components";

const Toolbar = styled.div`
  border-radius: 1rem;
  height: 8vh;
  box-shadow: 0 2px 2px 0 rgba(20, 20, 20, 0.5);
  background-image:url("../assets/images/sumei-skyline-design.jpg")
`;
const NavBar = () => {
  return (
    <div>
      <Toolbar />
    </div>
  );
};

export default NavBar;
