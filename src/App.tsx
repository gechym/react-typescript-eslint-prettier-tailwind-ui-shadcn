import React from 'react';
import './styles/globals.css';
import { useTheme } from 'stores/themeStores/ThemeContext';

function App() {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = (themeChange : string) => {
    setTheme(themeChange);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline font-sans">Hello world!</h1>
      <h1>
        current theme :
        {' '}
        {theme}
      </h1>
      <button type="button" onClick={() => handleChangeTheme('light')}>light</button>
      <button type="button" onClick={() => handleChangeTheme('dark')}>dark</button>
    </div>
  );
}

export default App;
