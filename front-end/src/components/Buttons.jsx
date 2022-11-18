import styled, { css } from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${(prop) => {
    switch (prop.size) {
      case "large":
        return css`
          padding: 1rem 2rem;
          border-radius: 2rem;
          font-size: 1.5rem;
        `;
      case "small":
        return css`
          padding: 0.5rem 1rem;
          border-radius: 1rem;
          font-size: 1rem;
        `;
      default:
        return css`
          padding: 0.75rem 1.5rem;
          border-radius: 1.5rem;
          font-size: 1.25rem;
        `;
    }
  }}
  ${(prop) => {
    switch (prop.variant) {
      case "outlined":
        return css`
          border: var(--borderPrimary);
          background: transparent;
          color: var(--primary);
        `;
      case "text":
        return css`
          border: none;
          background: transparent;
          color: var(--primary);
        `;

      default:
        return css`
          border: none;
          background-color: var(--primary);
          color: var(--white);
        `;
    }
  }}
  text-transform: capitalize;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: var(--primaryround);
  }
`;
