import Head from "next/head";
import { GetStaticProps } from "next/types";
import { OurTeachers } from "../components/AboutPage/OurTeachers";
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
import {
  getAllDancesTeached,
  getFeaturedDancesTeached,
  getLatestPosts,
} from "../lib/sanityFetch";
import { IDances, IEvent, IInstructors, IPost } from "../types/sanity-types";

const HomePage: React.FC<{
  upcomingEvents: IEvent[];
  latestNews: IPost[];
  instructors: IInstructors[];
  dances: IDances[];
}> = ({ upcomingEvents, latestNews, instructors, dances }) => {
  return (
    <>
      <Head>
        <title>Plesni Studio Ventus</title>
        <meta
          name="description"
          content="Plesni studio Ventus, Zagreb.Prvi ples lekcije,moderni ples,samba, tango, latino plesovi.Vrhunski instruktori i pristupačne cijene."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection bgUrl="/images/hero-image.webp">
          <HeroTitle subTitle="kod nas naučite" mainTitle="PLESATI" />
          <CtaBanner
            buttonPath="/schedule#free-lesson"
            buttonText="Prijavi se"
            subtitle="Prijavite se i prve dvije grupne lekcije - potpuno besplatno!"
            title="Dobro Došli Novi Studenti"
          />
        </HeroSection>
        <MiddleCards />
        <OurClasses dances={dances} />
        <UpcomingEvents events={upcomingEvents} />
        {/*  <OurInstructors /> */}
        <OurTeachers instructors={instructors} />
        <LatestNews latestNews={latestNews} />
      </main>
    </>
  );
};
export default HomePage;
export const getStaticProps: GetStaticProps = async () => {
  const groqQueryEvents = `\*[_type=='event' && (
    !(_id in path("drafts.**"))) && eventStart>="${getTodayDate()}"] \| order(eventStart asc)`;

  const groqQueryInstructors = `\*[_type=='instructors' && (
    !(_id in path("drafts.**")))]{
      ...,
      knowledge[]->
    }`;
  const objekt = {
    a: 2,
    banan: true,
  };

  const eventData = await client.fetch(groqQueryEvents);
  const instructorsData = await client.fetch(groqQueryInstructors);
  const latestPostData = await getLatestPosts(3);
  const dancesData = await getFeaturedDancesTeached();
  return {
    props: {
      upcomingEvents: eventData,
      latestNews: latestPostData,
      instructors: instructorsData,
      dances: dancesData,
    },
    revalidate: 120,
  };
};
