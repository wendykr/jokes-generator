import './Joke.scss';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

interface JokeProps {
  setup: string;
  punchline: string;
}

export const Joke: React.FC<JokeProps> = ({ setup, punchline }) => {

  return (
    <div className="joke">
      <div className="joke__body">
        <p className="joke__body--setup">{setup}</p>
        <p className="joke__body--punchline"><MdOutlineKeyboardDoubleArrowRight className="icon-arrow" />{punchline}</p>
      </div>
    </div>
  )
}