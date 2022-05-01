import MapLeaflet from "../Components/Map/Map";
import React from "react";
import UserLoginPage from "../Pages/UserLoginPage/UserLoginPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UserSignUpPage from "../Pages/UserSignUpPage/UserSignUpPage";
import UserHomePage from "../Pages/UserHomePage/UserHomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RequestCollection from "../Pages/RequestCollectionPage";
import SearchAssociations from "../Pages/SearchAssociations";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLoginPage />} />

      <Route path="/signup/user" element={<UserSignUpPage />} />

      <Route path="/home/user" element={<UserHomePage />} />

       <Route path="/map" element={<MapLeaflet />} />
          
       <Route path="/user/request" element={<RequestCollection/>}/>
                  
       <Route path="/user/searchAssociations" element={<SearchAssociations/>}/>

      <Route path="/map" element={<MapLeaflet />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RouterComponent;
