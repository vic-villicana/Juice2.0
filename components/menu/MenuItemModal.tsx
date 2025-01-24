import React from 'react'
//material Ui
import { Modal, Backdrop, Fade } from '@mui/material'
// styled components
import { MenuModalHeader, Choices, Chosen, ChosenHeading, ItemDescription, ItemPrice, MenuBtns, MenuHeader, MenuModal, ModalImage, Options, SubContainer, SubGrid, SubHeading, ModalTitle } from '../menu/MenuPageElements'
import { SmallMenuItem } from './MenuPageElements';
import {  HomeHeader, MainHeader, HomeH1, StandardButton } from '../home/HomePageElements'
import { MenuData, SideItems } from './MainMenuV2';
import {CounterWindow, QuantityCounter, Counter, Plus, Minus } from "./MenuPageElements"

interface MenuModalProps {
    open:boolean,
    close: () => void,
    item: MenuData,
    increase: () => void,
    decrease: () => void
    sides: SideItems[],
    side: SideItems,
    addToCart: (arg0:MenuData) => void,
    chooseASide: (arg0:SideItems) => void
}

const MenuItemModal = ({open, close, item, increase, decrease, sides, side, addToCart, chooseASide}:MenuModalProps) => {

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
                                
                                    <ModalImage src={item.imgUrl} fill={true} alt="food image" />
                                
                            </MenuHeader>
                            <QuantityCounter>
                                <Counter>
                                    <Minus onClick={decrease}>-</Minus>
                                    <CounterWindow>{item.quantity}</CounterWindow>
                                    <Plus onClick={increase}>+</Plus>
                                </Counter>
                                <ModalTitle>{item.name}</ModalTitle>
                            </QuantityCounter>
                            <ItemPrice>${item.price}</ItemPrice>
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
                            <MenuBtns onClick={() => addToCart(item)}>Add To Cart</MenuBtns>
                        </SmallMenuItem>
                    </MenuModal>

                </Fade>
            </Modal>
        </div>
    )
}

export default MenuItemModal