import { useRef, useState } from 'react';
import BoxColor from './BoxColor';

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

function MyForm() {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const handleChange = () => {
    setValue(inputRef.current.value);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder="Escribe un color..."
        onChange={handleChange}
      />
      <div className="container">
        {colors.map((color) => (
          <BoxColor key={color} color={color} value={value} />
        ))}
      </div>
    </>
  );
}

export default MyForm;