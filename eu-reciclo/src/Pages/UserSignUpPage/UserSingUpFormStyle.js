import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 80vw;

  button {
    margin-top: 20px;
  }

  label {
    color: var(--primary-green);
  }

  input {
    border-radius: 10px 10px 0 0;
  }

  .MuiFormHelperText-root {
    text-transform: initial;
  }
`;

export const CheckboxContainer = styled.div`
  margin: 15px 0;

  label {
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 10px;
    color: black;
    display: flex;
    align-items: center;
  }

  input[type="checkbox"] {
    accent-color: green;
    cursor: pointer;
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
`;
