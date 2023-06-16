import React from 'react'
//material Ui
import { Modal, Backdrop, Fade } from '@mui/material'
// styled components
import { MenuModal } from '../menu/MenuPageElements'
import { SmallMenuItem } from './MenuPageElements';
import {  HomeHeader, MainHeader, HomeH1 } from '../home/HomePageElements'

interface MenuModalProps {
    open:boolean,
    close: () => void;
}

const MenuItemModal = ({open, close}:MenuModalProps) => {
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
                                    <HomeH1>Holla!!!!</HomeH1>
                                </HomeHeader>
                            </MainHeader>
                        </SmallMenuItem>
                    </MenuModal>

                </Fade>
            </Modal>
        </div>
    )
}

export default MenuItemModal