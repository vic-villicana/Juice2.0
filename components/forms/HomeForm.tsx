import React from 'react'
import {useForm} from 'react-hook-form'
import { TclientSchema, clientSchema } from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from "react-hot-toast"

import {FormSectionContainer, FormImage, FormSection, TheMessage, FormMessage, FormMessageContainer, FormLabel, FormError, SubmitForm, FormHeading, FormTextarea, FormContainer, Homeform, HomeInput} from './FormElements'

function HomeForm () {
 
    const {
        register,
        handleSubmit,
        formState:{errors, isSubmitting},
        reset,
    } = useForm<TclientSchema>({
        resolver: zodResolver(clientSchema)
    });

    const sendToJuicy = async function(data:TclientSchema){
        const response = await fetch('/api/contact', {
            method:"POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json"
            }
        })
        return response
    }
 
    async function onSubmit(data:TclientSchema) {
        const response = await sendToJuicy(data)
        if(response.status === 500){
            toast.error("Server error, please try again.")
        }else{
            toast.success("Message sent, we will get back to you!")
        }
        console.log(response.status)
        reset()
    }
    return(
        <FormSection id='contact' >
                        {/* <FormMessageContainer>
                <FormMessage>
                    <FormHeading>Bringing The goodtimes</FormHeading>
                    <TheMessage>
                        From our family 
                        recipes to our excellent catering staff, we make 
                        everynight a special night
                    </TheMessage>
                </FormMessage>
            </FormMessageContainer> */}
            <FormSectionContainer>
            <FormImage src="/platos.jpg" height="500" width="1000" layout="responsive" alt="table full of plates"/>
            <FormContainer>
                <FormHeading>Contact Us</FormHeading>
                <TheMessage>
                    Always ready to answer any questions or concerns!
                </TheMessage>
                <Homeform onSubmit={handleSubmit(onSubmit)}>
                    <FormLabel >Name</FormLabel>
                    {errors.name && (<FormError>{`${errors.name.message}`}</FormError>)}
                    <HomeInput type="text" 
                        {...register("name")} />
                    <FormLabel  >Email</FormLabel>
                    {errors.email && (<FormError>{`${errors.email.message}`}</FormError>)}
                    <HomeInput type="email" 
                        {...register("email")} />
                    <FormLabel >How can we help?</FormLabel>
                    {errors.message && (<FormError>{`${errors.message.message}`}</FormError>)}
                    <FormTextarea rows="4" {...register("message")}/>

                    <SubmitForm disabled={isSubmitting} type="submit" >Send It</SubmitForm>
                </Homeform>
            </FormContainer>
            </FormSectionContainer>

            
        </FormSection>
    )
}

export default HomeForm