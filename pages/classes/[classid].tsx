import Head from "next/head";
import { GetStaticProps } from "next/types";
import React from "react";
import { HeroTitle } from "../../components/UI/HeroTitle";
import { UnderConstruction } from "../../components/UI/UnderConstruction";
import { client } from "../../lib/sanity.client";
import { IEvent } from "../../types/sanity-types";

const ClassPage = () => {
  return (
    <>
      <Head>
        <title>Ventus - Samba</title>
        <meta
          name="description"
          content="Plesni studio Ventus.Prvi ples lekcije,moderni ples,samba, tango, latino plesovi.Domagoj Sertić i Korina vrhunski nagrađivani instruktori plesa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroTitle title="Under Construction" />
        <UnderConstruction />
      </main>
    </>
  );
};
export default ClassPage;
export const getStaticProps: GetStaticProps = async (context) => {
  /*  if (!context.params) {
    return {
      props: {
        event: null,
      },
    };
  }
  const slug = context.params.eventid;
  const eventsListData = await client.fetch(
    `
          \*[_type=="event"]{
              ...,
              categories[]->,
              organizator->
          }
          `
  );
  const event = eventsListData.find(
    (event: IEvent) => event.slug.current === slug
  );
     */
  return {
    props: {
      class: {},
    },
  };
};

export const getStaticPaths = async () => {
  const eventsListData = await client.fetch(`
    \*[_type=='event']`);
  const pathsList = eventsListData.map((event: IEvent) => {
    return { params: { classid: event.slug.current } };
  });
  return {
    paths: pathsList,
    fallback: true,
  };
};
