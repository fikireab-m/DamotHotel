import styled from "styled-components";
export const Card = styled.div`
  background-color: var(--white);
  border-radius: 0.5rem;
  box-shadow: var(--lightShadow);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.4s;
  &:hover {
    transform: translate(.5rem, -1rem);
    box-shadow: var(--blackShadow);
  }
`;
export const CardMedia = styled.img`
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
  overflow: hidden;
`;

export const CardFooter = styled.div`
  padding: 0.25rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardActionBar = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
