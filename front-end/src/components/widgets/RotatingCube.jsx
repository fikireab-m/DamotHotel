import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  perspective: 1200px;
  background: #050505;
  ${(props) => {
    switch (props.primary) {
      case "green":
        return css`
          --pColor: #00ec00;
        `;
      case "purple":
        return css`
          --pColor: #b500ec;
        `;
      case "red":
        return css`
          --pColor: #ec0000;
        `;

      default:
        return css`
          --pColor: #15ffc4;
        `;
    }
  }}
  .cube {
    font-size: 4em;
    width: 4em;
    height: 4em;
    transform-style: preserve-3d;
    animation: animate 4s linear infinite;
    @keyframes animate {
      0% {
        transform: rotateX(-30deg) rotateY(0deg);
      }
      100% {
        transform: rotateX(-30deg) rotateY(360deg);
      }
    }
  }

  .side {
    position: absolute;
    width: 4em;
    height: 4em;
    background: linear-gradient(#151515, #00ff00);
    text-align: center;
  }

  .front {
    transform: translateZ(2em);
  }
  .top {
    background: #222;
    transform: rotateX(90deg) translateZ(2em);
  }
  .right {
    transform: rotateY(90deg) translateZ(2em);
  }
  .left {
    transform: rotateY(-90deg) translateZ(2em);
  }
  .bottom {
    transform: rotateX(-90deg) translateZ(2em);
    ::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 4em;
      height: 4em;
      background: 00ff00;
      transform: translateZ(-380px);
      filter: blur(20px);
      box-shadow: 0 0 120px #00ff0033, 0 0 200px #00ff0066,
        0 0 200px #00ff0099, 0 0 200px #00ff00cc,
        0 0 200px #00ff00;
    }
  }
  .back {
    transform: rotateY(-180deg) translateZ(2em);
  }
`;
const RotatingCube = () => {
  return (
    <Container>
      <div className="cube">
        <div className="side front"></div>
        <div className="side back"></div>
        <div className="side right"></div>
        <div className="side left"></div>
        <div className="side top"></div>
        <div className="side bottom"></div>
      </div>
    </Container>
  );
};

export default RotatingCube;
