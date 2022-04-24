import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.8rem;
  height: auto;
  margin-bottom: 5rem;

  @media (max-width: 850px) {
    margin-bottom: 0rem;
  }

  &:nth-child(2) {
    margin-top: 2.5rem;

    @media (max-width: 850px) {
      margin-top: 1rem;
    }
  }

  &:nth-child(3) {
    margin-top: 5rem;

    @media (max-width: 850px) {
      margin-top: 1rem;
    }
  }

  div {
    background-color: var(--dark-violet);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    position: absolute;
    transform: translate(5%, -75%);
  }
`;

const Title = styled.h3`
  color: var(--dark-blue);
  margin-top: 3rem;
`;

const Info = styled.p`
  color: var(--gray);
  width: 100%;
  margin-top: 0.8rem;
`;

export { Container, Title, Info };
