import React, { useContext } from "react"
import GlobalStateContext from "../../Global/GlobalStateContext"
import { SidebarContainer, SideBarImage, SidebarTitle, Logo, Icon, MenuTitle, SideLink, SideLinkActive, SideLinkMenu, Icon2 } from "./SidebarStyle"
import reciclar from "../../Assets/Icons/reciclar.png"
import ecoHouse from "../../Assets/Icons/ecoHouse.png"
import cart from "../../Assets/Icons/cart.png"
import notification from "../../Assets/Icons/notification.png"
import wallet from "../../Assets/Icons/wallet.png"
import trophy from "../../Assets/Icons/trophy.png"

const Sidebar = () => {

    const { states, setters } = useContext(GlobalStateContext)

    return (
        <SidebarContainer className={states.sideBarOpen ? "sidebar-responsive" : ""} id="sidebar">

            <SidebarTitle className='sidebar_title'>

                <SideBarImage className="sidebar_img">

                    <Logo src={reciclar} alt="logo"/>

                </SideBarImage>

                <a
                onClick={()=>setters.closeSideBar()}
                className = "fa fa-times"
                id = "sidebarIcon"
                aria-hidden="true"
                >FECHAR</a>

            </SidebarTitle>

            <div className="sidebar_menu">

                <SideLinkActive className="sidebar_link active_menu_link">

                    <SideLinkMenu href="#"></SideLinkMenu>

                    <MenuTitle>MENU</MenuTitle>

                    <SideLink className="sidebar_link">

                        <Icon href="#"><Icon2 src={ecoHouse} alt="home"/></Icon>   

                    </SideLink>

                    <SideLink className="sidebar_link">

                        <Icon href="#"><Icon2 src={trophy} alt="home"/></Icon>   

                    </SideLink>

                    <SideLink className="sidebar_link">

                        <Icon href="#"><Icon2 src={cart} alt="home"/></Icon> 

                    </SideLink>

                    <SideLink className="sidebar_link">

                        <Icon href="#"><Icon2 src={wallet} alt="home"/></Icon> 

                    </SideLink>

                    <SideLink className="sidebar_link">

                        <Icon href="#"><Icon2 src={notification} alt="home"/></Icon>   

                    </SideLink>

                </SideLinkActive>

            </div>

        </SidebarContainer>
    )
}



export default Sidebar;