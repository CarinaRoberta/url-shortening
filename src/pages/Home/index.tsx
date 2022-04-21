import React, { useEffect, useState } from "react";
import { bgBooster, bgInput, ilustrationWorkin } from "../../assets";
import AlreadyShortened from "../../components/AlreadyShortened";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InfoCard from "../../components/InfoCard";
import { CardInfo, cardsInfo } from "../../mocks/Cards";
import {
  Image,
  Info,
  PrincipalBanner,
  Title,
  Container,
  ShorteningContainer,
  InputContainer,
  Input,
  LinksShortened,
  Subtitle,
  CardsContainer,
  BoosterContainer,
} from "./styles";

const Home: React.FC = () => {
  const [cards, setCards] = useState<CardInfo[]>([]);

  useEffect(() => {
    const getCards = async () => {
      const response = await cardsInfo;
      setCards(response);
    };
    getCards();
  }, []);

  console.log(cards);

  return (
    <>
      <Header />
      <Container>
        <PrincipalBanner>
          <Info>
            <Title>
              More than just <br />
              shorter links
            </Title>
            <p>
              Build your brand’s recognition and get detailed <br />
              insights on how your links are performing.
            </p>
            <Button>Get Started</Button>
          </Info>
          <Image>
            <img src={ilustrationWorkin} alt="A person working" />
          </Image>
        </PrincipalBanner>
      </Container>
      <ShorteningContainer>
        <InputContainer>
          <img src={bgInput} alt="" />
          <div>
            <Input placeholder="Shorten a link here..."></Input>
            <Button borderRadius="0.5rem">Shorten it!</Button>
          </div>
        </InputContainer>
        <LinksShortened>
          <AlreadyShortened />
          <AlreadyShortened />
        </LinksShortened>
        <Subtitle>
          Advanced statistics
          <p>
            Track how your links are performing across the web with
            <br /> our advanced statistics dashboard.
          </p>
        </Subtitle>
        <CardsContainer>
          {cards.map((card) => (
            <InfoCard icon={card.icon} title={card.title} text={card.text} />
          ))}
        </CardsContainer>
      </ShorteningContainer>
      <BoosterContainer>
        <img src={bgBooster} alt="" />
        <div>
          <h2>Boost your links today</h2>
          <Button>Get Started</Button>
        </div>
      </BoosterContainer>
      <Footer />
    </>
  );
};

export default Home;
