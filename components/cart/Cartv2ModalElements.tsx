import styled from 'styled-components'
import { Box } from "@mui/material";

export const CartV2Container = styled(Box)`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width:70vw;
    height:70vh;
    box-shadow:24;
    background:aliceblue;
    text-align:center;
    padding:1.5em 1em;
    @media(max-width:750px){
        width:85vw;
        height:auto;
    }
`;

export const CheckoutFormContainer = styled.div`
    height:auto;
    width: 100%;
    background: white;
    margin:0 auto;
    margin-bottom:2em;
    padding:.5em .5em 1em .5em;
    border-radius: 6px;
`;

export const CheckoutOrderContainer = styled.div`
        height:auto;
    width: 100%;
    background: white;
    margin:0 auto;
    padding:.5em .5em 1em .5em;
    border-radius: 6px;
`;