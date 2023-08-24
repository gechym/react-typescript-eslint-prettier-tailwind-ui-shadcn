import React from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import themeSelecter from 'stores/selecter/theme.selecter';
import { toggleTheme } from 'stores/action/theme.action';
// style
import './styles/globals.css';
import { AppDispatch } from 'stores/stores';
import requestAuth from 'services/api/requestAuth';
import userSelecter from 'stores/selecter/user.selecter';
import { login } from 'stores/slicer/user.slice';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<AppDispatch | any>();
  const { theme } = useSelector(themeSelecter);
  const { isLoading, user } = useSelector(userSelecter);

  // window.addEventListener('loadstart', (e: Event) => {
  //   console.log(e);
  //   dispatch(saveToke({
  //     accessToken: localStorage.getItem('accessToken') || '',
  //     refreshToken: localStorage.getItem('refreshToken') || '',
  //   }));
  // });

  // window.onload = (event : BeforeUnloadEvent) => {
  //   console.log(event);
  //   dispatch(saveToke({
  //     accessToken: localStorage.getItem('accessToken') || '',
  //     refreshToken: localStorage.getItem('refreshToken') || '',
  //   }));
  // };

  // window.onbeforeunload = (e: BeforeUnloadEvent) => {
  //   // https://www.uriports.com/blog/easy-fix-for-blocked-attempt-beforeunload-confirmation-panel/
  //   // eslint-disable-next-line no-param-reassign
  //   e.returnValue = 'Are you sure you want to leave?';
  // };

  const handleChangeTheme = (themeChange : string) => {
    dispatch(toggleTheme(themeChange));
  };

  const handleLogin = async () => {
    await dispatch(login({
      username: 'user',
      password: 'user',
    }));
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
      <button type="button" onClick={() => handleGetUser()}>users</button>

      <div>
        {isLoading ? <>loading...</> : null}
        {user ? <h1>{user.name}</h1> : null}
      </div>
    </div>
  );
}

export default App;
