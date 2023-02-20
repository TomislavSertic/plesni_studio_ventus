import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { EventBody } from "../../components/EventPage/EventBody";
import { EventDetails } from "../../components/EventPage/EventDetails";
import { EventHeader } from "../../components/EventPage/EventHeader";
import { Wrapper } from "../../components/Layout/Wrapper/Wrapper";
import { NewsBody } from "../../components/NewsPage/NewsBody";
import { NewsPostHeader } from "../../components/NewsPage/NewsPostHeader";
import { LightPageTitle } from "../../components/UI/LightPageTitle";
import { client, urlFor } from "../../lib/sanity.client";
import { getPostBySlug, getPostsPaths } from "../../lib/sanityFetch";
import { IEvent, IPost } from "../../types/sanity-types";

const NewsPostPage: React.FC<{ news: IPost }> = ({ news }) => {
  if (!news) {
    return (
      <Wrapper>
        <h1>Loading...</h1>
      </Wrapper>
    );
  }
  const { title, mainImage, description, author } = news;
  const imageUrl = mainImage ? urlFor(mainImage).url() : "";
  const headTitle = `PS Ventus - ${title.substring(0, 10)}...`;
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={description} key="desc" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="twitter:image" content={imageUrl} />
        <meta property="twitter:title " content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://plesni-studio-ventus.hr" />
        <meta name="twitter:creator" content={author.name} />
      </Head>
      <Wrapper>
        <section>
          <LightPageTitle title={news.title} />
          <NewsPostHeader news={news} />
          <NewsBody news={news} />
        </section>
      </Wrapper>
    </>
  );
};

export default NewsPostPage;

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params || !context.params.postid) {
    return {
      props: {
        event: null,
      },
    };
  }
  const slug = context.params.postid;
  const news = await getPostBySlug(slug);
  return {
    props: {
      news,
    },
    revalidate: 120,
  };
};

export const getStaticPaths = async () => {
  const pathsList = await getPostsPaths();
  return {
    paths: pathsList,
    fallback: true,
  };
};
