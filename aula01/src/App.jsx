import './App.css';
import { Header } from './components/Header';
import { Router } from './Router/Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Router />

      <footer>
        <p>FuturoDev</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
