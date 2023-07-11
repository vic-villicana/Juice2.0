import { AddMoreItems, AddMoreItemsBtn, CartC, CartTotal, CheckoutButton, DetailsBtn, ItemCart, OrderDetails } from "./CartPageElements"
import {CartBG} from "@/components/cart/CartPageElements"
import { useGlobalContext } from "@/assets/store"
import {ButtonLink } from "../home/HomePageElements";

const Cart = () => {
    const {cart, setCart} = useGlobalContext();

    const showCart = cart.map(item => {
        return <h1 key={item.id}>{item.dish}</h1>
    })
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
                    <ButtonLink href='/menu' passHref>
                        Add More Items
                    </ButtonLink>
                </AddMoreItems>
                <ItemCart>
                    Items:
                    {showCart}
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