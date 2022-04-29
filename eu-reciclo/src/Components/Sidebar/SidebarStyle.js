import styled from "styled-components";

export const SidebarContainer = styled.div`
    border: 1px solid #13CD3C;
    grid-area: sidebar;
    overflow-y: auto;
    padding: 20px;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    
`

export const SidebarTitle = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   color: black;
   margin-bottom: 30px;
`

export const SideBarImage = styled.div`
    display: flex;
    align-items: center;
`

export const Logo = styled.img`
    width: 55px;
    object-fit: contain;
`

export const MenuTitle = styled.h2`
    color: #13CD3C;
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 5px;
    padding: 0 10px;
    font-weight: 700;
`

export const SideLink = styled.div`
    color: #13CD3C;
    padding: 10px;
    border-radius: 3px;
    margin-bottom: 5px;
`

export const SideLinkActive = styled.div`
    color: #3ea175;
`

export const SideLinkMenu = styled.a`
    color: color: #3ea175 !important;
`

export const SideBarLink = styled.a`
    text-decoration: none;
    color: #a5aaad;
    font-weight: 700;
    &:focus {
        padding: 7px;
        background: rgba(62, 161, 117, 0.3);
        border-radius: 3px;
    }
`

export const Icon = styled.a`
    width: 10px;
    object-fit: contain;
`

export const Icon2 = styled.img`
    width: 40px;
    object-fit: contain;
`
