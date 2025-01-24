import {useState, useEffect} from 'react'
import { Locale, useGlobalContext } from '@/assets/store'
import Link from 'next/link'
//STYLED COMPONENTS
import {MenuHImage, MenuHomeHeader, Menu, MenuH1, MenuHead, MenuSelector, MenuBtns, MenuList, MenuImage, Titles, MenuItem, MenuTitle, MenuPrice, MenuHeaderImage } from "./MenuPageElements"
import {HomeH1, HeaderBtns, StandardButton, ButtonLink} from "../home/HomePageElements"
import LocationPicker from '../location/LocationPicker' 
import MenuItemModal from './MenuItemModal'


import {MenuData} from '@/assets/store'

//Interface for our DynamoDB data objects
// export interface MenuData{
//     id:string
//     menuId:string;
//     name:string;
//     price:string;
//     imgUrl:string;
//     description:string;
//     quantity?:number | undefined
// }

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
    const {cart, setCart, location, setLocation} = useGlobalContext();
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

    useEffect(() => {
        console.log('getting menu')
        getMenu()
    }, [])

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
    const increase = () => {
        const newItem = {...item, quantity:item.quantity ? item.quantity += 1 : 1}
        setItem(newItem)
    }
    const decrease = () => {
        const newItem = {...item, quantity: item.quantity === 1 ? 1 : item.quantity -= 1}
        setItem(newItem)
    }

    const chooseSide = (side: SideItems) => {
        const newSide = {...side}
        setSide(newSide)
    }

    const addItem = (elItem: MenuData) => {
        const menuItem = {...elItem}
        
        setCart([...cart, menuItem])
    }

    const locationSetter = (city: Locale) => {
        setLocation(city)
    }

    return(
        <section>
            <MenuHead>
                <MenuHImage src="/mexicantable.jpg" style={{objectFit:"cover"}} fill={true} alt="people around dinner table" />
                <MenuHomeHeader>
                    <HomeH1>
                        Try the New Juicy Combo!
                    </HomeH1>
                    <HeaderBtns>
                        <StandardButton>
                            Order Now
                        </StandardButton>
                    </HeaderBtns>
                </MenuHomeHeader>
            </MenuHead>

            <LocationPicker city={location} locationSetter={locationSetter}/>
 

            <Menu>
                <MenuItemModal 
                    open={openItem}
                    close={handleCloseModal}
                    item={item}
                    increase={increase}
                    decrease={decrease}
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