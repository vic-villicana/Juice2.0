import React, {useEffect, useState} from "react";
import { useStripe } from "@stripe/react-stripe-js"

export default function Completed () {
    const stripe = useStripe()
    const [status, setStatus] = useState<string>()
    const [intentId, setIntentId] = useState<string>()

    useEffect(() => {
        if(!stripe) {
            return
        }
        const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret")

        if (!clientSecret) {
            return;
        }

        //get the current users payment info thorugh the stripe instance.
        stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent}) => {
            if(!paymentIntent) {
                return;
            }

            setStatus(paymentIntent.status)
            setIntentId(paymentIntent.id)

        })

    },[stripe])

    return (
        <div id="payment-status">
            <div id="status-icon">
                {status}
            </div>
            <div id="intent-id">
                {intentId}
            </div>
        </div>
    )


}