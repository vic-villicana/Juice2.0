import {useState, useEffect} from 'react'
import React from 'react'
import {useSearchParams} from 'next/navigation'
import {toast} from 'react-hot-toast'
import {useGlobalContext} from "@/assets/store"


import {AddMoreItemsBtn, CheckoutButton, CartPage, CartContainer, CartTitle, CartTitleBold, CartTitleLight, CartItem, OrderSummary, ItemDescription, ShoppingCart, SummaryContainer, FlexContainer} from './CartElements'
import { CheckoutNotes } from './Cartv2ModalElements'
import {ButtonLink } from "../home/HomePageElements";
import CartV2Modal from './Cartv2Modal';
import CheckoutSummary from './CheckoutSummary'

function Cartv2 () { 
    const searchParams = useSearchParams();
    const {cart, setCart} = useGlobalContext();
    const [openModal, setOpenModal] = useState(false);
 
    useEffect(() => {
        if(searchParams.get('success')){
            toast.success('Order Submitted Successfully')
        }

        if((searchParams.get('cancelled'))){
            toast.error('something went wrong')
        }
    }, [SearchParams])

    const cartItems = cart.map(item => {
        return (
            <CartItem key={item.id}>
                <SummaryContainer>
                    <CartTitleBold>
                        {item.name}
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
        // const response = await fetch(`${process.env.FRONTEND_URL/checkout}`, {
        //     method:"POST",
        //     mode:"cors",
        //     cache:"no-cache",
        //     credentials:"same-origin",
        //     headers:{
        //         "Content-Type": "application/json",
        //     },
        //     body:JSON.stringify(cart)

        // })
        // window.location = response.data.url
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
                    <CheckoutSummary orderCheckout={openOrderCheckoutModal}/>
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