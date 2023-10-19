import {CheckoutButton, CartPage, CartContainer, CartTitle, CartTitleBold, CartTitleLight, CartItem, OrderSummary, ItemDescription, ShoppingCart, SummaryContainer} from './CartElements'
import {  } from './CartPageElements'


function Cartv2 ()  {
    return(
        <>
            <CartPage>
                <CartTitle>Shopping Cart</CartTitle>
                <CartContainer>
                    <ShoppingCart>
                        <CartItem>
                            <CartTitleBold>
                                Juizy Burrito
                            </CartTitleBold>
                            <ItemDescription>
                                Juicy Burrito with rice beans onions tomato steack and hot sauce
                            </ItemDescription>
                            <CartTitleLight>
                                $5.79
                            </CartTitleLight>
                        </CartItem>
                        <CartItem>
                            <CartTitleBold>
                                Juizy Burrito
                            </CartTitleBold>
                            <ItemDescription>
                                Juicy Burrito with rice beans onions tomato steack and hot sauce
                            </ItemDescription>
                            <CartTitleLight>
                                $5.79
                            </CartTitleLight>
                        </CartItem>
                        <CartItem>
                            <CartTitleBold>
                                Juizy Burrito
                            </CartTitleBold>
                            <ItemDescription>
                                Juicy Burrito with rice beans onions tomato steack and hot sauce
                            </ItemDescription>
                            <CartTitleLight>
                                $5.79
                            </CartTitleLight>
                        </CartItem>
                    </ShoppingCart>
                    
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
                        
                        <CheckoutButton>
                            Checkout
                        </CheckoutButton>
                    </OrderSummary>

                </CartContainer>
            </CartPage>
        </>
    )
}

export default Cartv2