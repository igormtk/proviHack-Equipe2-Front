import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;

  #footer {
    position: fixed;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 10%;

  @media screen and (min-width: 580px) {
    flex-direction: row;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: var(--primary-green);
    font-size: 2rem;
    text-align: center;
  }

  img {
    display: none;
  }

  @media screen and (min-width: 580px) {
    img {
      display: flex;
      align-self: center;
      height: auto;
      max-width: 600px;
      width: 80%;
    }
  }
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 15px;
  width: 80%;
  max-width: 400px;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  form label {
    text-align: center;
  }

  form {
    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
  }

  span {
    font-weight: 100;
    font-size: 18px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  span a {
    color: var(--primary-green);
    font-weight: 500;
    line-height: 30px;
    text-decoration-line: underline;
  }
`;
