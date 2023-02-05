import Head from "next/head";
import { HeroTitle } from "../components/HomePage/HeroTitle";
import { MiddleCards } from "../components/HomePage/MiddleCards";
import { HeroSection } from "../components/Layout/HeroSection/HeroSection";
import { OurClasses } from "../components/Shared/OurClasses/OurClasses";

export default function Home() {
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
      </main>
    </>
  );
}
