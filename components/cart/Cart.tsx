import { AddMoreItems, AddMoreItemsBtn, CartC, CartTotal, CheckoutButton, DetailsBtn, ItemCart, OrderDetails } from "./CartPageElements"
import {CartBG} from "@/components/cart/CartPageElements"
import pattern from "../../public/pattern.jpg"
import { useGlobalContext } from "@/assets/store"

const Cart = () => {
    const {cart, setCart} = useGlobalContext();
    console.log(cart)

    return(
        <CartC>
            <CartBG 
                src="/pattern.jpg"
                alt="Mexica Pattern"
                layout="fill"
                objectFit="cover"
            />
            <OrderDetails>
                <DetailsBtn>
                    OrderType
                </DetailsBtn>
                <DetailsBtn>
                    When
                </DetailsBtn>
                <AddMoreItems>
                    <AddMoreItemsBtn>
                        Add More Items
                    </AddMoreItemsBtn>
                </AddMoreItems>
                <ItemCart>
                    Items:
                </ItemCart>
                <CartTotal>
                    Total:
                </CartTotal>
                <CheckoutButton>
                    Checkout
                </CheckoutButton>
            </OrderDetails>
        </CartC>
    )
}

export default Cart