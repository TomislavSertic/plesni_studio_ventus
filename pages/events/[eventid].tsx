import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { EventBody } from "../../components/EventPage/EventBody";
import { EventDetails } from "../../components/EventPage/EventDetails";
import { EventHeader } from "../../components/EventPage/EventHeader";
import { Wrapper } from "../../components/Layout/Wrapper/Wrapper";
import { client, urlFor } from "../../lib/sanity.client";
import { IEvent } from "../../types/sanity-types";

const SingleEventPage: React.FC<{ event: IEvent }> = ({ event }) => {
  if (!event) {
    return (
      <Wrapper>
        <h1>Loading...</h1>
      </Wrapper>
    );
  }
  const { title, mainImage, description, author } = event;
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
        <meta name="twitter:site" content="https://esportinicijativa.hr" />
        <meta name="twitter:creator" content={author} />
      </Head>
      <Wrapper>
        <section>
          <EventHeader event={event} />
          <EventBody event={event} />
          <EventDetails event={event} />
        </section>
      </Wrapper>
    </>
  );
};

export default SingleEventPage;

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
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

  return {
    props: {
      event,
    },
  };
};

export const getStaticPaths = async () => {
  const eventsListData = await client.fetch(`
  \*[_type=='event']`);
  const pathsList = eventsListData.map((event: IEvent) => {
    return { params: { eventid: event.slug.current } };
  });
  return {
    paths: pathsList,
    fallback: true,
  };
};
