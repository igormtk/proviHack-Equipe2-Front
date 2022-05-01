import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  background: rgba(208, 211, 21, 0.34);
  bottom: 0;
  left: 0;
  position: fixed;
  text-align: center;
  width: 100%;

  div {
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
    color: black;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
  }
`;
