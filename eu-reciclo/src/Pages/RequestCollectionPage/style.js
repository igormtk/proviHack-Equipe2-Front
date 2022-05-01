import styled from "styled-components";
import { styled as styledMui } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const PageBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  @media (min-width: 600px) and (min-height: 600px) {
    align-content: space-around;
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-evenly;
    max-width: 900px;
  }

  h2 {
    text-transform: capitalize;
    color: var(--primary-green);
  }
`;
export const QuestionBox = styled.div`
  width: 400px;

  .cards__box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  .box3 {
    align-items: center;
    flex-direction: column;
  }

  .input_quantity {
    border: none;
    width: 220px;
    height: 200px;
    background: #f4f2ff;
    box-shadow: 0px 71px 134px rgba(94, 84, 152, 0.1),
      0px 35.9437px 58.4156px rgba(94, 84, 152, 0.0675),
      0px 14.2px 21.775px rgba(94, 84, 152, 0.05),
      0px 3.10625px 7.74687px rgba(94, 84, 152, 0.0325);
    border-radius: 10px;
    font-size: 45px;
    text-align: center;
    margin-bottom: 15px;
  }

  @media (min-width: 768px) and (min-height: 780px) {
    .cards__box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    .questions__box {
      margin: 10px;
    }
  }
`;

export const Container = styled.div`
  input[type="datetime-local"] {
    color: var(--purple);
    padding: 20px;
    border-radius: 10px;
  }
`;

export const CssTextField = styledMui(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    marginBottom: "8px",

    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

export const GreenButton = styledMui(Button)({
  color: "white",
  backgroundColor: "#13CD3C",
  "&:hover": {
    backgroundColor: "#09a92db0",
  },
});
