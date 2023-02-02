import Head from "next/head";
import { HeroTitle } from "../components/HomePage/HeroTitle";
import { HeroSection } from "../components/Layout/HeroSection/HeroSection";

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
      </main>
    </>
  );
}
