import Head from "next/head";

export default function Header({ data }) {
  return (
    <Head>
      <title>{data.title ? data.title : "Atfal Rankings"}</title>
      <meta
        name="description"
        content={
          data.description ? data.description : "Atfal Rankings"
        }
      />
      <link rel="icon" href="/atfal-logo.png" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Noto+Serif:wght@700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
