import {useState} from 'react'
import React from 'react'
import {AddMoreItemsBtn, CheckoutButton, CartPage, CartContainer, CartTitle, CartTitleBold, CartTitleLight, CartItem, OrderSummary, ItemDescription, ShoppingCart, SummaryContainer, FlexContainer} from './CartElements'
import { CheckoutNotes } from './Cartv2ModalElements'
import {useGlobalContext} from "@/assets/store"
import {ButtonLink } from "../home/HomePageElements";
import CartV2Modal from './Cartv2Modal';

function Cartv2 ()  { 

    const {cart, setCart} = useGlobalContext();
    const [openModal, setOpenModal] = useState(false);

    const cartItems = cart.map(item => {
        return (
            <CartItem key={item.id}>
                <SummaryContainer>
                    <CartTitleBold>
                        {item.dish}
                    </CartTitleBold>
                    <ItemDescription>
                        {item.description}
                    </ItemDescription>
                    <CartTitleLight>
                        ${item.price}
                    </CartTitleLight>
                </SummaryContainer>
                <CartTitleLight>
                    x{item.quantity}
                </CartTitleLight>
            </CartItem>
        )
    })


    const openOrderCheckoutModal = async (e: React.SyntheticEvent) => {
        // const response = await fetch('http://localhost:3000', {
        //     method:"POST",
        //     mode:"cors",
        //     cache:"no-cache",
        //     credentials:"same-origin",
        //     headers:{
        //         "Content-Type": "application/json",
        //     },
        //     body:JSON.stringify(cart)

        // })

        e.preventDefault()
        setOpenModal(true)
    }

    const handleClose = () => {
        setOpenModal(false)
    }

    return(
        <>
            <CartPage>
                <CartTitle>Shopping Cart</CartTitle>
                <CartContainer>
                    <ShoppingCart>
                        {cartItems}
                        <FlexContainer>
                            <CartTitleLight>Special Requests</CartTitleLight>
                            <CheckoutNotes></CheckoutNotes>
                        </FlexContainer>

                    </ShoppingCart>
                    <AddMoreItemsBtn href='/menu' passHref>
                        Add More Items
                    </AddMoreItemsBtn>
                    <OrderSummary>
                        <SummaryContainer>
                            <CartTitleBold>
                                Order Summary
                            </CartTitleBold>
                            <CartTitleLight>
                                Subtotal:
                            </CartTitleLight>
                            <CartTitleLight>
                                Taxes & Fees:
                            </CartTitleLight>
                            <CartTitleLight>
                                Order Total:
                            </CartTitleLight>
                        </SummaryContainer>
                        
                        <CheckoutButton onClick={openOrderCheckoutModal}>
                            Checkout
                        </CheckoutButton>
                    </OrderSummary>
                    <CartV2Modal open={openModal} close={handleClose}/>
                </CartContainer>
            </CartPage>
        </>
    )
}

export default Cartv2