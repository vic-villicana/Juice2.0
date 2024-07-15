import Stripe from 'stripe'

import {NextResponse} from 'next/server'

import {stripe} from '@/lib/stripe'
import prismadb from '@/lib/prismadb'
const corsHeaders = {
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Methods":"GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
}


export async function OPTIONS() {
    return NextResponse.json({}, {headers: corsHeaders});
}

export async function POST(
    req: Request
) {
    const items = await req.json()
    const itemIds = items.map((item) => ({
        id:item.id
    }))

    if(!items){
        return new NextResponse("Item Ids are missing", {status:400})
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = []

    items.forEach((item) => {
        line_items.push({
            quantity:item.quantity,
            price_data: {
                currency:'USD',
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price.toNumber() * 100
            }
        })
    })

    const order = await prismadb.orderTicket.create({
        data:{
            orderNum:11,
            items:{
                connect: itemIds
            },
            total:'5.00'
        }
    })

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode:"payment",
        billing_address_colection:"required",
        phone_number_collection: {
            enabled: true
        },
        success_url: `${process.env.FRONTEND_URL}/cart?success=1`,
        cancel_url: `${process.env.FRONTEND_URL}/cart?canceled=1`,
        metadata:{
            orderId: order.id
        }
    })

    return NextResponse.json({url:session.url}, {
        headers:corsHeaders
    })

}