import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 2rem 15rem;
  display: flex;
  margin: 0 auto;
`;

const PrincipalBanner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  padding-top: 6rem;
  p {
    color: var(--gray);
    padding: 1rem 0 2rem 0;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  color: var(--dark-blue);
  line-height: 5.3rem;
`;

const Image = styled.div`
  img {
    position: fixed;
    width: 58rem;
    height: 35rem;
    top: 8rem;
    right: -10rem;
  }
`;

export { Container, PrincipalBanner, Info, Title, Image };
