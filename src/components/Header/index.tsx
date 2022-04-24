import React, { useState } from "react";
import { logo } from "../../assets";
import Button from "../Button";
import { Container, Content, Navigation, MenuMobile, Dropdown } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <Content>
        <Navigation>
          <img src={logo} alt="logo" />
          <div className="menuDesktop">
            <a href="./">Features</a>
            <a href="./">Princing</a>
            <a href="./">Resources</a>
          </div>
        </Navigation>
        <div className="menuDesktop">
          <a href="./">Login</a>
          <Button>Sign Up</Button>
        </div>
        <MenuMobile>
          <AiOutlineMenu size={32} onClick={() => setMenuOpen(!menuOpen)} />
        </MenuMobile>
      </Content>
      <div className="menuMobile">
        {menuOpen && (
          <Dropdown>
            <a href="./">Features</a>
            <a href="./">Princing</a>
            <a href="./">Resources</a>
            <a href="./">Login</a>
            <Button>Sign Up</Button>
          </Dropdown>
        )}
      </div>
    </Container>
  );
};

export default Header;
