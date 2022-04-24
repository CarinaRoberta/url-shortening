import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: white;
  height: 6rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  display: flex;
  padding: 1.3rem;
  align-items: center;
  overflow: hidden;

  @media (max-width: 540px) {
    flex-direction: column;
    height: auto;
    gap: 1rem;
  }
`;

const NormalLink = styled.p`
  flex: 1;
  width: 100%;
  padding-bottom: 0.5rem;

  @media (max-width: 540px) {
    border-bottom: 1px solid var(--gray);
  }
`;

const ShortenedLink = styled.a`
  color: var(--cyan);
  margin-right: 1rem;
`;

export { Container, NormalLink, ShortenedLink };
