//i want to store the state that both my cart and mainMenu components share
//the only two components that need to share state are the MainMenu Component
//and the cart component.
//the only piece of state that the cart needs is the contents of the cart state.
//therefor we need our context state provider to give us the state of the cart.
// the rest of the state can stay with the main menu component since the cart 
//the cart doesnt need to know what the currently selected item is or what the menu is.
//although we need to keep track of the state variables that the cart component utilizes
//if our cart needs data from the items state then we need to include that into our store file'


import {useState,  useContext, createContext, Dispatch, SetStateAction} from "react"

export interface MenuData{
    id: string;
    menuId:string;
    name:string;
    imgUrl:string;
    price:number | string;
    description:string;
    quantity?:number | undefined;
}
export interface Locale{
    team: string
    city:string
    address: string
    notes: string
    active: boolean
}

interface ContextProps {
    cart:MenuData[],
    setCart:Dispatch<SetStateAction<MenuData[]>>
    location:Locale,
    setLocation:Dispatch<SetStateAction<Locale>>
}


const CartContext = createContext<ContextProps>({} as ContextProps)
// const CartContext = createContext<ContextProps>({
//     cart: [] as MenuData[],
//     setCart: (): MenuData[] => [],
//     location: {city:""} as Locale,
//     setLocation: (): Locale => 
// })

// function useCart() {
//     const [cart, setCart] = useState<MenuData[]>([])

//     return {cart, setCart}
// }

export const GlobalContextProvider = ({ children }) => {
    const [cart, setCart] = useState<MenuData[]>([])
    const [location, setLocation] = useState<Locale>("" as unknown as Locale)

    return (  
        <CartContext.Provider value={{cart, setCart, location, setLocation}}>
            {children}
        </CartContext.Provider>
    )
}

export const useGlobalContext = () => useContext(CartContext)