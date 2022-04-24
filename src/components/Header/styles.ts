import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  .menuMobile {
    padding: 0 3rem;
    position: absolute;
    width: 100%;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 2rem 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  
  @media (max-width: 1480px) {
    padding: 2rem 10rem;
  }

  @media (max-width: 980px) {
    padding: 2rem 3rem;
  }

    a {
    padding: 0 1rem;
    font-weight: 700;
    color: var(--gray);
    transition: all 0.3s ease;

    &:hover {
        color: var(--dark-blue);)
    }
  }

  .menuDesktop {
    
      @media (max-width:768px) {
       display: none;
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

const MenuMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }

  svg {
    cursor: pointer;
  }
`;

const Dropdown = styled.div`
  background-color: var(--dark-violet);
  width: 100%;
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;

  a {
    color: white;
    padding: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: var(--gray);
    }

    &:nth-child(4) {
      border-top: 1px solid var(--gray);
      width: 100%;
      text-align: center;
    }
  }
`;

export { Container, Content, Navigation, MenuMobile, Dropdown };
