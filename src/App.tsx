import './App.scss';
import { Form } from './components/Form/Form';

function App() {

  return (
    <div className="app">
      <div className="app__container">
        <h2 className="title">Welcome to jokes generator</h2>
        <h3 className="subtitle">Please fill the form:</h3>
        <Form onSubmitForm={() => {}} />
      </div>
    </div>
  )
}

export default App
