import { useToggle } from '../hooks/useToggle';

export const ComponentB = () => {
  const { onToggle, toggle } = useToggle();

  return (
    <>
      <h1>ComponentB</h1>
      <input id='check' type='checkbox' onChange={onToggle} checked={toggle} />
      <label htmlFor='check'>{toggle ? 'Sim' : 'Não'}</label>
    </>
  );
};
