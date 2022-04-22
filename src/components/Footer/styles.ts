import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: var(--dark-blue);
`;

const Content = styled.div`
  width: 100%;
  padding: 2rem 15rem;
  display: flex;
  height: auto;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1250px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 840px) {
    flex-direction: column;
  }

  .mapSite {
    display: flex;
    column-gap: 4rem;
    margin: 0 auto;

    @media (max-width: 980px) {
      column-gap: 2rem;
      text-align: center;
    }

    @media (max-width: 840px) {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 980px) {
    padding: 2rem 3rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

const Logo = styled.img`
  height: 35px;
`;

const Subtitle = styled.h3`
  color: white;
  margin-bottom: 1rem;
`;

const Links = styled.a`
  color: var(--gray);
  transition: all 0.3s ease;

  &:hover {
    color: var(--cyan);
  }
`;

const MapSite = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 568px) {
    padding: 1rem 0;

    a {
      padding: 0.3rem 0;
    }
  }
`;

const SocialMedias = styled.div`
  a {
    padding: 0 10px;
    transition: all 0.3s ease;
    cursor: pointer;

    svg {
      &:hover path {
        transition: all 0.3s ease;
        fill: var(--cyan);
      }
    }
  }
`;

export { Container, Content, Logo, MapSite, SocialMedias, Subtitle, Links };
