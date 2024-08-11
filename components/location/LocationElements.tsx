import styled from 'styled-components'
import { StandardButton } from '../home/HomePageElements'
import { Box } from "@mui/material"

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
        display: inline-flex;
        height: 81px;
    }
`

export const LocationBtn = styled(StandardButton)`
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
    margin-right:1.2em;
`

export const LocalModal = styled(Box)`
    height:325px;
    width:390px;
    background-color: antiquewhite;
`;

export const LocationSelector = styled.div`
    max-width:390px;
    height:375px;
    background-color: antiquewhite;
    position:absolute;
    transform:translate(-50%, -50%);
    top:50%;
    left:50%;
`;

export const LocationSelectBtn = styled(StandardButton)`
    width:160px;
    height:35px;
    padding:4px 6px; 
    border-radius: 12px;
    background-color:#609cf6;/*#f6a860; */
    color:#fcfdff;
`;

export const LocationTitle = styled.h3`
    font-weight:500;
    text-align:center;
    margin-bottom:.75em;
`;

export const LocationText = styled.p`
    color:fcfdff;
    text-align:center;
`;

export const BtnContainer = styled.div`
    height:130px;
    display:flex;
    flex-direction:column;
    Justify-content:space-evenly;
    align-items:center;
`;

export const MapContainer = styled.div`
    height:175px;
    width:375px;
`;