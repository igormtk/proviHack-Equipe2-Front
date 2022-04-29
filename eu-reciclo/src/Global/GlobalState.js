import React, { useState } from "react";
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const openSideBar = () => {
        setSidebarOpen(true)
    }

    const closeSideBar = () => {
        setSidebarOpen(false)
    }

    const states = {sidebarOpen}
    const setters = {setSidebarOpen, openSideBar, closeSideBar}

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;