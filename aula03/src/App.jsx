import { BrowserRouter } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Router } from './Router/Router';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header title='Aula 03' />

        <main className='main'>
          <Router />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
