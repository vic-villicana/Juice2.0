import {useState, useEffect} from 'react'
//STYLED COMPONENTS
import { Menu, MenuH1, MenuHead, MenuSelector, MenuBtns, Location, LocationBtn, LocationH1, MenuList, MenuImage, Titles, MenuItem, MenuTitle, MenuPrice } from "./MenuPageElements"
import {HomeHeader, HomeH1, HeaderBtns, StandardButton} from "../home/HomePageElements"
import MenuItemModal from './MenuItemModal'
//AWS PACKAGES 
import { API } from 'aws-amplify';
import { listJuicyMenus } from '@/src/graphql/queries';
import {GraphQLResult} from '@aws-amplify/api-graphql'


export interface MenuData{
    id: string;
    menuId:number;
    menuItemId:number;
    dish:string;
    img:string;
    price:number;
    description:string;
    quantity:number;
}

function isGraphQLResultForMenu(response: any): response is GraphQLResult<{
    listJuicyMenus: {
        items:[MenuData]
    }
}> {
    return response.data && response.data.listJuicyMenus && response.data.listJuicyMenus.items
}

const MainMenu = () => {
    const [openItem, setOpenItem] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState< Number | null>(0)
    const [menu, setMenu] = useState<MenuData[]>([])
    const [item, setItem] = useState<MenuData | {}>({})

    const handleCloseModal = () => {
        setOpenItem(false)
    }
    
    const handleSelectItem = async (e: React.SyntheticEvent) => {
        e.preventDefault()
    }

    //keep the state of the currently selected menu 

    //get all menu items from the dynamodb table
    const getMenu = async () => {
        try{
            const response = await API.graphql<MenuData>({
                query:listJuicyMenus,
                authMode:"AWS_IAM"
            })
            if(!isGraphQLResultForMenu(response)){
                throw new Error('unexpected response from API.graphql')
            }
            if(!response.data){
                throw new Error('Response data is undefined')
            }
            const theMenu = response.data.listJuicyMenus.items

            setMenu(theMenu)

        }catch(err){
    
            console.log(err)
        }
    }

    const selectMenu = ( item: MenuData) => {
        setOpenItem(true)
        setItem(item)
    }

    useEffect(() => {
        getMenu()
    }, [])

    //find some way to store all the data from the appsync dynamodb call
    
    //sort through all the menu items and display currently selected menuitems
    const filteredMenu = menu.filter(item => item.menuId === selectedMenu )


    const currentMenu = filteredMenu.map(item => {
        return (
            <MenuItem key={item.id} onClick={() => selectMenu(item)} >
                <MenuImage src={item.img} alt={item.dish} width="100" height="100"/>
                <Titles>
                    <MenuTitle>
                        {item.dish}
                    </MenuTitle>
                    <MenuPrice>
                        ${item.price}.00
                    </MenuPrice>
                </Titles>
            </MenuItem>
        )
    })
    //store the state of the currently selected item.

    //render the currently selected menu item to the ui
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
                    item={item}
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
                    {currentMenu}                    
                </MenuList>
            </Menu>
        </section>
    )
}

export default MainMenu