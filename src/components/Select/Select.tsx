import { useState } from 'react';
import './Select.scss';

interface SelectProps {
  data: any[];
  title: string;
  onChangeSelect: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({ data, title, onChangeSelect }) => {

  const [selectValue, setSelectValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
    onChangeSelect(event.target.value);
  }

  return (
    <label className="select">
      <p className="select__title">{title}</p>
        <select className="select__field" name="type" value={selectValue} onChange={handleChange}>
          <option value="">Select one</option>
          {
            data.map((data, index) => <option key={index} value={data.name}>{data.name}</option>)
          }
        </select>
    </label>
  )
}