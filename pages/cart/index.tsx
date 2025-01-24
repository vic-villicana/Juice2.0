
import Head from "next/head";
//styles 
import styles from "@/styles/Home.module.css"
// styled comonents
import Cartv2 from "@/components/cart/Cartv2"



const Cart = () => {

    

    return(
        <>
            <Head>
                <title>Juicy Juize Tacos</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                    <Cartv2 />    
            </main>
        </>
    )
}

export default Cart