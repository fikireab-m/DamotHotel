import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import { Button } from "./Buttons";
import { aboutHotel } from "../data/about";
import { motion } from "framer-motion";

const HeaderContainer = styled.div`
  height: 80vh;
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
    @media screen and (max-width: 600px) {
      padding: 0.5rem 1rem;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 1rem 1rem;
  }
  @media screen and (max-height: 600px) {
    height:100vh;
  }
`;

// Content Box
const Content = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  @media screen and (max-width: 996px) {
    width: 60%;
  }
  @media screen and (max-width: 895px) {
    width: 65%;
  }
  @media screen and (max-width: 700px) {
    width: 80%;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

// Title Text
const Title = styled.div`
  border-left: 0.5rem solid var(--secondary);
  margin-left: -2rem;
  margin-bottom: 3rem;
  h1 {
    padding: 1rem 0 1rem 2rem;
    color: var(--primaryLight);
    text-transform: capitalize;
    font-family: "Nova Flat", Courier, monospace;

    @media screen and (max-width: 600px) {
      padding-left: 1rem;
      font-size:1.5rem;
    }
  }
  h3,
  p {
    padding-left: 2rem;
    color: var(--white1);
  }
  p {
    line-height: 1.5;
    font-size: 0.8rem;
    a {
      color: var(--primary);
    font-size: 1rem;
      text-decoration: none;
      transition: all 0.4s;
      :hover {
        border-bottom: 1px solid var(--primary);
        font-weight: 600;
        padding-bottom: 4px;
      }
    }
  }
  @media screen and (max-width: 600px) {
    margin-left: -1rem;
    margin-bottom: 1rem;
  }
`;

/**
 *
 * @returns Header comes here
 */
const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <NavBar />

        <Content>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <Title>
                <h3>Damot Hotel</h3>
                <h1>Make your travel confortabel.</h1>
                <p>
                  {aboutHotel.slice(0, 220) + "..."}
                  <a href="">more</a>
                </p>
              </Title>
            </div>
            <Button onClick={{}} variant="outlined" size="large">
              Book Now
            </Button>
          </motion.div>
        </Content>
      </div>
    </HeaderContainer>
  );
};

export default Header;
