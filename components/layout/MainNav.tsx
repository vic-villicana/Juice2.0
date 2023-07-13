import {MainNavBar, MainNavlink, Logo, LinkContainer} from './MainNavElements'
import Link from 'next/link'

const MainNav = () => {
    return (
        <header>
            <MainNavBar>
                <Logo />
                <LinkContainer>
                    <MainNavlink href='/'>
                        Home
                    </MainNavlink>
                    <MainNavlink href='/menu'>
                        Order
                    </MainNavlink>
                    <MainNavlink href='/cart'>
                        Cart
                    </MainNavlink>
                </LinkContainer>
                
            </MainNavBar>
        </header>
    )
}

export default MainNav