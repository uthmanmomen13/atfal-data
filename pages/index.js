import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from "../components/Nav.js";
import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <Header
      data={{
        title: "Atfal USA",
        description: "Atfal Data",
      }}
    />
    <Nav />
    
    <main className="mainContent">
      <Hero text={"Atfal Data"}/>
      {!session ? (
        <>
        <div style={{position: "relative", left:"48%"}}>
          <p>Not signed in</p>
          <br />
          <button onClick={() => signIn()}>Sign in</button>
          </div>
        </>
      ) : (<></>)}
    </main>
    
    <Footer />
    </>
  )
}
