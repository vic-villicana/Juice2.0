import Head from "next/head";
//styles 
import styles from "@/styles/Home.module.css"
// styled comonents
import  Cart  from "@/components/cart/Cart";

const Menu = () => {
    return(
        <>
            <Head>
                <title>Juicy Juize Tacos</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                    <Cart />    
            </main>
        </>
    )
}

export default Menu