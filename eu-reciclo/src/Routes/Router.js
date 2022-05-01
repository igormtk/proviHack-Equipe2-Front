import MapLeaflet from "../Components/Map/Map";
import React from "react";
import UserLoginPage from "../Pages/UserLoginPage/UserLoginPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UserSignUpPage from "../Pages/UserSignUpPage/UserSignUpPage";
import UserHomePage from "../Pages/UserHomePage/UserHomePage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import RequestCollection from "../Pages/RequestCollectionPage";
import SearchAssociations from "../Pages/SearchAssociations";
import { UseLogin } from "../Contexts/loginContext";
import Congrats from "../Pages/Congrats/Congrats";

const RouterComponent = () => {
  const { token } = UseLogin();

  return (
    <Routes>
      <Route path="/" element={<UserLoginPage />} />
      <Route path="/signup/user" element={<UserSignUpPage />} />
      {token ? (
        <>
          <Route path="/home/user" element={<UserHomePage />} />

          <Route path="/user/request" element={<RequestCollection />} />
          <Route
            path="/user/searchAssociations"
            element={<SearchAssociations />}
          />
          <Route path="/congrats" element={<Congrats />} />
        </>
      ) : (
        <>
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      )}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RouterComponent;
