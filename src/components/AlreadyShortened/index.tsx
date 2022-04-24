import React, { useState } from "react";
import Button from "../Button";
import { Container, NormalLink, ShortenedLink } from "./styles";

interface IProps {
  children?: React.ReactNode;
  normalLink: string;
  shortenedLink: string;
}

const AlreadyShortened: React.FC<IProps> = ({
  children,
  normalLink,
  shortenedLink,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: any) => {
    setCopied(true);
    navigator.clipboard.writeText(shortenedLink);
    setTimeout(() => setCopied(false), 900);
  };

  return (
    <Container>
      <NormalLink>{normalLink}</NormalLink>
      <ShortenedLink href={shortenedLink} target="_blank">
        {shortenedLink}
      </ShortenedLink>

      {copied ? (
        <Button
          onClick={(e) => handleCopy(e)}
          borderRadius="0.5rem"
          backgroundColor={"var(--dark-violet)"}
        >
          Copied!
        </Button>
      ) : (
        <Button onClick={(e) => handleCopy(e)} borderRadius="0.5rem">
          Copy
        </Button>
      )}
    </Container>
  );
};

export default AlreadyShortened;
