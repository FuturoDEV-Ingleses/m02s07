import { useParams } from 'react-router-dom';
import { useToggle } from '../hooks/useToggle';

export const ComponentA = () => {
  const { open } = useParams();

  const { onToggle, toggle } = useToggle(open === 'true' ? true : false);

  return (
    <>
      <h1>Componente A</h1>
      <p>{toggle ? 'Aberto' : 'Fechado'}</p>
      <button onClick={onToggle}>Toggle</button>
    </>
  );
};
