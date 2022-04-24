import React, { ReactNode } from "react";
import { Container } from "./styles";

export interface IButton {
  children: ReactNode;
  borderRadius?: string;
  backgroundColor?: string;
  onClick?: (e: any) => void;
}

const Button: React.FC<IButton> = ({
  children,
  borderRadius,
  backgroundColor,
  onClick,
  ...rest
}) => {
  return (
    <Container
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      {...rest}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default Button;
