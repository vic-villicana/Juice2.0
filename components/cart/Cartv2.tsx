import {AddMoreItemsBtn, CheckoutButton, CartPage, CartContainer, CartTitle, CartTitleBold, CartTitleLight, CartItem, OrderSummary, ItemDescription, ShoppingCart, SummaryContainer} from './CartElements'
import {useGlobalContext} from "@/assets/store"
import {ButtonLink } from "../home/HomePageElements";

function Cartv2 ()  {

    const {cart, setCart} = useGlobalContext();

    const cartItems = cart.map(item => {
        return (
            <CartItem key={item.id}>
                <SummaryContainer>
                    <CartTitleBold>
                        {item.dish}
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

    return(
        <>
            <CartPage>
                <CartTitle>Shopping Cart</CartTitle>
                <CartContainer>
                    <ShoppingCart>
                        {cartItems}
                    </ShoppingCart>
                    <AddMoreItemsBtn href='/menu' passHref>
                        Add More Items
                    </AddMoreItemsBtn>
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