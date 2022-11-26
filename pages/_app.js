import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { SSRProvider } from "react-bootstrap";
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  
  return (
    <>
    <SSRProvider>
    <Component {...pageProps} />
    </SSRProvider>
    <Analytics />
    </>
  )
}

export default MyApp
