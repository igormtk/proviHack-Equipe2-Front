import React, { useContext } from "react"
import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import GlobalStateContext from "../../Global/GlobalStateContext"

const UserHomePage = () => { 

    const { states, setters } = useContext(GlobalStateContext)

    return (
        <div>

        <Navbar sidebarOpen={states.sidebarOpen} openSideBar={setters.openSideBar}/>

        <Sidebar sidebarOpen={states.sidebarOpen} closeSideBar={setters.closeSideBar}/>

        </div>
    );
}

export default UserHomePage