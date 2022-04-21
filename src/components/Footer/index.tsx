import React from "react";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  whiteLogo,
} from "../../assets";
import {
  Container,
  Content,
  MapSite,
  Links,
  Logo,
  Subtitle,
  SocialMedias,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo src={whiteLogo} alt="logo" />
        <div className="mapSite">
          <MapSite>
            <Subtitle>Features</Subtitle>
            <Links href="/">Link Shortening</Links>
            <Links href="/">Branded Links</Links>
            <Links href="/">Analytics</Links>
          </MapSite>
          <MapSite>
            <Subtitle>Resources</Subtitle>
            <Links href="/">Blog</Links>
            <Links href="/">Developers</Links>
            <Links href="/">Support</Links>
          </MapSite>
          <MapSite>
            <Subtitle>Company</Subtitle>
            <Links href="/">About</Links>
            <Links href="/">Our Team</Links>
            <Links href="/">Careers</Links>
            <Links href="/">Contact</Links>
          </MapSite>
        </div>
        <SocialMedias>
          <a href="/">
            <Facebook />
          </a>
          <a href="/">
            <Twitter />
          </a>
          <a href="/">
            <Pinterest />
          </a>
          <a href="/">
            <Instagram />
          </a>
        </SocialMedias>
      </Content>
    </Container>
  );
};

export default Footer;
