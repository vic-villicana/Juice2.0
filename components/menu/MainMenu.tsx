import {useState, useEffect} from 'react'
import { useGlobalContext } from '@/assets/store'
//STYLED COMPONENTS
import { Menu, MenuH1, MenuHead, MenuSelector, MenuBtns, Location, LocationBtn, LocationH1, MenuList, MenuImage, Titles, MenuItem, MenuTitle, MenuPrice, CounterWindow, QuantityCounter, Counter, Plus, Minus } from "./MenuPageElements"
import {HomeHeader, HomeH1, HeaderBtns, StandardButton} from "../home/HomePageElements"
import MenuItemModal from './MenuItemModal'
//AWS PACKAGES 
import { API } from 'aws-amplify';
import { listJuicyMenus } from '@/src/graphql/queries';
import {GraphQLResult} from '@aws-amplify/api-graphql'

//Interface for our DynamoDB data objects
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

export interface SideItems{
    item:string;
    price:number;
    img:string;
}



const menuOptions = [
    {
        menu:'FamilyMeals',
        id:0,
        desc:"We’re committed to continuously evolving our menu so that we’re always WOW-ing our guests with new unexpected flavor combinations. Be sure to check back to discover our Chef’s latest innovations."
    },
    {
        menu:'Dinner Menu',
        id:1,
        desc:"We’re committed to continuously evolving our menu so that we’re always WOW-ing our guests with new unexpected flavor combinations. Be sure to check back to discover our Chef’s latest innovations."
    },
    {
        menu:'a La Carte',
        id:2,
        desc:"Traditional Mexican dinners that are enough to feed the whole family, All plates feed up to two people"
    },
    {
        menu:'Daily Specials',
        id:3,
        desc:"Some of our more unique and seasonal dishes. Get them while they're here. For a limited time!!"
    },
    {
        menu:'Vegan Menu',
        id:4,
        desc:"Yes we even have something for you!"
    },
    {
        menu:'Kids Menu',
        id:5,
        desc:"RECOMMENDED FOR KIDS 8 & UNDER Served with a kids beverage and sliced apples (organic milk add 2.40)"
    },
]

//type checker for our DynamoDB object
function isGraphQLResultForMenu(response: any): response is GraphQLResult<{
    listJuicyMenus: {
        items:[MenuData]
    }
}> {
    return response.data && response.data.listJuicyMenus && response.data.listJuicyMenus.items
}


const MainMenu = () => {
    const {cart, setCart} = useGlobalContext();
    const [openItem, setOpenItem] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState< Number | null>(0)
    // const [cart, setCart] = useState<MenuData[]>([])
    const [menu, setMenu] = useState<MenuData[]>([])
    const [item, setItem] = useState<MenuData>({})
    const [side, setSide ] = useState<SideItems>({
        item:'fries',
        price:3.00,
        img:'/fries.jpg'
    })
    const [allSides, setAllSides] = useState<SideItems[]>([
        {
            item:'fries',
            price:3.00,
            img:'/fries.jpg'
        },
        {
            item:'rice',
            price:3.00,
            img:'/rice.jpg'
        },
        {
            item:'beans',
            price:3.00,
            img:'/beans.jpg'
        },
    ])

    const handleCloseModal = () => {
        setOpenItem(false)
    }
    
    const setTheMenu = (optionId: number) => {
        setSelectedMenu(optionId)
    }

    const chosenMenu = menuOptions.map(option => {
        return(
            <MenuBtns onClick={() => setTheMenu(option.id)} key={option.id}>{option.menu}</MenuBtns> 
        )
    })

    //get all menu items from the dynamodb table and set as menu State
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

    //Sets a selected MenuItem as item state and opens the modal
    const selectMenu = ( selecteditem: MenuData) => {
        setOpenItem(true)
        const newItem = {...selecteditem}
        setItem(newItem)
    }

    useEffect(() => {
        getMenu()
    }, [])

    
    //sort through all the menu items and display currently selected menu from menu state
    const filteredMenu = menu.filter(itemz => itemz.menuId === selectedMenu )

    //map out menu item state data to the MenuItem conponent
    const currentMenu = filteredMenu.map(items => {
        return (
            <MenuItem key={items.id} onClick={() => selectMenu(items)} >
                <MenuImage src={items.img} alt={items.dish} width="100" height="100"/>
                <Titles>
                    <MenuTitle>
                        {items.dish}
                    </MenuTitle>
                    <MenuPrice>
                        ${items.price}.00
                    </MenuPrice>
                </Titles>
            </MenuItem>
        )
    })

    
    
    //functions to increment the quantity value of the item state object
    const increment = () => {
        const newItem = {...item, quantity:item.quantity += 1}
        setItem(newItem)
    }
    const decrement = () => {
        const newItem = {...item, quantity: item.quantity === 1 ? 1 : item.quantity -= 1}
        setItem(newItem)
    }

    const addItem = (elItem: MenuData) => {

        const addItem = {...elItem}
        console.log(cart, addItem)

        setCart([...cart, addItem])
    }

    const chooseSide = (side: SideItems) => {
        const newSide = {...side}
        setSide(newSide)
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
                
                <LocationBtn>Location</LocationBtn>
            </Location>

            <Menu>
                <MenuItemModal 
                    open={openItem}
                    close={handleCloseModal}
                    item={item}
                    increment={increment}
                    decrement={decrement}
                    sides={allSides}
                    side={side}
                    addToCart={addItem}
                    chooseASide={chooseSide}
                />
                <MenuH1>
                    Menu
                </MenuH1>
                <MenuSelector>
                    {chosenMenu}
                </MenuSelector>
                <MenuList>
                    {currentMenu}                    
                </MenuList>
            </Menu>
        </section>
    )
}

export default MainMenu