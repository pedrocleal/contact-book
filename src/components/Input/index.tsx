interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> { }
import { StyledInput } from './styles';

export function Input(props: IInputProps) {
  return (
    <StyledInput type="text" {...props} />
  )
}