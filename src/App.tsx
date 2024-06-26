import { useState } from 'react';
import './App.scss';
import { Form, FormDataStructure } from './components/Form/Form';
import { Joke } from './components/Joke/Joke';
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import sourceOfJokes from "./constants/jokes-data";
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface JokeDataStructure {
  type: string;
  setup: string;
  punchline: string;
}

function App() {

  const [jokeData, setJokeData] = useState<JokeDataStructure[]>([]);
  const [name, setName] = useState<string>('');

  const generateJokes = (type: string, count: number) => {
    const filterJokes = sourceOfJokes.filter((joke: { type: string; }) => joke.type === type).slice(0, count);
    if (filterJokes.length < count) {
      toast.error(`Max. count of Jokes is ${filterJokes.length}!`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    } else {
      setJokeData(filterJokes);
    }
  }

  const handleSubmit = (data: FormDataStructure) => {
    setName(data.name);
    generateJokes(data.type, data.count);
  }

  return (
    <div className="app">
      <div className="app__container">
        {
          jokeData.length === 0 ? (
            <>
              <h2 className="title">Welcome to jokes generator</h2>
              <h3 className="subtitle">Please fill the form:</h3>
              <Form onSubmitForm={handleSubmit} />
            </>
          ) : (
            <>
              <h2 className="title">{name}</h2>
              <h3 className="subtitle">There are jokes for you!</h3>
              {
                jokeData.map((joke, index: number) => <Joke key={index} setup={joke.setup} punchline={joke.punchline} />)
              }
              <span className="app__container__back-icon"><HiMiniArrowUturnLeft className="icon-arrowBack" onClick={() => setJokeData([])}/></span>
            </>
          )
        }
      </div>
    </div>
  )
}

export default App