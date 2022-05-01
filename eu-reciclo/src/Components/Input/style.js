import { TextField } from "@mui/material";
import { styled as styledMui } from "@mui/material/styles";
import styled from "styled-components";

export const StyledInput1 = styledMui(TextField)({
  "& .MuiInputBase-input": {
    border: "#13CD3C",
    borderRadius: "10px",
    boxShadow: "#13CD3C",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #13CD3C",
      boxShadow: "#13CD3C",
    },
  },
  "& label.Mui-focused": {
    borderColor: "#13CD3C",
    color: "#13CD3C",
    boxShadow: "#13CD3C",
  },
  "& .MuiInput-underline:after": {
    borderColor: "#13CD3C",
    boxShadow: "#13CD3C",
  },
});

export const StyledInput = styled(StyledInput1)`
  font-size: 30px;

  ::placeholder {
    color: #c4c4c4;
  }

  &:placeholder-shown {
    font-family: inherit;
  }

  input:-webkit-autofill {
    border: 1px solid inherit;
    box-shadow: 0 0 0px 1000px inherit inset;
    font-family: inherit;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: inherit;
    -webkit-box-shadow: 0 0 0px 1000px inherit inset;
  }
`;
