import styled from "styled-components";
import 'react-credit-cards/es/styles-compiled.css';

export const Container = styled.div`
  margin-top: 1rem;
`; 

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;

  h2 {
    color: var(--text-title);
    margin-top: 2rem;
  }
`;

export const ButtonArea = styled.div`
    button {
    font-size: 1rem;
    color: var(--shape);
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    translate: filter 0.2s;

    & + button {
      margin-left: 1rem;
    }
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
`;

export const CardsContent = styled.div`
  margin: 2rem 0;

  & + div {
    margin-left: 2rem;
  }
`;