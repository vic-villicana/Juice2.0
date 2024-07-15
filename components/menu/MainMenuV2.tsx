import {useState, useEffect} from 'react'
import { useGlobalContext } from '@/assets/store'
import Link from 'next/link'
//STYLED COMPONENTS
import { Menu, MenuH1, MenuHead, MenuSelector, MenuBtns, Location, LocationBtn, LocationH1, MenuList, MenuImage, Titles, MenuItem, MenuTitle, MenuPrice } from "./MenuPageElements"
import {HomeHeader, HomeH1, HeaderBtns, StandardButton, ButtonLink} from "../home/HomePageElements"
import MenuItemModal from './MenuItemModal'


//Interface for our DynamoDB data objects
export interface MenuData{
    id:string
    menuId:string;
    name:string;
    price:string;
    imgUrl:string;
    description:string;
    quantity?:number | undefined
}

export interface SideItems{
    item:string;
    price:number;
    img:string;
}



const menuOptions = [

    {
        menu:'Dinner Menu',
        id:'dinner',
        desc:"We’re committed to continuously evolving our menu so that we’re always WOW-ing our guests with new unexpected flavor combinations. Be sure to check back to discover our Chef’s latest innovations."
    },
    {
        menu:'Lunch Menu',
        id:'lunch',
        desc:"Traditional Mexican dinners that are enough to feed the whole family, All plates feed up to two people"
    },
    {
        menu:'Daily Specials',
        id:'specials',
        desc:"Some of our more unique and seasonal dishes. Get them while they're here. For a limited time!!"
    },
    {
        menu:'Vegan Menu',
        id:'vegan',
        desc:"Yes we even have something for you!"
    },
    {
        menu:'FamilyMeals',
        id:'family',
        desc:"We’re committed to continuously evolving our menu so that we’re always WOW-ing our guests with new unexpected flavor combinations. Be sure to check back to discover our Chef’s latest innovations."
    }
]




const MainMenuV2 = () => {
    const {cart, setCart} = useGlobalContext();
    const [openItem, setOpenItem] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState< string>('dinner')
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
    
    const setTheMenu = (optionId: string) => {
        setSelectedMenu(optionId)
    }

    const chosenMenu = menuOptions.map(option => {
        return(
            <MenuBtns onClick={() => setTheMenu(option.id)} key={option.id}>{option.menu}</MenuBtns> 
        )
    })

    //get all menu items from MongoDb atlas and set as menu State
    const getMenu = async () => {
        try{
            const items = await fetch('http://localhost:3001/api/items')
            const parsedItems = await items.json()
            console.log(parsedItems)
            //setMenu
            setMenu(parsedItems)
        }catch(err){
    
            // console.log('GET_CLIENT',err)
        }
    }

    //Sets a selected MenuItem as item state and opens the modal
    const selectMenu = ( selecteditem: MenuData) => {
        setOpenItem(true)
        const newItem = {...selecteditem}
        setItem(newItem)
    }

    useEffect(() => {
        console.log('getting menu')
        getMenu()
    }, [])

    
    //sort through all the menu items and display currently selected menu from menu state
    const filteredMenu = menu.filter(itemz => itemz.menuId === selectedMenu )

    //map out menu item state data to the MenuItem conponent
    const currentMenu = filteredMenu.map(items => {
        const url = items.imgUrl || ''
        console.log(url)
        return (
            <MenuItem key={items.id} onClick={() => selectMenu(items)} >
                <MenuImage src={items.imgUrl}  alt={items.name} width="100" height="100"/>
                <Titles>
                    <MenuTitle>
                        {items.name}
                    </MenuTitle>
                    <MenuPrice>
                        ${items.price}
                    </MenuPrice>
                </Titles>
            </MenuItem>
        )
    })

    
    
    //functions to increment the quantity value of the item state object
    const increment = () => {
        const newItem = {...item, quantity:item.quantity ? item.quantity += 1 : 1}
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
                    </HeaderBtns>
                </HomeHeader>
            </MenuHead>

            <Location>
                <LocationH1>Current Location:</LocationH1>
                <ButtonLink href="/cart">Go To Cart</ButtonLink>
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

export default MainMenuV2