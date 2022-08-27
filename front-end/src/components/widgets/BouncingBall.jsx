import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #000;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 75px;
  perspective: 10em;
  perspective-origin: 50% calc(50% - 2em);

  --boxColor: #0ff7;

  .scene {
    perspective: 10em;
    position: relative;
    transform-style: preserve-3d;
    animation: sceneRotate 30s infinite linear;
    @keyframes sceneRotate {
      to {
        transform: rotateY(360deg);
      }
    }
    @keyframes ballbounce {
      to {
        transform: translateY(-5rem);
        animation-timing-function: ease-in;
      }
    }
  }
  .ball {
    position: absolute;
    width: 1em;
    height: 1em;
    left: -0.5em;
    /* bottom: -1em; */
    top: -2em;
    border-radius: 50%;
    background-image: radial-gradient(circle at top, lightblue, #000);
    animation: sceneRotate 30s infinite linear reverse;
    animation: ballbounce 2s infinite linear ease-in;
  }
  .ball-shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(#0007, #0000 50%);
  }
  .cube {
    height: 2em;
    width: 2em;
    position: absolute;
    top: -1em;
    left: -1em;

    .left,
    .right,
    .front,
    .back {
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--boxColor);
    }
    .front {
      transform: translateZ(1em);
    }
    .right {
      transform: rotateY(90deg), translateZ(1em);
    }
    .back {
      transform: rotateY(180deg), translateZ(1em);
    }
    .left {
      transform: rotateY(270deg), translateZ(1em);
    }
    .top {
      position: absolute;
      width: 2em;
      height: 2em;
      background: var(--boxColor);
      transform: translateY(-50%, -50%) rotateX(90deg);
    }
  }
  .floor {
    position: absolute;
    top: 1em;
    height: 15em;
    width: 15em;
    transform: translate(-50%, -50%) rotateX(90deg);
    background-image: repeating-conic-gradient(
      from 45deg,
      #111 0deg 90deg,
      #222 90deg 180deg
    );
    background-size: 1em 1em;
  }
`;

const BouncingBall = () => {
  return (
    <Container>
      <div className="scene">
        <div className="floor"></div>
        <div className="cube">
          <div className="front"></div>
          <div className="back"></div>
          <div className="left"></div>
          <div className="right"></div>
          <div className="top">
            <div className="ball-shadow"></div>
          </div>
          <div className="bottom"></div>
        </div>
        <div className="ball"></div>
      </div>
    </Container>
  );
};

export default BouncingBall;
