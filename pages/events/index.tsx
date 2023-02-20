import Head from "next/head";
import { GetStaticProps } from "next/types";
import React from "react";
import { UpcomingEvents } from "../../components/HomePage/UpcomingEvents/UpcomingEvents";
import { HeroTitle } from "../../components/UI/HeroTitle";
import { getTodayDate } from "../../lib/helper-functions";
import { client } from "../../lib/sanity.client";
import { IEvent } from "../../types/sanity-types";

export const EventsPage: React.FC<{ events: IEvent[] }> = ({ events }) => {
  return (
    <>
      <Head>
        <title>Ventus - Događaji</title>
        <meta
          name="description"
          content="Plesni studio Ventus.Prvi ples lekcije,moderni ples,samba, tango, latino plesovi.Domagoj Sertić i Korina vrhunski nagrađivani instruktori plesa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroTitle title="DOGAĐAJI" />
        {events ? (
          <UpcomingEvents events={events} />
        ) : (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
      </main>
    </>
  );
};

export default EventsPage;
export const getStaticProps: GetStaticProps = async () => {
  const groqQueryEvents = `\*[_type=='event' && eventStart>="${getTodayDate()}"] \| order(eventStart asc)`;

  const eventData = await client.fetch(groqQueryEvents);

  return {
    props: {
      events: eventData,
    },
    revalidate: 120,
  };
};
