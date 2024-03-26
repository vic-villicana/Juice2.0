import {useState} from 'react'
import {useEffect} from 'react'
import {FieldValues, useForm} from 'react-hook-form'

import socket from '../../pages/socket'

import { useGlobalContext } from '@/assets/store'

import { Modal, Backdrop, Fade } from '@mui/material'

import { CartV2Container, CheckoutFormContainer, CheckoutOrderContainer, SubmitOrder } from './Cartv2ModalElements'
import { CartTitle, CartTitleBold, CartTitleLight, CartItem, SummaryContainer } from './CartElements'
import { FormHeading, HomeInput } from '../forms/FormElements'

interface Cartv2Props {
    open:boolean,
    close:() => void
}

interface OrderData{
    firstName:string,
    lastName:string,
    email:string
}

const CartV2Modal = ({open, close}: Cartv2Props) => {
    const {cart, setCart} = useGlobalContext()
    
    const {
        register, 
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
        getValues
    } = useForm()

    useEffect(()=> {
        socket.emit('ready', {})
        console.log(socket.id)

    },[])
    
    const onSubmit = (data:FieldValues) => {
        console.log(cart)
        socket.emit("orderSubmitted",{
            firstName:data.firstName,
            lastname:data.lastName,
            email:data.email,
            items:cart
        })
        
        reset()
    }

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
                        <CheckoutFormContainer onSubmit={handleSubmit(onSubmit)}>
                            <FormHeading>Guest Information</FormHeading>
                            <HomeInput {...register("firstName", {required:"first name is required"})} type="text" placeholder="First Name"/>
                            <HomeInput {...register("lastName", {required:"last name is required"})} type="text" placeholder="Last Name"/>
                            <HomeInput {...register("email", {required:"email required"})}   type="text" placeholder="Email"/>
                            <SubmitOrder disabled={isSubmitting} type="submit">Submit Order</SubmitOrder>

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