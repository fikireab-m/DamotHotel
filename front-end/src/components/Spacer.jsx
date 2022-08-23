import styled, { css } from "styled-components";

export const Spacer = styled.div`
  ${(grow) => {
    switch (grow) {
      case "lg":
        return css`
          flex-grow: 3;
        `;
      case "md":
        return css`
          flex-grow: 2;
        `;
      default:
        return css`
          flex-grow: 1;
        `;
    }
  }}
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
