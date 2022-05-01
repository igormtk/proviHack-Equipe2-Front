import MapLeaflet from '../Components/Map/Map';
import React from 'react';
import UserLoginPage from '../Pages/UserLoginPage/UserLoginPage';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import UserSignUpPage from '../Pages/UserSignUpPage/UserSignUpPage';
import UserHomePage from '../Pages/UserHomePage/UserHomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RequestCollection from '../Pages/RequestCollectionPage';
import SearchAssociations from '../Pages/SearchAssociations';
import MapForm from '../Components/MapForm/MapForm';
import AssociationHomePage from '../Pages/AssociationHomePage';

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLoginPage />} />

      <Route path="/signup/user" element={<UserSignUpPage />} />

      <Route path="/home/user" element={<UserHomePage />} />

      <Route path="/home/association" element={<AssociationHomePage />} />

      <Route path="/map" element={<MapLeaflet />} />

      <Route path="/user/request" element={<RequestCollection />} />

      <Route path="/user/searchAssociations" element={<SearchAssociations />} />

      <Route path="/map" element={<MapLeaflet />} />

      <Route path="/form" element={<MapForm />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RouterComponent;
