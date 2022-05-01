import React from "react"
import {
  HeaderContainer,
  Icon,
  LightTooltip,
  Logo,
} from './HeaderStyle';
import logo from '../../Assets/Icons/logo.png';
import home from '../../Assets/Icons/home_header.png';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Logo src={logo} alt="eu reciclo logo" />
      </div>

        <div>
          <Link to="/home/user">
          <LightTooltip title="Ir para a home">
            <Icon src={home} alt="home icon" />
            </LightTooltip>
          </Link>
        </div>
    </HeaderContainer>
  );
};


export default Header;
