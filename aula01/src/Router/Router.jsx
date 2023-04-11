import { Routes, Route } from 'react-router-dom';
import { ComponentA } from '../components/ComponentA';
import { ComponentB } from '../components/ComponentB';
import { ComponentC } from '../components/ComponentC';

export const Router = () => {
  return (
    <Routes>
      <Route path='componenta/:open' element={<ComponentA />} />
      <Route path='componentb' element={<ComponentB />} />
      <Route path='componentc/:id' element={<ComponentC />} />
      <Route path='/' element={<p>Em construção</p>} />
      <Route path='*' element={<p>Página não encontrada</p>} />
    </Routes>
  );
};
