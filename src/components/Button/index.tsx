import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
};

export const Button = ({
  children,
  variant,
  ...rest
}: React.PropsWithChildren<Props>) => {
  return (
    <Container variant={variant} {...rest}>
      {children}
    </Container>
  );
};
