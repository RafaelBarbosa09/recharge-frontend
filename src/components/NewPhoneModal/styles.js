import styled from "styled-components";

export const Container = styled.form`
  h2 { 
    color: var(--text-tittle);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input, select {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem; 
    border-radius: 0.25rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-weight: regular;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  option {
    font-size: 1rem;
  }

  button[type=submit] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: var(--shape);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: bold;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;