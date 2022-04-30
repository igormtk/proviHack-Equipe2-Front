import styled from "styled-components"

export const Card = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px;
    box-shadow: -20px 13px 10px rgba(29, 140, 231, 0.45);
`

export const CardIcon = styled.img`
   width: 150px;
   height: 120px;
`

export const CardTitle = styled.h2`
   width: 150px;
   height: 150px;
`