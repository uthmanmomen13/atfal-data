import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from "../components/Nav.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Atfal USA</title>
        <meta name="description" content="" />
      </Head>
      
      <Nav/>

      <main className={styles.main}>
      </main>

    </div>
  )
}
