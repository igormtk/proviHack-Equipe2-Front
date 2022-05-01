import styled from "styled-components"

export const Card = styled.div`
   border: 1px solid #E5E8E8;
   border-radius: 10px;
   width: 10em;
   height: 7em;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 20px;
   padding-top: 10px;
   padding-right: 10px;
   padding-left: 10px;
   box-shadow: -5px 5px 5px rgba(29, 140, 231, 0.45);

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