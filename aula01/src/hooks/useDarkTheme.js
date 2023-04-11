import { useEffect, useState } from 'react';

export const useDarkTheme = (defaultDarkTheme = true) => {
  const [isDark, setIsDark] = useState(defaultDarkTheme);

  useEffect(() => {
    const className = 'dark-mode';
    const element = window.document.body;

    if (isDark) {
      element.classList.add(className);
      return;
    }

    element.classList.remove(className);
  }, [isDark]);

  return [isDark, setIsDark];
};
