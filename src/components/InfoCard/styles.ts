import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.8rem;
  z-index: 1;
  height: 17rem;
  margin-bottom: 5rem;

  &:nth-child(2) {
    margin-top: 2.5rem;
  }

  &:nth-child(3) {
    margin-top: 5rem;
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
  width: 18.3rem;
  margin-top: 0.8rem;
`;

export { Container, Title, Info };
