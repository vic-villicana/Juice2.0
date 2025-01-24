import Head from 'next/head'
import styles from "@/styles/Home.module.css"

const Catering = () => {
    return (
        <>
            <Head>
                <title>Juicy Juize Catering</title>
                <meta name="description" content="The best tacos north of the border!" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h2>Catering Page</h2>
            </main>
        </>
    )
}

export default Catering