import styled from "styled-components";
export const GridContainer = styled.div`
  padding: 2rem 6rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  justify-content: center;
  gap: 3rem;
  @media screen and (max-width: 1200px) {
    padding: 2rem 4rem;
    gap: 2rem;
  }
  @media screen and (max-width: 1000px) {
    padding: 2rem 3rem;
    gap: 2rem;
  }
  @media screen and (max-width: 800px) {
    padding: 2rem 2rem;
    gap: 2rem;
  }
  @media screen and (max-width: 400px) {
    padding: 1rem 1rem;
    gap: 1rem;
  }
`;
