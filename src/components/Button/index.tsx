import React, { ReactNode } from "react";
import { Container } from "./styles";

export interface IButton {
  children: ReactNode;
  borderRadius?: string;
  backgroundColor?: string;
}

const Button: React.FC<IButton> = ({
  children,
  borderRadius,
  backgroundColor,
}) => {
  return (
    <Container borderRadius={borderRadius} backgroundColor={backgroundColor}>
      {children}
    </Container>
  );
};

export default Button;
