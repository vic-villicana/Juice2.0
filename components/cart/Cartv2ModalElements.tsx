import styled from 'styled-components'
import { Box } from "@mui/material";

export const CartV2Container = styled(Box)`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width:70vw;
    height:100%;
    box-shadow:24;
    background:aliceblue;
    text-align:center;
    padding:1.5em 1em;
    overflow-y: scroll;
    border-radius:3px;
    @media(max-width:750px){
        width:85vw;
    }
`;

export const CheckoutFormContainer = styled.form`
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
    margin-bottom:2em;
    padding:.5em .5em 1em .5em;
    border-radius: 6px;

`;

export const CheckoutNotes = styled.textarea`
    width: 100%;
    padding: 10px;
    margin:6px 0px 20px 0px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const SubmitOrder = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width:40%;
    margin:0 auto;
`;