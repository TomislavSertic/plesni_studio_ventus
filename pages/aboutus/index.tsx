import Head from "next/head";
import React from "react";
import { OurTeachers } from "../../components/AboutPage/OurTeachers";
import { StudentTestimonials } from "../../components/AboutPage/StudentTestimonials";
import { Welcome } from "../../components/AboutPage/Welcome";
import { HeroTitle } from "../../components/HomePage/HeroTitle";
import { OurInstructors } from "../../components/HomePage/OurInstructors";
import { HeroSection } from "../../components/Layout/HeroSection/HeroSection";
import { CtaBanner } from "../../components/Shared/CtaBanner";
import { OurClasses } from "../../components/Shared/OurClasses/OurClasses";
import { getAllInstructors } from "../../lib/sanityFetch";
import { IInstructors } from "../../types/sanity-types";

const ClassesPage: React.FC<{ instructors: IInstructors[] }> = ({
  instructors,
}) => {
  return (
    <>
      <Head>
        <title>Ventus - O Nama</title>
        <meta
          name="description"
          content="Plesni studio Ventus.Prvi ples lekcije,moderni ples,samba, tango, latino plesovi.Domagoj Sertić i Korina vrhunski nagrađivani instruktori plesa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection bgUrl="/images/aboutus-bg.webp">
          <HeroTitle mainTitle="O Nama" subTitle="" />
          <CtaBanner
            buttonPath="/classes#our-classes"
            buttonText="Pogledaj ponudu"
            subtitle="Od južne amerike do istočno europskih plesova"
            title="Bogati izbor ponude plesova"
          />
        </HeroSection>
        <Welcome />
        <OurTeachers instructors={instructors} />
        <StudentTestimonials />
      </main>
    </>
  );
};
export default ClassesPage;
export const getStaticProps = async () => {
  const instructors = await getAllInstructors();
  return {
    props: {
      instructors: instructors,
    },
  };
};
