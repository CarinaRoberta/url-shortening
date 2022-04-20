import styled from "styled-components";
import { IButton } from ".";

const Container = styled.button<IButton>`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "var(--cyan)"};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "2rem"};
  border: none;
  color: white;
  padding: 0.9rem 2rem;
  font-weight: 700;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(105%);
  }
`;

export { Container };
