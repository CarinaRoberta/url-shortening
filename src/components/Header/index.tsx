import React from "react";
import { logo } from "../../assets";
import Button from "../Button";
import { Container, Content, Navigation } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Navigation>
          <img src={logo} alt="logo" />
          <div>
            <a href="./">Features</a>
            <a href="./">Princing</a>
            <a href="./">Resources</a>
          </div>
        </Navigation>
        <div>
          <a href="./">Login</a>
          <Button>Sign Up</Button>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
