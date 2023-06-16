import {useState} from 'react'

import { Menu, MenuH1, MenuHead, MenuSelector, MenuBtns, Location, LocationBtn, LocationH1, MenuList, MenuImage, Titles, MenuItem, MenuTitle, MenuPrice } from "./MenuPageElements"
import {HomeHeader, HomeH1, HeaderBtns, StandardButton} from "../home/HomePageElements"
import MenuItemModal from './MenuItemModal'


const MainMenu = () => {
    const [openItem, setOpenItem] = useState(false)

    const handleCloseModal = () => {
        setOpenItem(false)
    }
    
    const handleSelectItem = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        setOpenItem(true)
    }
    return(
        <section>
            <MenuHead>
                <HomeHeader>
                    <HomeH1>
                        Try the New Juicy Combo!
                    </HomeH1>
                    <HeaderBtns>
                        <StandardButton>
                            Order Now
                        </StandardButton>
                        {/* <StandardButton>
                            Book Event
                        </StandardButton> */}
                    </HeaderBtns>
                </HomeHeader>
            </MenuHead>

            <Location>
                <LocationH1>Current Location:</LocationH1>
                {}
                <LocationBtn>Location</LocationBtn>
            </Location>

            <Menu>

                <MenuItemModal 
                    open={openItem}
                    close={handleCloseModal}
                />
                
                <MenuH1>
                    Menu
                </MenuH1>
                <MenuSelector>
                        <MenuBtns>Family Meals</MenuBtns>
                        <MenuBtns>Dinner Menu</MenuBtns>
                        <MenuBtns>a La Carte</MenuBtns>
                        <MenuBtns>Daily Specials</MenuBtns>
                        <MenuBtns>Vegan Menu</MenuBtns>
                        <MenuBtns>Kids Menu</MenuBtns>
                </MenuSelector>
                <MenuList>
                    <MenuItem onClick={handleSelectItem}>
                        <MenuImage src="" alt=""/>
                        <Titles>
                            <MenuTitle>
                                Enchiladas
                            </MenuTitle>
                            <MenuPrice>
                                $5.00
                            </MenuPrice>
                        </Titles>
                    </MenuItem>
                    <MenuItem>
                        <MenuImage src="" alt=""/>
                        <Titles>
                            <MenuTitle>
                                Enchiladas
                            </MenuTitle>
                            <MenuPrice>
                                $5.00
                            </MenuPrice>
                        </Titles>
                    </MenuItem>
                    <MenuItem>
                        <MenuImage src="" alt=""/>
                        <Titles>
                            <MenuTitle>
                                Enchiladas
                            </MenuTitle>
                            <MenuPrice>
                                $5.00
                            </MenuPrice>
                        </Titles>
                    </MenuItem>
                    <MenuItem>
                        <MenuImage src="" alt=""/>
                        <Titles>
                            <MenuTitle>
                                Enchiladas
                            </MenuTitle>
                            <MenuPrice>
                                $5.00
                            </MenuPrice>
                        </Titles>
                    </MenuItem>
                    <MenuItem>
                        <MenuImage src="" alt=""/>
                        <Titles>
                            <MenuTitle>
                                Enchiladas
                            </MenuTitle>
                            <MenuPrice>
                                $5.00
                            </MenuPrice>
                        </Titles>
                    </MenuItem>
                    <MenuItem>
                        <MenuImage src="" alt=""/>
                        <Titles>
                            <MenuTitle>
                                Enchiladas
                            </MenuTitle>
                            <MenuPrice>
                                $5.00
                            </MenuPrice>
                        </Titles>
                    </MenuItem>
                    
                </MenuList>
            </Menu>
        </section>
    )
}

export default MainMenu