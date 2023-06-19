import React from 'react'
//material Ui
import { Modal, Backdrop, Fade } from '@mui/material'
// styled components
import { ItemDescription, ItemPrice, MenuModal } from '../menu/MenuPageElements'
import { SmallMenuItem } from './MenuPageElements';
import {  HomeHeader, MainHeader, HomeH1 } from '../home/HomePageElements'
import { MenuData } from './MainMenu';

interface MenuModalProps {
    open:boolean,
    close: () => void,
    item: MenuData
}

const MenuItemModal = ({open, close, item}:MenuModalProps) => {
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
                            <ItemPrice>${item.price}.00</ItemPrice>
                            <ItemDescription>
                                {item.description}
                            </ItemDescription>
                        </SmallMenuItem>
                    </MenuModal>

                </Fade>
            </Modal>
        </div>
    )
}

export default MenuItemModal