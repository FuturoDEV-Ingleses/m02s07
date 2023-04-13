export const About = () => {
  const items = Array.from(Array(100).keys());

  return (
    <>
      <h2>Sobre</h2>
      <p>Página em desenvolvimento</p>

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
