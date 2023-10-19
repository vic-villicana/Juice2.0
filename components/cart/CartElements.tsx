import styled from 'styled-components'

export const CartPage = styled.section`
    position:relative;
    height:100%;
    padding:4em 4em 0 4em;
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
    flex-direction:row;
    justify-content:space-between;
`

export const ShoppingCart = styled.div`
    display:flex;
    flex-direction:column;

`

export const CartItem = styled.div`
    width:340px;
    height:auto;
    background:#f3f3f3 ;
    padding:.5em;
    border-radius: 6px;
    margin-bottom:.5em;
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
    padding:.5em;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

export const SummaryContainer = styled.div`
    
`;

export const CheckoutButton = styled.div`
    width:80%;
    margin:0 auto;
    text-align:center;
    background:lightskyblue;
    color:white;
    padding:9px 7px;
    border-radius: 6px;
`;