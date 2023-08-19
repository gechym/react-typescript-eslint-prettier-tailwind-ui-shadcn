import React from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import themeSelecter from 'stores/selecter/theme.selecter';
import { toggleTheme } from 'stores/action/theme.action';
// style
import './styles/globals.css';
import { AppDispatch } from 'stores/stores';
import requestAuth from 'services/api/requestAuth';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { theme } = useSelector(themeSelecter);

  const handleChangeTheme = (themeChange : string) => {
    dispatch(toggleTheme(themeChange));
  };

  const handleLogin = async () => {
    try {
      const res = await requestAuth.post('login');
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetUser = async () => {
    try {
      const res = await requestAuth.get('books');
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline font-sans">Hello world!</h1>

      <h1>
        current theme :
        {' '}
        {theme}
      </h1>
      <button type="button" onClick={() => handleChangeTheme('system')}>system</button>
      <button type="button" onClick={() => handleChangeTheme('light')}>light</button>
      <button type="button" onClick={() => handleChangeTheme('dark')}>dark</button>
      <br />
      <button type="button" onClick={() => handleLogin()}>login</button>
      <br />
      <button type="button" onClick={() => handleGetUser()}>userlist</button>
    </div>
  );
}

export default App;
