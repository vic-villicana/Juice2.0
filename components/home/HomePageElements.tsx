import styled from "styled-components"
// import Link from "next/Link"
import Image from "next/image"
import platos from '../../assets/platos.jpg'


//main header
//main header
export const MainHeader = styled.div`
        
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
    }

    @media only screen and(min-width:600px){
        height:404px
    }
    
    @media only screen and(min-width:1024px){
        height:475px;
    }
`

export const HomeHeader = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    @media only screen and(min-width:1024px){
        width:300px;
    }
`

export const HomeH1 = styled.h1`
    font-family: 'IM Fell English SC', serif;
    font-size: 2.5em;
    text-align: center;
    min-height: 1rem;
`

export const HeaderBtns = styled.div`
        display: flex;
        justify-content: space-around;
        width: 100%;
    
`

export const StandardButton = styled.div`
        padding: 8px 13px;
        border: none;
        background: #ef8c29;
        color: white;
        border-radius: 6px;
        font-size: 110%;
    
`

// about section
// about section
export const MessageContainer = styled.section`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height:650px;

`
export const Message = styled.div`
    font-family: 'Philosopher', sans-serif;
    margin: 0;
    width: 45%;
`

export const MessageH1 = styled.h2`
    margin: 0 0 0 0.25em;
    font-size: 165%;
`

export const Line = styled.div`
    width: 60%;
    border-bottom: 3px double #e72b2b;
`

export const Mparagraph = styled.p`
    width: 85%;
    margin: 0.5em auto 0 auto;
    font-size: 120%;
`

export const Signature = styled.h3`
    margin: 0.5em 0 0 3em;
    font-size: 175%;
    font-family: 'Ms Madi', cursive;
`

export const Mimage = styled(Image)`
    background-position: center;
    background-size: cover;
    border-radius: 11px;
`

//card section
//card section

export const CardSection = styled.section`
    height:600px;

`

export const CardHeading = styled.h2`
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 1em;
    font-size:200%;
`

export const Line2 = styled(Line)`
    padding-top:5px;
    margin:0 auto;
    height:2px;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

`

export const Card = styled.div`
    position:relative;
    background-size: cover;
    background-position: center;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    height: 300px;
    width: 300px;
    margin: 2em 0;
    text-align: center;
    border-radius: 11px;
    color: grey;
    text-transform: capitalize;
`

export const Card2 = styled(Image)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 300px;
    text-align: center;
    border-radius: 11px;
    text-transform: capitalize;
    object-fit: cover;
    z-index:0;
`

export const CardText = styled.h3`
    position:absolute;
    width:100%;
    transform:translate(-50%, -50%);
    top:50%;
    left:50%;
    text-align:center;
    z-index:9999;
    color:white;
`
export const CardBtn = styled(StandardButton)`
    position:absolute;
    width:auto;
    transform:translate(-50%, -50%);
    top:65%;
    left:50%;
    z-index:9999;
`

export const Gradient = styled.div`
    background:linear-gradient(rgb(65, 65, 65, 0.400), rgb(65, 65, 65, 0.400));
    z-index:9991;
    position: absolute;
    height:300px;
    width:300px;
    border-radius:9px;
    transform:translate(-50%, -50%);
    top:50%;
    left:50%;
`