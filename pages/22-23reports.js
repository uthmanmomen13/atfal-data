import React, { useState, useEffect } from "react";
import Header from "../components/Header.js";
import Nav from "../components/Nav.js";
import regionJson22 from "../components/22-23regions.json"
import Hero from "../components/Hero.js";
import Footer from "../components/Footer.js";
import RegionalTable from "../components/RegionalTable.js";
import { useSession } from "next-auth/react";

export default function Reports() {
  const { data: session } = useSession();

    return (
        <>
          <Header
            data={{
              title: "Report Data",
              description: "2022 - 23 Monthly Report Data",
            }}
          />
          <Nav />
          <main className="mainContent">
            {!session ? (
              <>
              <Hero text={"Please sign in to your atfalusa account"}/>
              </>
              ) : (
                <>
              <Hero text={"2022 - 23 Monthly Report Data"}/>
              <RegionalTable data={regionJson22.regions} route={"/22-23reports/"} />
              </>
              )
            }
          </main>
          <Footer />
        </>
      );
}