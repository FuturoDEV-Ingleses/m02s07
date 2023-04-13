import { ComponentB } from './ComponentB';
import { useUser } from '../context/userContext';

export const ComponentA = () => {
  const { user, isAuthenticated, handleLogout } = useUser();

  return (
    <>
      <h2>Component A</h2>

      <button onClick={handleLogout}>Deslogar</button>

      {isAuthenticated && <p>{user.id}</p>}

      <ComponentB />
    </>
  );
};
