import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Services";
import { UseLogin } from "./loginContext";
import { toast } from "react-hot-toast";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { token } = UseLogin();
  const navigate = useNavigate();

  function registerUser(data) {
    api
      .post("/user/register", data)
      .then((res) => navigate("/"))
      .catch((err) => toast.error("Email já cadastrado!"));
  }

  function retrieveUsers() {
    api
      .get("/user")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function updateAddress(data) {
    api
      .put("/user/address", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function updateUser(data) {
    api
      .put("/user", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function deleteUser() {
    api
      .delete("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <UserContext.Provider
      value={{
        registerUser,
        updateUser,
        deleteUser,
        updateAddress,
        retrieveUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
