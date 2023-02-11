import { StyledButton } from "./style";

interface IButtonProps {
  children: React.ReactNode;
}

type ButtonProps = IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}