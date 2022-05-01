import styled from "styled-components";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled as styledMui } from "@mui/material/styles";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  background: rgba(208, 211, 21, 0.34);
  bottom: 0;
  left: 0;
  position: relative;
  text-align: center;
  width: 100%;

  div {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    max-width: 800px;
    width: 70%;
  }

  img {
    height: 40px;
    width: auto;
  }

  p {
    display: none;
  }

  @media screen and (min-width: 550px) {
    p {
      display: flex;
      color: black;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 12px;
    }
  }
`;

export const LightTooltip = styledMui(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
