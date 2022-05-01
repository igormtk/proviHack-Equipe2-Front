import styled from "styled-components"

export const Card = styled.div`
   border: 1px solid #E5E8E8;
   border-radius: 10px;
   width: 12em;
   height: 8em;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 40px;
   box-shadow: -20px 13px 10px rgba(29, 140, 231, 0.45);

   a:link {
   color:#7B61FF;
   text-decoration:none;
   }

   a:visited {
   color:#7B61FF;
   text-decoration:none;
   }
`

export const CardIcon = styled.img`
   width: 2em;
   height: 2em;

   a:link {
   color:#7B61FF;
   text-decoration:none;
   }
   a:visited {
   color:#999999;
   text-decoration:none;
   }
`