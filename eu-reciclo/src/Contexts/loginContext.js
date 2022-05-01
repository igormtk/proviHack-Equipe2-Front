import { createContext, useCallback, useContext, useState } from 'react';
import api from '../Services';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem('@euReciclo:accessToken')
  );

  const logIn = useCallback(async (data) => {
    await api
      .post('/user/login', data)
      .then((response) => {
        const { access_token } = response.data;
        localStorage.setItem('@euReciclo:accessToken', access_token);
        setToken(access_token);
      })
      .catch((err) => console.log(err));
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem('@euReciclo:accessToken');
    setToken('');
  }, []);

  return (
    <LoginContext.Provider
      value={{
        token,
        logIn,
        logOut,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const UseLogin = () => useContext(LoginContext);
