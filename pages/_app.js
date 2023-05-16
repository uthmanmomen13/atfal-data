import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { SSRProvider } from "react-bootstrap";
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from "next-auth/react"

function MyApp({
   Component, pageProps: {session, ...pageProps},
  }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  
  return (
    <>
      {/* <SessionProvider session={session}> */}
        <SSRProvider>
        <Component {...pageProps} />
        </SSRProvider>
      {/* </SessionProvider> */}
      <Analytics />
    </>
  )
}

export default MyApp
