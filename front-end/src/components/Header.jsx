import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import { Button } from "./Buttons";

const HeaderContainer = styled.div`
  height: 80vh;
  width: 100vw;
  padding: 1rem 2rem;
  background: linear-gradient(to bottom, var(--lightGrey), var(--darkGrey));
  /* clip-path: path(
    "m 636.10028,-120.41431 -74.72147,13.0349 c -74.72146,14.018727 -224.16442,38.612841 -373.60735,39.35062 -149.44293,-0.738058 -298.88586,-25.331893 -448.32882,-104.77118 -149.44293,-77.96355 -298.88586,-210.77211 -448.32882,-196.75338 -149.44293,13.03489 -298.88582,170.43762 -373.60732,249.13904 l -74.7215,78.701373 V 194.39121 h 74.7215 373.60732 448.32882 448.32882 373.60735 74.72147 z"
  ); */

  & > div {
    border-radius: 0.5rem;
    height: 90%;
    width: 90%;
    margin: 0 auto;
    padding: 1rem 2rem;
    box-shadow: 0 2px 2px 0 rgba(20, 20, 20, 0.5);
    background: linear-gradient(to bottom, var(--darkGrey), var(--black));
    @media screen and (max-width: 760px) {
      width: 100%;
      height: 95%;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 1rem 1rem;
  }
`;
const Content = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 60%;
  }
  @media screen and (max-width: 760px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Title = styled.div`
  margin-left: -2rem;
  border-left: 0.5rem solid var(--primary);
  h1 {
    padding-left: 2rem;
    color: var(--primaryLight);
    font-family: "Nova Flat", Courier, monospace;
    margin-bottom: 3rem;
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <NavBar />
        <Content>
          <div>
            <Title>
              <h1>Make your travel confortabel.</h1>
            </Title>
          </div>
          <Button variant="outlined" size="large">
            Book Now
          </Button>
        </Content>
      </div>
    </HeaderContainer>
  );
};

export default Header;
