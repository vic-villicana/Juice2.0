import styled from 'styled-components'
import Image from "next/image"

export const FormSection = styled.div`
    /* display: flex;
    justify-items: center; */
    /* margin: 5em 0em; */
    /* padding: 5em 0; */
    height:auto;
    position: relative;
    margin-top:13em;
`

export const FormSectionContainer = styled.div`
      position:relative;
      height:100%;
`;

export const FormContainer = styled.div`
    background-color: #f4f4f4;
    border-radius:5px;
    height:auto;
    padding:2em 0em 1em 0em;
    width:100%;
    z-index:999;
    /* margin:4em auto 0 auto; */
    position:absolute;
    transform:translate(-50%, -50%);
    top:50%;
    left:50%;

    @media only screen and (min-width:1024px){
        width:auto;

    }
`

export const FormImage = styled(Image)`
    background-position:center;
    background-size:cover;
    position:relative;
`

export const Homeform = styled.form`
    padding: 20px;
    border-radius: 5px;
    width:100%;
    margin:0 auto;
    @media only screen and (min-width:600px){
        width:auto;
    }
`

export const SubmitForm = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width:40%;
    margin:0 auto;
`

export const HomeInput = styled.input`
    width: 100%;
    padding: 10px;
    margin:6px 0px 15px 0px;
    border: 1px solid #ccc;
    border-radius: 5px;
`

export const FormTextarea = styled.textarea`
    width: 100%;
    padding: 10px;
    margin:6px 0px 20px 0px;
    border: 1px solid #ccc;
    border-radius: 5px;
`

export const FormLabel = styled.label`
    display: block;
    margin-bottom: 5px;
`

export const FormHeading = styled.h3`
    font-weight:regular;
    text-align:center;
`

export const FormError = styled.p`
    color:red;
`

export const FormMessageContainer = styled.div`
    width:50%;

`


export const FormMessage = styled.div`
    margin:0 auto;  
`

export const TheMessage = styled.p`
    width:75%;
    margin:0 auto;
`