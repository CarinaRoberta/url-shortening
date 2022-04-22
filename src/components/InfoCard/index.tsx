import React from "react";
import { CardInfo } from "../../mocks/Cards";
import { Container, Info, Title } from "./styles";

const InfoCard: React.FC<CardInfo> = ({ icon, title, text }) => {
  return (
    <Container>
      <div>
        <img src={icon} alt="" />
      </div>
      <Title>{title}</Title>
      <Info>{text}</Info>
    </Container>
  );
};

export default InfoCard;
