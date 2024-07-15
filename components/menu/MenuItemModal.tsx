import React from 'react'
//material Ui
import { Modal, Backdrop, Fade } from '@mui/material'
// styled components
import { Choices, Chosen, ChosenHeading, ItemDescription, ItemPrice, MenuButton, MenuHeader, MenuModal, Options, SubContainer, SubGrid, SubHeading } from '../menu/MenuPageElements'
import { SmallMenuItem } from './MenuPageElements';
import {  HomeHeader, MainHeader, HomeH1, StandardButton } from '../home/HomePageElements'
import { MenuData, SideItems } from './MainMenuV2';
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
    chooseASide: (arg0:SideItems) => void
}

const MenuItemModal = ({open, close, item, increment, decrement, sides, side, addToCart, chooseASide}:MenuModalProps) => {

    const renderSides = sides.map((sideDish, i) => {
            if(sideDish.item === side.item){
                return null
            }else{
                return (
                    <Options onClick={() => chooseASide(sideDish)} key={sideDish.item} src={sideDish.img} height='150' width='150' alt={sideDish.price} />
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
                            <MenuHeader>
                                <HomeHeader>
                                    <HomeH1>{item.name}</HomeH1>
                                </HomeHeader>
                            </MenuHeader>
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
                                <ChosenHeading>
                                    Options:
                                </ChosenHeading>
                                <Choices>
                                    {renderSides}
                                </Choices>
                            </SubGrid>
                            <MenuButton onClick={() => addToCart(item)}>Add To Cart</MenuButton>
                        </SmallMenuItem>
                    </MenuModal>

                </Fade>
            </Modal>
        </div>
    )
}

export default MenuItemModal