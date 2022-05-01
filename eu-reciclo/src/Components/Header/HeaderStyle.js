import styled from "styled-components";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled as styledMui } from '@mui/material/styles';

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: transparent;
  border: 1px solid var(--primary-green);
  box-shadow: 2px 0px 3px 2px #e5e8e8;
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
`;

export const NavigationContainer = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  height: auto;
  width: 40px;
`;

export const Icon = styled.img`
  height: auto;
  width: 20px;
`;

export const LightTooltip = styledMui(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
