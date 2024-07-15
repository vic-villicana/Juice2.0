import Stripe from 'stripe';
import {headers} from 'next/headers'
import {NextResponse} from 'next/server'

import {stripe} from '@/lib/stripe'
import prismadb from '@/lib/prismadb'

export async function POST (req:Request){
    const body = await req.json()
    const signature = headers().get("Stripe-signature") as string
    
    let event: Stripe.Event;

    try{
        event = stripe.webhooks.constructEvent({
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET
        })
    }catch(error: any){
        return new NextResponse(`webHook Error: ${error.message}`, {status:400})
    }

    const session = event.data.object as Stripe.Checkout.Session

    const customer = session?.customer_details?.name
    const customerEmail = session?.customer_details?.email

    //filter through the customer name string and seperate first and lastName

 if(event.type === "checkout.session.completed"){
    const order = await prismadb.orderTicket.update({
        where: {
            id: session?.metadata?.orderId
        },
        data:{
            customer:{
                create:{
                    firstName:customer?.first,
                    lastName:customer?.last,
                    email:customer?.customerEmail,
                }
            }
        },
        include:{
            items:true
        }
    })
 }
 return new NextResponse(null, {status:200})


}