import React, { useState, useEffect } from "react";
import Header from "../components/Header.js";
import Nav from "../components/Nav.js";
import regionJson from "../components/21-22regions.json"
import Hero from "../components/Hero.js";
import Footer from "../components/Footer.js";
import RegionalTable from "../components/RegionalTable.js";
import { useSession } from "next-auth/react";

export default function Reports() {
  // const { data: session } = useSession();

    return (
        <>
          <Header
            data={{
              title: "Report Data",
              description: "2021 - 22 Monthly Report Data",
            }}
          />
          <Nav />
          <main className="mainContent">
          {/* {!session ? (
              <>
              <Hero text={"Please sign in to your atfalusa account"}/>
              </>
              ) : (
                <>
            
            </>
              )} */}
              <Hero text={"2021 - 22 Monthly Report Data"}/>
            <RegionalTable data={regionJson.regions} route={"/21-22reports/"}/>
          </main>
          <Footer />
        </>
      );
}