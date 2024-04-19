import { useState } from 'react';
import './Input.scss';

interface InputProps {
  onChangeInput: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ onChangeInput }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChangeInput(event.target.value);
  }

  return (
    <label className="input">
      <p className="input__title">Your name</p>
      <input className="input__field" name="name" value={inputValue} onChange={handleChange} required />
    </label>
  )
}