import styled from "styled-components";

export const Card = styled.a`
  align-items: center;
  border-radius: 10px;
  border: 1px solid #e5e8e8;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 7em;
  justify-content: center;
  margin: 20px;
  padding: 10px 10px 0 10px;
  width: 100px;

  h2 {
    font-size: 16px;
    font-weight: 500;
  }

  &:link,
  &:visited {
    color: #7b61ff;
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.05);
    transition: ease all 0.5s;
    box-shadow: -5px 5px 5px rgba(29, 140, 231, 0.45);
  }

  :nth-child(1) {
    background-color: #edffef;
  }
  :nth-child(2) {
    background-color: #ecfbff;
  }
  :nth-child(3) {
    background-color: #f4f2ff;
  }
  :nth-child(4) {
    background-color: #ecf4ff;
  }
  :nth-child(5) {
    background-color: #fff2ec;
  }
`;

export const CardIcon = styled.img`
  height: 45px;
  width: auto;
`;
