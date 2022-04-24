import React, { useEffect, useState } from "react";
import { bgBooster, bgInput, ilustrationWorkin } from "../../assets";
import AlreadyShortened from "../../components/AlreadyShortened";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InfoCard from "../../components/InfoCard";
import { CardInfo, cardsInfo } from "../../mocks/Cards";
import {
  getShortURL,
  postShortURL as postShortURLService,
  ShorteURL,
} from "../../services/shortenUrl";
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
  const [normalLink, setNormalLink] = useState("");
  const [inputError, setInputError] = useState(false);
  const [inputErrorMessage, setInputErrorMessage] = useState("");
  const [shortenedLink, setShortenedLink] = useState<ShorteURL[]>([]);

  useEffect(() => {
    const getCards = async () => {
      const response = await cardsInfo;
      setCards(response);
    };
    getCards();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (normalLink.length === 0) {
      setInputError(true);
      setInputErrorMessage("Please add a link");
      return;
    }
    try {
      setInputError(false);
      setInputErrorMessage("");
      await postShortURLService(normalLink);
      const response = await getShortURL(normalLink);
      setShortenedLink([...shortenedLink, response]);
    } catch (e) {
    }
  };


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
        <div className="inputContainer">
          <InputContainer>
            <img src={bgInput} alt="" />
            <div>
              <Input
                placeholder="Shorten a link here..."
                type="text"
                onChange={(e) => setNormalLink(e.target.value)}
                value={normalLink}
                style={{ outline: inputError ? "2px solid red" : "none" }}
              />
              <Button onClick={(e) => handleSubmit(e)} borderRadius="0.5rem">
                Shorten it!
              </Button>
            </div>
            {inputError && <div className="error">{inputErrorMessage}</div>}
          </InputContainer>
        </div>

        <LinksShortened>
          {shortenedLink.map((shortened) => (
            <AlreadyShortened
              normalLink={shortened.result.original_link}
              shortenedLink={shortened.result.full_short_link}
            />
          ))}
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
            <InfoCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
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
