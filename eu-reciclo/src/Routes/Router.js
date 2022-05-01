import MapLeaflet from "../Components/Map/Map";
import React from "react";
import InitialPage from "../Pages/InitialPage/InitialPage";
import UserLoginPage from "../Pages/UserLoginPage/UserLoginPage";
import ReceiverLoginPage from "../Pages/ReceiverLoginPage/ReceiverLoginPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UserSignUpPage from "../Pages/UserSignUpPage/UserSignUpPage";
import ReceiverSignUpPage from "../Pages/ReceiverSignUpPage/ReceiverSignUpPage";
import UserHomePage from "../Pages/UserHomePage/UserHomePage";
import ReceiverHomePage from "../Pages/ReceiverHomePage/ReceiverHomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RequestCollection from "../Pages/RequestCollectionPage";
import SearchAssociations from "../Pages/SearchAssociations";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />

      <Route path="/login/user" element={<UserLoginPage />} />

      <Route path="/signup/user" element={<UserSignUpPage />} />

      <Route path="/home/user" element={<UserHomePage />} />

       <Route path="/map" element={<MapLeaflet />} />
          
       <Route path="/user/request" element={<RequestCollection/>}/>
                  
       <Route path="/user/searchAssociations" element={<SearchAssociations/>}/>

      <Route path="/login/receiver" element={<ReceiverLoginPage />} />

      <Route path="/signup/receiver" element={<ReceiverSignUpPage />} />

      <Route path="/home/receiver" element={<ReceiverHomePage />} />

      <Route path="/map" element={<MapLeaflet />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RouterComponent;
