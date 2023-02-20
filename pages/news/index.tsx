import Head from "next/head";
import { GetStaticProps } from "next/types";
import React from "react";
import { NewsList } from "../../components/NewsPage/NewsList";
import { HeroTitle } from "../../components/UI/HeroTitle";
import { getAllPosts } from "../../lib/sanityFetch";
import { IPost } from "../../types/sanity-types";

export const NewsPage: React.FC<{ news: IPost[] }> = ({ news }) => {
  console.log(news);
  return (
    <>
      <Head>
        <title>Ventus - Vijesti</title>
        <meta
          name="description"
          content="Plesni studio Ventus, Zagreb.Prvi ples lekcije,moderni ples,samba, tango, latino plesovi.Domagoj Sertić i Korina vrhunski nagrađivani instruktori plesa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroTitle title="Vijesti" />
        {news && <NewsList news={news} />}
      </main>
    </>
  );
};

export default NewsPage;
export const getStaticProps: GetStaticProps = async () => {
  const newsData = await getAllPosts();

  return {
    props: {
      news: newsData,
    },
    revalidate: 120,
  };
};
