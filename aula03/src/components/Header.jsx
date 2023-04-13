import { Link } from 'react-router-dom';

import './Header.css';

export const Header = ({ title }) => {
  return (
    <header className='header'>
      <Link to='/'>
        <h1>{title}</h1>
      </Link>

      <Link to='/about'>Sobre</Link>
    </header>
  );
};
