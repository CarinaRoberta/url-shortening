import styled from "styled-components";

const Container = styled.div`
  width: 60rem;
  background-color: white;
  height: 6rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  display: flex;
  padding: 1.3rem;
  align-items: center;
`;

const NormalLink = styled.p`
  flex: 1;
`;

const ShortenedLink = styled.p`
  color: var(--cyan);
  margin-right: 1rem;
`;

export { Container, NormalLink, ShortenedLink };
