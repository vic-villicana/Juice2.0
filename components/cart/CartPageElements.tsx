import styled from 'styled-components'
import { StandardButton } from '../home/HomePageElements'
import Image from 'next/image'

export const CartC = styled.section`
    background-size: cover;
    background-position: center;
    /* padding: 2em 0; */
`;

export const CartBG = styled(Image)`
    z-index:-1;
    position: fixed;
    height:auto;
`;

export const OrderDetails = styled.div`
    display: flex;
    max-width: 350px;
    margin: 5em auto;
    border-radius: 11px;
    flex-direction: column;
    background: rgba(255, 245, 238, 0.842);
    /* background: rgba(90, 226, 56, 0.842); */
    padding: 1em 1em;
    height: auto;
`;

export const DetailsBtn = styled.div`
    color: white;
    background: rgb(54, 149, 244);
    border-radius: 9px;
    padding: 0.5em 0 0.55em 10px;
    margin-top: 1em;
    border: none;
`;

export const AddMoreItems = styled.div`
    display: flex;
    align-items: center;
    width: auto;
    margin-top: 3em;
    margin-bottom: 1.5em;
`;

export const AddMoreItemsBtn = styled(StandardButton)`
    margin: 0 auto;
    box-shadow: 0px 4px 5px rgb(65, 65, 65, 0.568);
`;

export const ItemCart = styled.div`
    margin-top: 1em;
    border: none;
    padding: 0.2em 0 0.25em 0;
    height: 100%;
`;

export const CartTotal = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 1em;
    border: none;
    padding: 0.2em 0 0.25em 0;
`;

export const CheckoutButton = styled.div`
    margin-bottom: 1.5em;
    padding: 20px 38px;
    background: #e72b2b;
    border-radius: 11px;
    color: whitesmoke;
    border: none;
    text-align:center;
    font-weight: bold;
    margin-top: 1em;
    box-shadow: 0px 4px 5px rgb(65, 65, 65, 0.568);
`;