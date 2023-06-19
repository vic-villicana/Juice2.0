import Image from 'next/image'
import styled from 'styled-components'

import { Box } from '@mui/material'

export const MenuHead = styled.section`
   @media only screen and (min-width:376px){
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

export const Menu = styled.div`
    
`

export const MenuH1 = styled.h1`
    text-align: center;
    font-size: 250%;
    font-family: 'Lato', sans-serif;

`

export const Location = styled.div`
    padding: 0 23px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 81px;
    width: auto;
    border-radius: 9px;
    margin: 0 1em 2em;
    box-shadow: 0px 4px 6px rgb(65, 65, 65, 0.568);
    background-size: cover;
    background-position: center;
    background:linear-gradient(rgba(16, 214, 92, 0.9), rgba(16, 214, 92, 0.9)), url(/static/media/sugarskullwhite.185f6e3….jpg);

    @media only screen and (min-width:600px) {
        margin: 0 2.5em 4em;
        height: 135px;
    }

    @media only screen and (min-width:1024px) {
        width: 30%;
        height: 81px;
    }
`

export const LocationBtn = styled.div`
    padding: 8px 15px;
    justify-self: auto;
    border-radius: 6px;
    color: white;
    background: rgba(240, 183, 25, 0.897);
    border: indianred;
    box-shadow: 0px 3px 6px rgba(65, 65, 65, 0.568);

    @media only scrren and (min-width:600px) {
        width: 105px;
        height: 45px;
        font-size: 115%;
    }


`

export const LocationH1 = styled.h4`
    color: whitesmoke;
    font-size: 1.2em;
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
`

export const MenuItem = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom:3em;
    padding-bottom:1.75em;
    border-bottom:1px solid #e72b2b;
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

`

export const SmallMenuItem = styled.div`
    position: absolute;
    transform:translate(-50%, -50%);
    left:50%;
    top:50%;
    width:390px;
    margin:0 auto;
    background:white;
    height:65%;
    /* overflow-y:scroll; */
`

export const ItemDescription = styled.div`
    max-width:310px;
    margin:0 auto 2em;
`;

export const ItemPrice = styled.div`
    font-size:150%;
    text-align:center;
`;

