import Head from "next/head";
import { GetStaticProps } from "next/types";
import React from "react";
import { HeroTitle } from "../../components/UI/HeroTitle";
import { UnderConstruction } from "../../components/UI/UnderConstruction";
import { getTodayDate } from "../../lib/helper-functions";
import { client } from "../../lib/sanity.client";
import { INewsCard } from "../../types/sanity-types";

export const NewsPage: React.FC<{ news: INewsCard[] }> = ({ news }) => {
  return (
    <>
      <Head>
        <title>Ventus - Vijesti</title>
        <meta
          name="description"
          content="Plesni studio Ventus.Prvi ples lekcije,moderni ples,samba, tango, latino plesovi.Domagoj Sertić i Korina vrhunski nagrađivani instruktori plesa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroTitle title="Vijesti" />
        <UnderConstruction />
      </main>
    </>
  );
};

export default NewsPage;
export const getStaticProps: GetStaticProps = async () => {
  const groqQueryLatestNews = `\*[_type=='post' \|\| _type=='event']{...,
    categories[]->,
    author->} \| order(_createdAt desc)[0..2]`;
  const latestNewsData = await client.fetch(groqQueryLatestNews);

  return {
    props: {
      latestNews: latestNewsData,
    },
    revalidate: 1000,
  };
};
