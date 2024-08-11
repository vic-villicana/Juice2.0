import {ItemsList ,ItemQuantity, ItemPrice, ItemName, Item, FlexItems } from "./CartElements";

import type{ MenuData} from '../../assets/store'


const CartItemsList = (props: {items:MenuData[]}) => {
 

    const items = props.items.map((item, index) => {
        return (
            <div key={index}>
                <Item>
                    <ItemName>{item.name}</ItemName>   
                    <FlexItems>
                        <ItemPrice>{item.price}</ItemPrice>
                        <ItemQuantity>{item.quantity}</ItemQuantity>
                    </FlexItems>  
                </Item>
            </div>
        )
    })


    return(
        <ItemsList>
            {items}
        </ItemsList>
    )
}

export default CartItemsList