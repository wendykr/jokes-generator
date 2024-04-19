import { useState } from 'react';
import './Form.scss';
import { Button } from "../Button/Button";
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { typeJokes } from '../../constants/typeJokes';
// import { countJokes } from '../../constants/countJokes';

interface FormProps {
  onSubmitForm: () => void;
}

export interface FormDataStructure {
  name: string;
  type: string;
  count: number;
}

export const Form: React.FC<FormProps> = ({ onSubmitForm }) => {
  const [formData, setFormData] = useState<FormDataStructure>({
    name: '',
    type: '',
    count: 0,
  });

  const handleChangeInput = (value: string) => {
    setFormData(prevState => ({
      ...prevState,
      name: value,
    }));
  };

  const handleChangeSelect = (value: string) => {
    setFormData(prevState => ({
      ...prevState,
      type: value,
    }));
  };

  const submitForm = () => {
    onSubmitForm();
    console.log(formData);
  }

  return (
    <form className="form">
      <Input onChangeInput={handleChangeInput} />
      <Select data={typeJokes} title="Select type of Jokes" onChangeSelect={handleChangeSelect} />
      {/* <Select data={countJokes} title="Select count of Jokes" /> */}
      <Button onClickButton={submitForm} />
    </form>
  )
}