import { createContext, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Services";
import { toast } from "react-hot-toast";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("@euReciclo:accessToken")
  );

  const navigate = useNavigate();

  const logIn = useCallback(async (data) => {
    await api
      .post("/login", data)
      .then((response) => {
        const { access_token } = response.data;
        localStorage.setItem("@euReciclo:accessToken", access_token);
        setToken(access_token);
        navigate("/home/user");
      })
      .catch((err) => toast.error("Email ou senha estão errados!"));
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem("@euReciclo:accessToken");
    setToken("");
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
