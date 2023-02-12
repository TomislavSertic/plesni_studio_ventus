import Head from "next/head";
import React from "react";
import { HeroTitle } from "../../components/UI/HeroTitle";

export const NewsPage = () => {
  return (
    <>
      <Head>
        <title>Ventus - Raspored</title>
        <meta
          name="description"
          content="Plesni studio Ventus.Prvi ples lekcije,moderni ples,samba, tango, latino plesovi.Domagoj Sertić i Korina vrhunski nagrađivani instruktori plesa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroTitle title="Vijesti" />
      </main>
    </>
  );
};

export default NewsPage;
