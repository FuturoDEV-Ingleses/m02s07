import './App.css';
import { ComponentA } from './components/ComponentA';
import { FormLogin } from './components/FormLogin';
import { UserProvider } from './context/userContext';

function App() {
  return (
    <>
      <UserProvider>
        <h1>Aula 02</h1>

        <FormLogin />

        <ComponentA />
      </UserProvider>
    </>
  );
}

export default App;
