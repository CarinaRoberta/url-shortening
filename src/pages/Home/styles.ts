import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 2rem 15rem;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
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
  overflow: hidden;
  font-size: 4.5rem;
  color: var(--dark-blue);
  line-height: 5.3rem;
`;

const Image = styled.div`
  img {
    position: absolute;
    width: 58rem;
    height: 35rem;
    top: 8rem;
    right: -10rem;
  }
`;

const ShorteningContainer = styled.div`
  background-color: #f0f1f6;
  margin-top: 15rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: auto; //alterar depois
`;

const InputContainer = styled.div`
  background-color: var(--dark-violet);
  width: 60rem;
  display: flex;
  justify-content: center;
  height: 10rem;
  align-items: center;
  justify-content: center;
  margin-top: -20rem;
  position: absolute;
  bottom: 40px;
  border-radius: 0.5rem;

  div {
    position: absolute;
    width: 100%;
    padding: 3rem;
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const Input = styled.input`
  flex: 1;
  height: 3rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: var(--gray);
  border: none;
  font-size: 1.5rem;
  outline: none;
  margin-right: 1rem;

  &::placeholder {
    color: var(--gray);
  }
`;

const LinksShortened = styled.div`
  margin-top: 8rem;
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  color: var(--dark-blue);
  margin-top: 4rem;
  text-align: center;

  p {
    font-size: 1rem;
    color: var(--gray);
    margin-top: 1rem;
    line-height: 1.6rem;
  }
`;

const CardsContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 3rem;
  height: auto;
`;

const BoosterContainer = styled.div`
  background-color: var(--dark-violet);
  width: 100%;
  display: flex;
  justify-content: center;
  height: 15rem;
  overflow: hidden;

  @media (max-width: 600px) {
    div {
      h2 {
        font-size: 1.5rem !important;
      }

      button {
        width: 60% !important;
      }
    }
  }

  div {
    position: absolute;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    height: auto;

    h2 {
      color: white;
      font-size: 3rem;
    }

    button {
      width: 35%;
      align-self: center;
      margin-top: 1rem;
    }
  }

  img {
    width: 100%;
  }
`;

export {
  Container,
  PrincipalBanner,
  Info,
  Title,
  Image,
  ShorteningContainer,
  InputContainer,
  Input,
  LinksShortened,
  Subtitle,
  CardsContainer,
  BoosterContainer,
};
