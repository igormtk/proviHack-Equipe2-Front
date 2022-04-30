import React from "react";
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {

    const states = {}
    const setters = {}

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;