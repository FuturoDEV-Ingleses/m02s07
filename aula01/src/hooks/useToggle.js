import { useState } from 'react';

export const useToggle = (initialToggle = false) => {
  const [toggle, setToggle] = useState(initialToggle);

  const onToggle = () => {
    setToggle((value) => !value);
  };

  return {
    toggle,
    onToggle,
  };
};
