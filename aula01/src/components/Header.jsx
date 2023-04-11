import { Link, useNavigate } from 'react-router-dom';
import { useDarkTheme } from '../hooks/useDarkTheme';
import { useState } from 'react';

export const Header = () => {
  const [isDark, setIsDark] = useDarkTheme();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(1);

  const handleDark = () => {
    setIsDark((value) => !value);
  };

  const handleNavigate = () => {
    navigate(`componentc/${selectedItem}`);
  };

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <header className='header'>
      <Link to='/'>Ínicio</Link>

      <Link to='componenta/true'>Componente A</Link>

      <Link to='componentb'>Componente B</Link>

      <select onChange={handleChange} value={selectedItem}>
        <option value={1}>Item 1</option>
        <option value={2}>Item 2</option>
        <option value={3}>Item 3</option>
      </select>

      <button onClick={handleNavigate}>Componente C</button>

      <button onClick={handleDark}>{isDark ? 'Dark' : 'Light'}</button>
    </header>
  );
};
