import Head from "next/head";
import React from "react";
import { HeroTitle } from "../../components/HomePage/HeroTitle";
import { HeroSection } from "../../components/Layout/HeroSection/HeroSection";
import { CtaBanner } from "../../components/Shared/CtaBanner";
import { FreeLessonSignup } from "../../components/Shared/FreeLessonSignup";
import { OurClasses } from "../../components/Shared/OurClasses/OurClasses";
import { WhatYouGet } from "../../components/Shared/WhatYouGet";
import {
  getAllDancesTeached,
  getFeaturedDancesTeached,
} from "../../lib/sanityFetch";
import { IDances } from "../../types/sanity-types";

const ClassesPage: React.FC<{ dances: IDances[] }> = ({ dances }) => {
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
            buttonPath="#free-lesson"
            buttonText="Prijavi se za besplatni sat"
            title="Dobro Došli Novi Studenti"
          />
        </HeroSection>
        <WhatYouGet />
        <OurClasses dances={dances} />
        <FreeLessonSignup />
      </main>
    </>
  );
};
export default ClassesPage;

export const getStaticProps = async () => {
  const dancesData = await getFeaturedDancesTeached();
  return {
    props: {
      dances: dancesData,
    },
  };
};
