import { useUser } from '../context/userContext';

export const ComponentC = () => {
  const { user, isAuthenticated } = useUser();

  return (
    <>
      <h2>Component C</h2>

      {isAuthenticated && <p>{user.name}</p>}
    </>
  );
};
