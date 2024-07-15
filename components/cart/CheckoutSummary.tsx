import {AddMoreItemsBtn, CheckoutButton, CartPage, CartContainer, CartTitle, CartTitleBold, CartTitleLight, CartItem, OrderSummary, ItemDescription, ShoppingCart, SummaryContainer, FlexContainer} from './CartElements'

export interface CheckoutProps {
    orderCheckout:(event: React.SyntheticEvent) => void
    
}

const CheckoutSummary = (orderCheckout:CheckoutProps) => {
    return (
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
                        
            <CheckoutButton  onClick={orderCheckout}>
                Checkout
            </CheckoutButton>
        </OrderSummary>
    )
}

export default CheckoutSummary