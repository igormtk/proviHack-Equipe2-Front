import { createContext, useContext, useEffect, useState } from 'react';
import api from '../Services';
import { UseLogin } from './loginContext';

export const ResiduesContext = createContext();

export const ResiduesProvider = ({ children }) => {
  const { token } = UseLogin();
  const [residues, setResidues] = useState();

  function registerResidues(data) {
    api
      .post('/residues/register', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  }

  function retrieveResidues() {
    api
      .get('/residues')
      .then((res) => setResidues(res.data))
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

  useEffect(() => {
    retrieveResidues();
  }, []);

  return (
    <ResiduesContext.Provider
      value={{
        registerResidues,
        updateResidue,
        residues,
        retrieveResidues,
        retrieveResidue,
      }}
    >
      {children}
    </ResiduesContext.Provider>
  );
};

export const useResiduesContext = () => useContext(ResiduesContext);
