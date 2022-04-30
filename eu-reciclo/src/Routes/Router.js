import React from "react"
import InitialPage from "../Pages/InitialPage/InitialPage"
import UserLoginPage from "../Pages/UserLoginPage/UserLoginPage"
import ReceiverLoginPage from "../Pages/ReceiverLoginPage/ReceiverLoginPage"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import UserSignUpPage from "../Pages/UserSignUpPage/UserSignUpPage"
import ReceiverSignUpPage from "../Pages/ReceiverSignUpPage/ReceiverSignUpPage"
import UserHomePage from "../Pages/UserHomePage/UserHomePage"
import ReceiverHomePage from "../Pages/ReceiverHomePage/ReceiverHomePage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RequestCollection from "../Pages/RequestCollectionPage"

const RouterComponent = () => {
    return(
        <Router>

            <Routes>

                <Route path="/" element={<InitialPage/>}/>

                <Route path="/login/user" element={<UserLoginPage/>}/>

                <Route path="/signup/user" element={<UserSignUpPage/>}/>

                <Route path="/home/user" element={<UserHomePage/>}/>

                <Route path="/login/receiver" element={<ReceiverLoginPage/>}/>

                <Route path="/signup/receiver" element={<ReceiverSignUpPage/>}/>

                <Route path="/home/receiver" element={<ReceiverHomePage/>}/>

                <Route path="/user/request" element={<RequestCollection/>}/>

                <Route path="*" element={<ErrorPage/>}/>
            
            </Routes>

        </Router>
    
    )
}

export default RouterComponent
