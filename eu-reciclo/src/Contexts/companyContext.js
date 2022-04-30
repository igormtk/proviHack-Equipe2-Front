import { createContext, useContext } from 'react';
import api from '../Services';
import { UseLogin } from './loginContext';

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const { token } = UseLogin();

  function registerCompany() {
    api
      .post('/company/register')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function updateCompany(data) {
    api
      .put('/company', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function deleteCompany() {
    api
      .delete('/company', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <CompanyContext.Provider
      value={{ registerCompany, updateCompany, deleteCompany }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompanyContext = () => useContext(CompanyContext);
