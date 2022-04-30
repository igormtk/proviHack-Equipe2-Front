import { createContext, useContext } from 'react';
import api from '../Services';
import { UseLogin } from './loginContext';

export const ResiduesContext = createContext();

export const ResiduesProvider = ({ children }) => {
  const { token } = UseLogin();

  function registerCompany() {
    api
      .post('/residues/register')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function retrieveResidues() {
    api
      .get('/residues')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function retrieveResidue(id) {
    api
      .get(`/residues/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function updateResidue(id, data) {
    api
      .patch(`/residues/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <ResiduesContext.Provider
      value={{
        registerCompany,
        updateResidue,
        retrieveResidues,
        retrieveResidue,
      }}
    >
      {children}
    </ResiduesContext.Provider>
  );
};

export const useResiduesContext = () => useContext(ResiduesContext);
