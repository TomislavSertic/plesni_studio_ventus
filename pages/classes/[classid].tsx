import Head from "next/head";
import { GetStaticProps } from "next/types";
import React from "react";
import { SingleClassContent } from "../../components/ClassesPage/SingleClassContent";
import { Wrapper } from "../../components/Layout/Wrapper/Wrapper";
import { HeroTitle } from "../../components/UI/HeroTitle";
import { LightPageTitle } from "../../components/UI/LightPageTitle";
import { UnderConstruction } from "../../components/UI/UnderConstruction";
import { client } from "../../lib/sanity.client";
import { getAllDancesPaths, getDance } from "../../lib/sanityFetch";
import { IDances, IEvent } from "../../types/sanity-types";

const ClassPage: React.FC<{ dance: IDances }> = ({ dance }) => {
  console.log(dance);
  if (!dance) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>Ventus - {dance.name}</title>
        <meta
          name="description"
          content="Plesni studio Ventus, Zagreb.Prvi ples lekcije,moderni ples,samba, tango, latino plesovi.Domagoj Sertić i Korina vrhunski nagrađivani instruktori plesa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <main>
          <LightPageTitle title={dance.name} />
          <SingleClassContent dance={dance} />
        </main>
      </Wrapper>
    </>
  );
};
export default ClassPage;
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params || !context.params.classid) {
    return {
      props: {
        event: null,
      },
    };
  }
  const slug = context.params.classid;
  const dance = await getDance(slug);
  return {
    props: {
      dance,
    },
  };
};

export const getStaticPaths = async () => {
  const pathsList = await getAllDancesPaths();
  console.log(pathsList);
  return {
    paths: pathsList,
    fallback: false,
  };
};
