import { useState } from 'react';
import './App.scss';
import { Form, FormDataStructure } from './components/Form/Form';
import { Joke } from './components/Joke/Joke';
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import sourceOfJokes from "./constants/jokes-data";

interface JokeDataStructure {
  type: string;
  setup: string;
  punchline: string;
}

function App() {

  const [jokeData, setJokeData] = useState<JokeDataStructure[]>([]);
  const [name, setName] = useState<string>('');

  const generateJokes = (type: string) => {
    const filterJokes = sourceOfJokes.filter((joke: { type: string; }) => joke.type === type);
    setJokeData(filterJokes);
  }

  const handleSubmit = (data: FormDataStructure) => {
    // console.log(data);
    setName(data.name);
    // console.log(data.count);
    generateJokes(data.type);
  }

  console.log(jokeData);

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
                jokeData.map(joke => <Joke setup={joke.setup} punchline={joke.punchline} />)
              }
              <span className="app__container__back-icon"><HiMiniArrowUturnLeft className="icon-arrowBack" /></span>
            </>
          )
        }
      </div>
    </div>
  )
}

export default App