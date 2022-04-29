import React, { useContext } from "react"
import GlobalStateContext from "../../Global/GlobalStateContext"

const Navbar = () => {

    const { states, setters } = useContext(GlobalStateContext)

    return (
       <nav className="navbar">

            <div className="nav_icon" onClick={()=>{setters.openSidebar()}}>
                <i className="fa fa-bars" aria-hidden="true">ABRIR</i>                
            </div>

            <div className="navbar_left">
                <a href="#">Produtos</a>
                <a href="#">Usuario</a>
                <a href="#" className="active_link">Config</a>
            </div>

            <div className="nav_right">

                <a href="#">
                    <i className="fa fa-search">ICONE1</i>
                </a>

                <a href="#">
                    <i className="fa fa-search">ICONE2</i>
                </a>

                <a href="#">
                    <i className="fa fa-search">ICONE3</i>
                </a>

            </div>

        </nav>
    )
}



export default Navbar;