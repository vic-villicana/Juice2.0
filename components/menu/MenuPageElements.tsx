import Image from 'next/image'
import styled from 'styled-components'
import { Box } from '@mui/material'
import { StandardButton, MainHeader, HomeHeader } from '../home/HomePageElements'
import Link from 'next/link'

export const MenuHead = styled.section`
   @media only screen and (min-width:375px){
        background-color:grey;
        position: relative;
        height: 50vh;
        color: white;
        margin: 0;
        background-size: cover;
        background-position: center;
        border-radius: 0 0 11px 11px;
        width: auto;
        margin-bottom: 2em;

    }

    @media only screen and (min-width:600px){
        height:404px
    }
    
    @media only screen and (min-width:1024px){
        height:475px;
    }
`
export const MenuHeader = styled(MainHeader)`
    margin:0 0 0 0;
    height:40vh;
`;

export const ModalImage = styled(Image)`
    background-position:center;
    background-size:cover;
    position:relative;
    overflow:hidden;
`;

export const MenuModalHeader = styled(HomeHeader)`
    height:100%;
    margin:0 0 0 0;
`;

export const Menu = styled.div`
    
`

export const MenuHomeHeader = styled(HomeHeader)`

`;

export const MenuHeaderImage = styled.div`
    background-position:center;
    background-size:cover;
    position: relative;
    height:100%;
    background-image: url('/mexicantable.jpg');

    @media only screen and (min-width:600px){
        height:100%;
    }
`

export const MenuHImage = styled(Image)`
    background-position:center;
    background-size:cover;
    position:relative;
    overflow:hidden;
`;

export const MenuH1 = styled.h1`
    text-align: center;
    font-size: 250%;
    font-family: 'Lato', sans-serif;

`


export const MenuSelector = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    padding: 1em 0;
    margin: 0 auto 2em auto;

    @media only screen and (min-width: 600px){
        justify-content: center;

    }

    @media only screen and (min-width:1024px){
        overflow-x: hidden;
        border-bottom: 3px double #e72b2b;
        width: 75%;
    }

`

export const MenuList = styled.div`
    padding: 2em 1em 0 1em;
    @media only screen and (min-width:1024px){
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 3em auto;
    max-width: 1500px;
    }
`

export const MenuBtns = styled.div`
    width: auto;
    background: red;
    border: none;
    border-radius: 9px;
    padding: 0.5em 1em 0.5em 1em;
    margin: 0 0.5em 0 0.5em;
    flex-shrink: 0;
    color: white;
    cursor: pointer;
`

export const MenuItem = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom:3em;
    padding-bottom:1.75em;
    border-bottom:1px solid #e72b2b;
    cursor: pointer;
    @media only screen and (mind-width:600px){
        margin:0 3.5em 3em;
        padding-bottom:3em;
    }

    @media only screen and (min-width:1024px){
        margin-bottom:5em;
    }
    width:350px;
`

export const MenuImage = styled(Image)`
    /* height: 100px;
    width:100px; */
    background-size:cover;
    background-position:center;
    border-radius: 11px;
    box-shadow:4px 3px 7px rgb(65, 65, 65, 0.568);
`

export const Titles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 1em;
    max-width: 250px;
    color: rgba(0,0,0,.87);
`


export const MenuTitle = styled.div`
    font-weight: bold;
    text-transform: capitalize;
`;

export const MenuPrice = styled.div`
    font-size:110%;

`;

export const MenuModal = styled(Box)`
    height: 100%;
    width:100%;
    overflow-y:scroll;
`

export const SmallMenuItem = styled.div`
    position: absolute;
    transform:translate(-50%, -50%);
    left:50%;
    top:50%;
    width:390px;
    margin:0 auto;
    background:white;
    height:100%;
    overflow-y:scroll;
    padding-bottom:2em;
`

export const ItemDescription = styled.div`
    max-width:310px;
    margin:0 auto 2em;
`;

export const ItemPrice = styled.div`
    font-size:150%;
    text-align:center;
`;

export const QuantityCounter = styled.div`
    margin-bottom:.5em;
    height:50px;
    width:auto;
    padding-left:2em;
    padding-right:2em;
    background: #e72b2b ;
    border-radius: 0 0 11px 11px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:3em;
    box-shadow:0px 4px 7px 2px rgba(85, 85, 85, 0.568);
`;

export const CounterTitle = styled.p`
    color: white;
    font-size: 19px;;
`;

export const Counter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:80px;
`;

export const Minus = styled.div`
    border:none;
    color:white;
    background:none;
    font-size:2em;
    cursor:pointer;
`;
export const Plus = styled.div`
    border:none;
    color:white;
    background: none;
    font-size:2em;
    cursor:pointer;
`;

export const ModalTitle = styled.h5`
    color:whitesmoke;
    font-size: 1em;
`;

export const CounterWindow = styled.p`
    display:flex;
    align-items: center;
    justify-content: center;
    height:25px;
    width:35px;
    color:white;
    @media only screen and(min-width:600px ){
        font-size:125%;
    }
`;

export const SubContainer = styled.div`
    width: auto;
    height: auto;
`;

export const SubHeading = styled.h2`
    text-align: center;
    text-transform: capitalize;
    margin-bottom:1em;
`;

export const ChosenHeading = styled.h4`
    padding-left:1em;
    text-align:left;
`;

export const SubGrid = styled.div`
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    grid-gap:1.5em;
    margin:0 auto 2em auto;
`;

export const Chosen = styled(Image)`
    height:150px;
    width:315px; 
    background-size:cover;
    background-position:center;
    grid-row-start: 1;
    grid-row-end: 2;
    border-radius:11px;
    box-shadow:0px 6px 7px 2px rgb(65, 65, 65, 0.568);
    object-fit:cover;
    object-position:50% 37%;
`;

export const Choices = styled.div`
        width:315px;
        height:150px;
        display:flex;
        justify-content: space-between;
        grid-row-start:2;
        grid-column-end:2;
        border-radius:11px;
        margin:1em auto;
        position:relative;
`;

export const Options = styled(Image)`
    /* height:150px;
    width:150px; */
    background-size:cover;
    background-position:center;
    grid-row-start:2;
    grid-column-start:2;
    border-radius:11px;
    box-shadow:0px 4px 5px rgb(65, 65, 65, 0.568);
    object-fit:cover;
`;

export const MenuButton = styled(StandardButton)`
    text-align: center;
    width:75%;
    margin:0 auto;
    background-color:#e72b2b;
`;

export const CartLink = styled(Link)`
    color:green;
`;