import Head from "next/head";
import React from "react";
import { OurTeachers } from "../../components/AboutPage/OurTeachers";
import { HeroTitle } from "../../components/HomePage/HeroTitle";
import { HeroSection } from "../../components/Layout/HeroSection/HeroSection";
import { CtaBanner } from "../../components/Shared/CtaBanner";
import { FreeLessonSignup } from "../../components/Shared/FreeLessonSignup";
import { OurClasses } from "../../components/Shared/OurClasses/OurClasses";
import { PriceList } from "../../components/Shared/PriceList";
import { Schedule } from "../../components/Shared/Schedule";
import { getAllInstructors, getAllSchedules } from "../../lib/sanityFetch";
import { IInstructors, IScheduleData } from "../../types/sanity-types";

const SchedulePage: React.FC<{
  instructors: IInstructors[];
  schedules: IScheduleData[];
}> = ({ instructors, schedules }) => {
  return (
    <>
      <Head>
        <title>Ventus - Raspored</title>
        <meta
          name="description"
          content="Plesni studio Ventus. Prvi ples lekcije, moderni ples, samba, tango, latino plesovi. Domagoj Sertić i Korina vrhunski nagrađivani instruktori plesa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection bgUrl="/images/classes-bg.webp">
          <HeroTitle mainTitle="Raspored" subTitle="" />
          <CtaBanner
            buttonPath="#free-lesson"
            buttonText="Prijavi se"
            subtitle="Prijavite se i prve dvije grupne lekcije - potpuno besplatno!!"
            title="Odaberi savršeno vrijeme za sat plesa"
          />
        </HeroSection>

        {schedules.map((schedule) => (
          <Schedule
            key={schedule._id}
            scheduleData={schedule}
            // Naziv prikazujemo samo za sekundarne rasporede
            showTitle={!schedule.isMain}
          />
        ))}

        <OurTeachers instructors={instructors} />
        <FreeLessonSignup />
        <PriceList />
      </main>
    </>
  );
};

export default SchedulePage;

export const getStaticProps = async () => {
  const instructors = await getAllInstructors();
  const schedules = await getAllSchedules();

  return {
    props: {
      instructors,
      schedules,
    },
  };
};
