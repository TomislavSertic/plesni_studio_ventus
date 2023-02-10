import Head from "next/head";
import React from "react";
import { HeroTitle } from "../../components/HomePage/HeroTitle";
import { HeroSection } from "../../components/Layout/HeroSection/HeroSection";
import { CtaBanner } from "../../components/Shared/CtaBanner";
import { OurClasses } from "../../components/Shared/OurClasses/OurClasses";
import { WhatYouGet } from "../../components/Shared/WhatYouGet";

const ClassesPage = () => {
  return (
    <>
      <Head>
        <title>Ventus - Satovi</title>
        <meta
          name="description"
          content="Plesni studio Ventus.Prvi ples lekcije,moderni ples,samba, tango, latino plesovi.Domagoj Sertić i Korina vrhunski nagrađivani instruktori plesa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection bgUrl="/images/plesovi-bg.webp">
          <HeroTitle mainTitle="PLESOVI" subTitle="" />
          <CtaBanner
            buttonPath="/register"
            buttonText="Prijavi se"
            title="Dobro Došli Novi Studenti"
          />
        </HeroSection>
        <WhatYouGet />
        <OurClasses />
      </main>
    </>
  );
};
export default ClassesPage;
