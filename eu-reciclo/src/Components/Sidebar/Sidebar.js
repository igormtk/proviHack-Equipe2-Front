import React, { useContext } from "react"
import GlobalStateContext from "../../Global/GlobalStateContext"

const Sidebar = () => {

    const { states, setters } = useContext(GlobalStateContext)

    return (
        <div className={states.sideBarOpen ? "sidebar-responsive" : ""} id="sidebar">

            <div className='sidebar_title'>

                <div className="sidebar_img">

                    <p>Colocar imagem</p>
                    <p>Eu reciclo</p>

                </div>

                <i 
                onClick={()=>setters.closeSideBar()}
                className = "fa fa-times"
                id = "sidebarIcon"
                aria-hidden="true"
                ></i>

            </div>

            <div className="sidebar_menu">

                <div className="sidebar_link active_menu_link">


                    <i className = "fa fa-times"></i>

                    <a href="#">HOME(COLOCAR ICONE)</a>

                    <h2>TITULO</h2>

                    <div className="sidebar_link">

                    <i className = "fa fa-times2"></i>

                    <a href="#">ICONE1</a>   

                    </div>


                    <div className="sidebar_link">

                    <i className = "fa fa-times3"></i>

                    <a href="#">ICONE2</a>   

                    </div>


                    <div className="sidebar_link">

                    <i className = "fa fa-times4"></i>

                    <a href="#">ICONE3</a>    

                    </div>

                    <div className="sidebar_link">

                    <i className = "fa fa-times5"></i>

                    <a href="#">ICONE4</a>   

                    </div>

                    <div className="sidebar_link">

                    <i className = "fa fa-times6"></i>

                    <a href="#">ICONE5</a>     

                    </div>




                </div>

            </div>

        </div>
    )
}



export default Sidebar;