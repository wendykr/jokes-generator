import { FormDataStructure } from '../Form/Form';
import './Button.scss';

interface ButtonProps extends FormDataStructure {
  onClickButton: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClickButton, name, type, count }) => {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    onClickButton();
  }

  return (
    <button className="button" onClick={handleClick} type="submit" disabled={(!name || !type || !count)}>
      Submit
    </button>
  )
}