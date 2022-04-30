import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --primary-green: #13CD3C;
    --purple: #7B61FF;
  }

  body {
    margin: 0 auto;
    position: relative;
    font-family: 'Roboto', sans-serif;  
  }
`;

export default GlobalStyle; 
