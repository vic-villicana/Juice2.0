import React from 'react'
//material Ui
import { Modal, Backdrop, Fade } from '@mui/material'
// styled components
import { Choices, Chosen, ChosenHeading, ItemDescription, ItemPrice, MenuModal, Option, Options, SubContainer, SubGrid, SubHeading } from '../menu/MenuPageElements'
import { SmallMenuItem } from './MenuPageElements';
import {  HomeHeader, MainHeader, HomeH1, StandardButton } from '../home/HomePageElements'
import { MenuData, SideItems } from './MainMenu';
import {CounterWindow, QuantityCounter, Counter, Plus, Minus } from "./MenuPageElements"

interface MenuModalProps {
    open:boolean,
    close: () => void,
    item: MenuData,
    increment: () => void,
    decrement: () => void
    sides: SideItems[],
    side: SideItems,
    addToCart: (arg0:MenuData) => void,
}

const MenuItemModal = ({open, close, item, increment, decrement, sides, side, addToCart}:MenuModalProps) => {

    const renderSides = sides.map((sideDish, i) => {
            if(sideDish.item === side.item){
                return null
            }else{
                return (
                    <Options key={sideDish.item} src={sideDish.img} height='150' width='150' alt={sideDish.price} />
                )
            }
        })
    

    console.log(renderSides)
    return(
        <div>
            <Modal
                id="MenuItemModal"
                aria-labelledby="spring-modal-MenuItemModal"
                aria-describedby="spring-modal-opens-and-closes-MenuItemModal"
                open={open}
                onClose={close}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout:500,
                }}
            >
                <Fade in={open}>
                    <MenuModal>
                        <SmallMenuItem>
                            <MainHeader>
                                <HomeHeader>
                                    <HomeH1>{item.dish}</HomeH1>
                                </HomeHeader>
                            </MainHeader>
                            <QuantityCounter>
                                <Counter>
                                    <Plus onClick={increment}>+</Plus>
                                    <CounterWindow>{item.quantity}</CounterWindow>
                                    <Minus onClick={decrement}>-</Minus>
                                </Counter>
                            </QuantityCounter>
                            <ItemPrice>${item.price}.00</ItemPrice>
                            <ItemDescription>
                                {item.description}
                            </ItemDescription>
                            <SubContainer>
                                <SubHeading>
                                    Substitions
                                </SubHeading>
                            </SubContainer>
                            <ChosenHeading>
                                    Selected:
                            </ChosenHeading>
                            <SubGrid>
                                <Choices>
                                    <Chosen src={side.img} alt={side.item} height={150} width={315}  />
                                </Choices>
                                <Choices>
                                    {renderSides}
                                </Choices>
                            </SubGrid>
                            <StandardButton onClick={() => addToCart(item)}>Add To Cart</StandardButton>
                        </SmallMenuItem>
                    </MenuModal>

                </Fade>
            </Modal>
        </div>
    )
}

export default MenuItemModal