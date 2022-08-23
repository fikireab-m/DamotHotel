import styled from "styled-components";
export const GridContainer = styled.div`
padding: 2rem 10rem;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
justify-content: center;
gap: 3rem;

@media screen and (max-width: 1200px){
 padding:2rem 8rem;   
}
@media screen and (max-width: 1000px){
 padding:2rem 5rem;   
}
@media screen and (max-width: 900px){
 padding:2rem 3rem;   
}
@media screen and (max-width: 600px){
 padding:1rem 2rem;   
}
`;