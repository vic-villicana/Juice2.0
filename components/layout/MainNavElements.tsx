import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components'


export const MainNavBar = styled.nav`
    display:flex;
    justify-content: space-between;
    min-height:8vh;
    align-items:center;
    padding:0 1.5em;
    color:white;
    background:rgba(16, 214, 92, 0.877);
`;

export const MainNavlink = styled(Link)`
    color:white;
    text-decoration: none;
    
`;

export const LinkContainer = styled.div`
        display: flex;
    justify-content: space-evenly;
    width:30%;
    list-style: none;
    top: auto;
    position: relative;
    background: none;
    flex-direction: row;
    height: auto;
    transform: translateX(0%);
`;

export const Logo = styled(Image)`
    height: 3em;
    width: 3em;
`;