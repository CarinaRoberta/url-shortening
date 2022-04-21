import React from "react";
import Button from "../Button";
import { Container, NormalLink, ShortenedLink } from "./styles";

interface IProps {
  children?: React.ReactNode;
}

const AlreadyShortened: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      <NormalLink>
        https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G
      </NormalLink>
      <ShortenedLink>https://www.frontendmentor.io/</ShortenedLink>
      <Button borderRadius="0.5rem">Copy</Button>
    </Container>
  );
};

export default AlreadyShortened;
