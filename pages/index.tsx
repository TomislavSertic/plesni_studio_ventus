import Head from "next/head";
import { GetStaticProps } from "next/types";
import { HeroTitle } from "../components/HomePage/HeroTitle";
import { LatestNews } from "../components/HomePage/LatestNews";
import { MiddleCards } from "../components/HomePage/MiddleCards";
import { OurInstructors } from "../components/HomePage/OurInstructors";
import { UpcomingEvents } from "../components/HomePage/UpcomingEvents/UpcomingEvents";
import { HeroSection } from "../components/Layout/HeroSection/HeroSection";
import { OurClasses } from "../components/Shared/OurClasses/OurClasses";
import { getTodayDate } from "../lib/helper-functions";
import { client } from "../lib/sanity.client";

const HomePage: React.FC<{ upcomingEvents: any }> = ({ upcomingEvents }) => {
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
        <HeroSection bgUrl="/images/hero-image.jpeg">
          <HeroTitle />
        </HeroSection>
        <MiddleCards />
        <OurClasses />
        <UpcomingEvents events={upcomingEvents} />
        <OurInstructors />
        <LatestNews />
      </main>
    </>
  );
};
export default HomePage;
export const getStaticProps: GetStaticProps = async () => {
  const groqQuery = `\*[_type=='event' && eventStart>="${getTodayDate()}"]`;
  const data = await client.fetch(groqQuery);
  return {
    props: {
      upcomingEvents: data,
    },
    revalidate: 1000,
  };
};
