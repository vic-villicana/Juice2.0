import styled from 'styled-components'
import { StandardButton, ButtonLink } from '../home/HomePageElements'

export const CartPage = styled.section`
    position:relative;
    height:100%;
    padding:4em 1.5em 4em 1.5em;
    @media(min-width:768px){
        padding:4em 4em 4em 4em;

    }
`

export const CartTitle = styled.h2`
    font-weight:bold;
    padding-bottom:2em;
`

export const CartContainer = styled.div`
    max-width:1000px;
    margin:0 auto;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media only screen and (min-width:768px){
        flex-direction:row;
        justify-content:space-between;
        align-items:start;
    }
`

export const FlexContainer = styled.div`
  display:flex;
  flex-direction:column;
  background:#ffffff ;
  padding:1em 1em 0 1em;
  border-radius: 6px;
  box-shadow: 0px 4px 5px rgb(65, 65, 65, 0.568);

`;

export const ShoppingCart = styled.div`
    display:flex-inline;
    flex-direction:column;
    margin-bottom:2em;
    width:59%;
`

export const CartItem = styled.div`
    width:340px;
    height:auto;
    background:#f3f3f3 ;
    padding:1em 1em 0 1em;
    border-radius: 6px;
    margin-bottom:1em;
    display:flex;
    flex-direction:row;
    box-shadow: 0px 4px 5px rgb(65, 65, 65, 0.568);
    @media(max-width:750px) {
        width:auto;
        justify-content:space-between;
        align-items:end;
    }
`;

export const CartTitleBold = styled.h3`
    margin-bottom:5px;
`;
export const CartTitleLight = styled.h3`
    font-weight: 400;

`;
export const ItemDescription = styled.p`
    margin-bottom:5px;

`;

export const OrderSummary = styled.div`
    background: #f3f3f3;
    height:auto;
    width:300px;
    padding:1em;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

export const SummaryContainer = styled.div`
    margin-bottom:1.5em;
`;

export const CheckoutButton = styled.button`
    width:80%;
    margin:0 auto;
    text-align:center;
    background:lightskyblue;
    color:white;
    padding:9px 7px;
    border-radius: 6px;
    border:none;
    box-shadow: 1px 2px 7px rgb(65, 65, 65, 0.568);
    font-size:110%;
`;

export const AddMoreItemsBtn = styled(ButtonLink)`
    margin: 0 auto;
    box-shadow: 0px 4px 5px rgb(65, 65, 65, 0.568);
    margin-bottom:2em;
`;

export const ItemsList = styled.div`
    position:relaitve;
    width:auto;
    height:auto;
    padding:1em;
`;

export const Item = styled.div`
  margin:0 0 2em 0;
  width:100%;
  height:auto;
  padding:0 .25em .5em .25em;
  border-bottom:1px solid black;
`;

export const ItemName = styled.h2`
    font-weight:400;
    margin:0 0 .25em 0;
`;

export const FlexItems = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
`;

export const ItemQuantity = styled.p`
  
`;

export const ItemPrice = styled.p`
  
`;