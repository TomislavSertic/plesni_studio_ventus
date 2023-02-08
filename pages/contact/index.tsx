import Head from "next/head";
import React from "react";
import { HeroTitle } from "../../components/HomePage/HeroTitle";
import { HeroSection } from "../../components/Layout/HeroSection/HeroSection";
import { CtaBanner } from "../../components/Shared/CtaBanner";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Ventus - Kontakt</title>
        <meta
          name="description"
          content="Plesni studio Ventus.Prvi ples lekcije,moderni ples,samba, tango, latino plesovi.Domagoj Sertić i Korina vrhunski nagrađivani instruktori plesa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <HeroTitle mainTitle="Kontakt" subTitle="" />
        </div>
      </main>
    </>
  );
};
export default ContactPage;
