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
      <Hero text={"Privacy Policy"}/>
      <p style={{position: "relative", width: "30%", left: "32%"}}>
        This site does not collect any user data. We simply require users to be logged in with a valid google account from one of our association provided emails. No information is shared with third parties.
      </p>
    </main>
    
    <Footer />
    </>
  )
}
