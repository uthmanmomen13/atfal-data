import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from "../components/Nav.js";
import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
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
    </main>
    <Footer />
    </>
  )
}
