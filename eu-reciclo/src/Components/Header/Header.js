import React from "react"
import { HeaderContainer, NavigationContainer, Icon, Logo } from "./HeaderStyle"
import recicle from "../../Assets/Icons/recicle.png"
import house from "../../Assets/Icons/house.png"
import configuration from "../../Assets/Icons/configuration.png"
import profile from "../../Assets/Icons/profile.png"

const Header = () => {

    return (
        <HeaderContainer>

            <div>

                <Logo src={recicle} alt="logo"/>

            </div>

                <NavigationContainer>

                    <div>

                    <a href="#"><Icon src={house} alt="home"/></a>    

                    </div>

                    <div>

                        <a href="#"><Icon src={configuration} alt="config"/></a>   

                    </div>

                    <div>

                        <a href="#"><Icon src={profile} alt="profile"/></a> 

                    </div>

                </NavigationContainer>

        </HeaderContainer>
    )
}



export default Header;