import './Button.scss';

interface ButtonProps {
  onClickButton: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClickButton }) => {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    onClickButton();
  }

  return (
    <button className="button" onClick={handleClick} type="submit">
      Submit
    </button>
  )
}