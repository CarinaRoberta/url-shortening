import React from "react";
import { ilustrationWorkin } from "../../assets";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Image, Info, PrincipalBanner, Title, Container } from "./styles";

const Home: React.FC = () => {
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
    </>
  );
};

export default Home;
