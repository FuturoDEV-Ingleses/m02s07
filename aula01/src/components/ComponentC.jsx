import { useParams } from 'react-router-dom';

const lista = [
  {
    id: 1,
    nome: 'Teste 1',
  },
  {
    id: 2,
    nome: 'Teste 2',
  },
  {
    id: 3,
    nome: 'Teste 3',
  },
];

export const ComponentC = () => {
  const { id } = useParams();

  const item = lista.find((i) => i.id === parseInt(id));

  return (
    <>
      <h1>ComponentC</h1>
      <p>{`${item.id} - ${item.nome}`}</p>
    </>
  );
};
