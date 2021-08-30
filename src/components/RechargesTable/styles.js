import styled from "styled-components";

export const Container = styled.div`
  
`; 

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem 8rem;

  h2 {
    color: var(--text-title);
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: normal;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td { 
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      font-weight: normal;
      color: var(--text-title);
      border-radius: 0.25rem;
    }
  }
`;