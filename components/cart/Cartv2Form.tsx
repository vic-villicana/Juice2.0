import {useState} from 'react'
import {useEffect} from 'react'
import {FieldValues, useForm} from 'react-hook-form'

import {PaymentElement, useStripe, useElements} from "@stripe/react-stripe-js"
import {StripePaymentElementOptions, StripeElementsOptions} from "@stripe/stripe-js"


import { useGlobalContext } from '@/assets/store'

import { Modal, Backdrop, Fade } from '@mui/material'

import { CartV2Container, CheckoutFormContainer, CheckoutOrderContainer, SubmitOrder } from './Cartv2ModalElements'
import { CartTitle, CartTitleBold, CartTitleLight, CartItem, SummaryContainer } from './CartElements'
import { FormHeading, HomeInput } from '../forms/FormElements'

interface Cartv2Props {
    open:boolean,
    close:() => void
    dpmCheckerLink:string
}

interface OrderData{
    firstName:string,
    lastName:string,
    email:string
}


const CartV2Modal = ({open, close, dpmCheckerLink}: Cartv2Props) => {
    const {cart, setCart} = useGlobalContext()
    const [message, setMessage] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const elements = useElements()
    const stripe = useStripe()

    const {
        register, 
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
        getValues
    } = useForm()

    // useEffect(()=> {
    //     socket.emit('ready', {})
    //     console.log(socket.id)

    // },[])
    
    const onSubmit = async (data:FieldValues) => {
        setIsLoading(true)
        console.log(cart)
        if(!stripe || !elements) {
            return
        }
        // socket event should be sent after a purchse has been processed
        // socket.emit("orderSubmitted",{
        //     firstName:data.firstName,
        //     lastname:data.lastName,
        //     email:data.email,
        //     items:cart
        // })

        //we want to make an invocation to our stripe function to submit our cart
        const {error} = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:3001/completed"
            }
        })

        if(error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message)
        }else{
            setMessage("something went wrong")
        }
        setIsLoading(false)
        reset()
    }

    const cartItems = cart.map(item => {
        return <CartItem key={item.id}>
                <SummaryContainer>
                    <CartTitleBold>
                        {item.name}
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

    const paymentElementOptions:StripePaymentElementOptions = {
        layout: "tabs",
    }

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
                        <CheckoutFormContainer onSubmit={handleSubmit(onSubmit)}>
                            {/* <FormHeading>Guest Information</FormHeading>
                            <HomeInput {...register("firstName", {required:"first name is required"})} type="text" placeholder="First Name"/>
                            <HomeInput {...register("lastName", {required:"last name is required"})} type="text" placeholder="Last Name"/>
                            <HomeInput {...register("email", {required:"email required"})}   type="text" placeholder="Email"/> */}
                            <PaymentElement id="payment-element" options={paymentElementOptions} />
                            <SubmitOrder disabled={isLoading} type="submit" id="submit">
                                <span id="buttone-text" >
                                    {isLoading ? "Submitting" : "Pay Now"}
                                </span>
                            </SubmitOrder>
                            {message && <div id="payment-message">{message}</div>}

                        </CheckoutFormContainer>
                        <CheckoutOrderContainer>
                            <CartTitleLight >Your Order</CartTitleLight>
                            {cartItems}
                        </CheckoutOrderContainer>
                    </CartV2Container>
                    
                </Fade>
            </Modal>
        </>
    )
}

export default CartV2Modal