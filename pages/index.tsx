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
        <meta name="description" content="Web stranica plesnog studia Ventus" />
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
