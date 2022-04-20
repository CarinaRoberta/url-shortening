import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  padding: 2rem 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

    a {
    padding: 0 1rem;
    font-weight: 700;
    color: var(--gray);
    transition: all 0.3s ease;

    &:hover {
        color: var(--dark-blue);)
    }
  }
`;

const Navigation = styled.nav`
  color: var(--gray);
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
      padding-right: 2.5rem;
  }

    a {
    padding: 0 1rem;
    font-weight: 700;
    transition: all 0.3s ease;

    &:hover {
        color: var(--dark-blue);)
    }
  }
`;

export { Container, Content, Navigation };
