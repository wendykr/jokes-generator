import { useState, useEffect } from 'react';
import './App.scss';
import { Form } from './components/Form/Form';
import { Joke } from './components/Joke/Joke';
import { HiMiniArrowUturnLeft } from "react-icons/hi2";

function App() {

  const [show, setShow] = useState<boolean>();

  useEffect(() => {
    setShow(true);
  }, [])

  return (
    <div className="app">
      <div className="app__container">
        {
          show ? (
            <>
              <h2 className="title">Welcome to jokes generator</h2>
              <h3 className="subtitle">Please fill the form:</h3>
              <Form onSubmitForm={() => {}} />
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