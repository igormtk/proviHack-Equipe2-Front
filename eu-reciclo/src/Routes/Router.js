import React from "react"
import InitialPage from "../Pages/InitialPage/InitialPage"
import UserLoginPage from "../Pages/UserPage/UserLoginPage"
import ReceiverLoginPage from "../Pages/ReceiverPage/ReceiverLoginPage"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import UserSignUpPage from "../Pages/UserSignUpPage/UserSignUpPage"
import ReceiverSignUpPage from "../Pages/ReceiverSignUpPage/ReceiverSignUpPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const RouterComponent = () => {
    return(
        <Router>

            <Routes>

                <Route path="/" element={<InitialPage/>}/>

                <Route path="/login/user" element={<UserLoginPage/>}/>

                <Route path="/signup/user" element={<UserSignUpPage/>}/>

                <Route path="/login/receiver" element={<ReceiverLoginPage/>}/>

                <Route path="/signup/receiver" element={<ReceiverSignUpPage/>}/>

                <Route path="*" element={<ErrorPage/>}/>
            
            </Routes>

        </Router>
    
    )
}

export default RouterComponent