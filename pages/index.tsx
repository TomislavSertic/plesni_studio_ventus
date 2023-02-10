import Head from "next/head";
import { GetStaticProps } from "next/types";
import { HeroTitle } from "../components/HomePage/HeroTitle";
import { LatestNews } from "../components/HomePage/LatestNews";
import { MiddleCards } from "../components/HomePage/MiddleCards";
import { OurInstructors } from "../components/HomePage/OurInstructors";
import { UpcomingEvents } from "../components/HomePage/UpcomingEvents/UpcomingEvents";
import { HeroSection } from "../components/Layout/HeroSection/HeroSection";
import { CtaBanner } from "../components/Shared/CtaBanner";
import { OurClasses } from "../components/Shared/OurClasses/OurClasses";
import { getTodayDate } from "../lib/helper-functions";
import { client } from "../lib/sanity.client";
import { IEvent, INewsCard } from "../types/sanity-types";

const HomePage: React.FC<{
  upcomingEvents: IEvent[];
  latestNews: INewsCard[];
}> = ({ upcomingEvents, latestNews }) => {
  console.log(latestNews);
  return (
    <>
      <Head>
        <title>Plesni Studio Ventus</title>
        <meta
          name="description"
          content="Plesni studio Ventus.Prvi ples lekcije,moderni ples,samba, tango, latino plesovi.Domagoj Sertić i Korina vrhunski nagrađivani instruktori plesa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection bgUrl="/images/hero-image.webp">
          <HeroTitle subTitle="kod nas naučite" mainTitle="PLESATI" />
          <CtaBanner
            buttonPath="/register"
            buttonText="Prijavi se"
            subtitle="Prijavite se i 45-minuta lekcija upoznavanja - potpuno besplatno!!"
            title="Dobro Došli Novi Studenti"
          />
        </HeroSection>
        <MiddleCards />
        <OurClasses />
        <UpcomingEvents events={upcomingEvents} />
        <OurInstructors />
        <LatestNews latestNews={latestNews} />
      </main>
    </>
  );
};
export default HomePage;
export const getStaticProps: GetStaticProps = async () => {
  const groqQueryEvents = `\*[_type=='event' && eventStart>="${getTodayDate()}"]`;
  const groqQueryLatestNews = `\*[_type=='post' \|\| _type=='event']{...,
    categories[]->,
    author->} \| order(_createdAt desc)[0..2]`;
  const eventData = await client.fetch(groqQueryEvents);
  const latestNewsData = await client.fetch(groqQueryLatestNews);

  return {
    props: {
      upcomingEvents: eventData,
      latestNews: latestNewsData,
    },
    revalidate: 1000,
  };
};
