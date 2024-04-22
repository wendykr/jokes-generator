import { useState, ChangeEvent } from 'react';
import './Select.scss';

interface Type {
  name?: string;
}

interface Count {
  number?: number;
}

interface Selects extends Type, Count {}

interface SelectProps {
  data: Selects[];
  title: string;
  name: string;
  onChangeSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<SelectProps> = ({ data, name, title, onChangeSelect }) => {

  const [selectValue, setSelectValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
    onChangeSelect(event);
  }

  return (
    <label className="select">
      <p className="select__title">{title}</p>
        <select className="select__field" name={name} value={selectValue} onChange={handleChange} required>
          <option value="">Select one</option>
          {
            data.map((data, index) => {
              if (data.name) {
                return (
                  <option key={index} value={data.name}>{data.name}</option>
                )
              } else if (data.number) {
                  return (
                    <option key={index} value={data.number}>{data.number}</option>
                  )
              }
            })
          }
        </select>
    </label>
  )
}