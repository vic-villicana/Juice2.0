import {useState} from 'react'
import { useGlobalContext } from '@/assets/store'

import { Modal, Backdrop, Fade } from '@mui/material'

import { CartV2Container, CheckoutFormContainer, CheckoutOrderContainer } from './Cartv2ModalElements'
import { CartTitle, CartTitleBold, CartTitleLight, CartItem, SummaryContainer } from './CartElements'
import { FormHeading, HomeInput } from '../forms/FormElements'

interface Cartv2Props {
    open:boolean,
    close:() => void
}

const CartV2Modal = ({open, close}: Cartv2Props) => {
    const {cart, setCart} = useGlobalContext()

    const cartItems = cart.map(item => {
        return <CartItem key={item.id}>
                <SummaryContainer>
                    <CartTitleBold>
                        {item.dish}
                    </CartTitleBold>

                    <CartTitleLight>
                        ${item.price}
                    </CartTitleLight>
                </SummaryContainer>
                <CartTitleLight>
                    x{item.quantity}
                </CartTitleLight>
            </CartItem>
    })

    return (
        <>
            <Modal 
                id="CheckoutModal"
                open={open}
                onClose={close}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout:500
                }}
            >
                <Fade in={open}>
                    <CartV2Container>
                        <CartTitle>Checkout</CartTitle>
                        <CheckoutFormContainer>
                            <FormHeading>Guest Information</FormHeading>
                            <HomeInput type="text" placeholder="First Name"/>
                            <HomeInput type="text" placeholder="Last Name"/>
                            <HomeInput type="text" placeholder="Email"/>
                        </CheckoutFormContainer>
                        <CheckoutOrderContainer>
                            <CartTitleLight>Your Order</CartTitleLight>
                            {cartItems}
                        </CheckoutOrderContainer>
                    </CartV2Container>
                </Fade>
            </Modal>
        </>
    )
}

export default CartV2Modal