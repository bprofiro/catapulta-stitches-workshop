import { ButtonHTMLAttributes, ComponentProps } from "react";
import { Container } from "./styles";

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentProps<typeof Container>;

export const Button = ({
  children,
  radius,
  variant,
  ...rest
}: React.PropsWithChildren<Props>) => {
  return (
    <Container variant={variant} radius={radius} {...rest}>
      {children}
    </Container>
  );
};
