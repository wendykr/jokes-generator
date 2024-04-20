import { useState } from 'react';
import './App.scss';
import { Form, FormDataStructure } from './components/Form/Form';
import { Joke } from './components/Joke/Joke';
import { HiMiniArrowUturnLeft } from "react-icons/hi2";

interface JokeDataStructure {
  type: string;
  setup: string;
  punchline: string;
}

function App() {

  const [jokeData, setJokeData] = useState<JokeDataStructure[]>([]);

  const handleSubmit = (data: FormDataStructure) => {
    console.log(data.name);
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
              <h2 className="title">Your name</h2>
              <h3 className="subtitle">There are jokes for you!</h3>
              <Joke setup="What did the judge say to the dentist?" punchline="Do you swear to pull the tooth, the whole tooth and nothing but the tooth?" />
              <span className="app__container__back-icon"><HiMiniArrowUturnLeft className="icon-arrowBack" /></span>
            </>
          )
        }
      </div>
    </div>
  )
}

export default App