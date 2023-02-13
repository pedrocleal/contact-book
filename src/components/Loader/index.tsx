import { CircleNotch } from "phosphor-react";
import { Container } from "./styles";

interface ILoaderProps {
  isVisible: boolean;
}

export function Loader({ isVisible }: ILoaderProps) {

  if (!isVisible) {
    return null;
  }

  return (
    <Container>
      <CircleNotch className="loader" color="#9E55FC" />
    </Container>
  )
}