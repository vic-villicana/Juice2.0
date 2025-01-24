import Head from "next/head";
import styles from '@/styles/Home.module.css'
import  MainMenu  from "@/components/menu/MainMenu";
import  MainMenuV2  from "@/components/menu/MainMenuV2";


const Menu = () => {
    // const {cart, setCart} = useCart()
    return(
        <>
            <Head>
                <title>Juicy Juize Tacos</title>
                <meta name="description" content="Proudly catering the city of Los Angeles for 15 years." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                    <MainMenuV2  />
            </main>

        </>
    )
}

export default Menu