import {useState, useEffect} from 'react'
import React from 'react'
import {useSearchParams} from 'next/navigation'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

import {toast} from 'react-hot-toast'
import {useGlobalContext} from "@/assets/store"

import {loadStripe} from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"


import {AddMoreItemsBtn, CheckoutButton, CartPage, CartContainer, CartTitle, CartTitleBold, CartTitleLight, CartItem, OrderSummary, ItemDescription, ShoppingCart, SummaryContainer, FlexContainer} from './CartElements'
import { CheckoutNotes } from './Cartv2ModalElements'

import CartItemsList from './CartItemsList'
import CartV2Form from './Cartv2Form';
import CheckoutSummary from './CheckoutSummary'

import priceConverter from '@/lib/utils/priceTypeConverter'



const stripePromise = loadStripe("pk_test_51QFozFJQu9lnDFH0iKy9yg2g57rSyzicUipVTbiy6dlOJPxPv0HtlBnaQon6tVltofJjJmoPElJw0GPPuGPfgqDC00mm8TTk5B")

function Cartv2 () { 
    const searchParams = useSearchParams();
    const {cart, setCart} = useGlobalContext();
    const [openModal, setOpenModal] = useState(false);

    const [clientSecret, setClientSecret] = useState()
    const [dpmCheckerLink, setDpmCheckerLink] = useState<string>("")
    const [confirmed, setConfirmed] = useState()
 
    // useEffect(() => {
    //     //get query parameters for stripe payment completion
    //     //and render page depending on the parameters value
    //     if(searchParams.get('success')){
    //         toast.success('Order Submitted Successfully')
    //     }

    //     if((searchParams.get('cancelled'))){
    //         console.log(searchParams)
    //         toast.error('something went wrong')
    //     }
    // }, [searchParams])

    // const cartItems = cart.map(item => {
    //     return (
    //         <CartItem key={item.id}>
    //             <SummaryContainer>
    //                 <CartTitleBold>
    //                     {item.name}
    //                 </CartTitleBold>
    //                 <ItemDescription>
    //                     {item.description}
    //                 </ItemDescription>
    //                 <CartTitleLight>
    //                     ${item.price}
    //                 </CartTitleLight>
    //             </SummaryContainer>
    //             <CartTitleLight>
    //                 x{item.quantity}
    //             </CartTitleLight>
    //         </CartItem>
    //     )
    // })


    const openOrderCheckoutModal = (e: React.SyntheticEvent) => {
        //I want to make our payment intent request when we click the 
        //checkout button.
        const data = priceConverter(cart)
        console.log(JSON.stringify(data))
        
        fetch("http://localhost:3000/juizepay", {
            method:"POST",
            mode:"cors",
            cache:"no-cache",
            credentials:"same-origin",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(cart.toString())

        })
        .then((res) => res.json())
        .then((response) => {
            // I then want to store my client secret state 
            setClientSecret(response.clientSecret)
            setDpmCheckerLink(response.dpmCheckerLink)
        })

        // window.location = response.data.url
        

        e.preventDefault()
        setOpenModal(true)
    }

    const handleClose = () => {
        setOpenModal(false)
    }
    console.log(cart)
    return(
        <>
            <CartPage>
                <CartTitle>Shopping Cart</CartTitle>
                <CartContainer>
                    <ShoppingCart>
                        <CartItemsList items={cart} />
                        <FlexContainer>
                            <CartTitleLight>Special Requests</CartTitleLight>
                            <CheckoutNotes></CheckoutNotes>
                        </FlexContainer>
                    </ShoppingCart>
                    <CheckoutSummary orderCheckout={openOrderCheckoutModal}/>
                    
                </CartContainer>
                {clientSecret && (
                    <Elements options={clientSecret} stripe={stripePromise}>
                        <CartV2Form open={openModal} close={handleClose} dpmCheckerLink={dpmCheckerLink}/>
                    </Elements>
                )}
            </CartPage>
        </>
    )
}

export default Cartv2