import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 10%;
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
    align-self: center;
    height: auto;
    max-width: 600px;
    width: 80%;
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

  span{
    font-weight: 100;
    font-size: 18px;
  }
  span a {
    color: #0d2ccf;
    font-weight: 500;
    line-height: 30px;
    text-decoration-line: underline;
  }
`;
