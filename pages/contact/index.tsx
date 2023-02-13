import Head from "next/head";
import React from "react";
import { HeroTitle } from "../../components/UI/HeroTitle";
import { CtaBanner } from "../../components/Shared/CtaBanner";
import { ContactInfo } from "../../components/ContactPage/ContactInfo";
import { ContactForm } from "../../components/Shared/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Ventus - Kontakt</title>
        <meta
          name="description"
          content="Plesni studio Ventus. Lokacija Zagreb . email: plesni.studio.ventus@gmail.com . telefon: +385914455915 ."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroTitle title="Kontakt" />
        <ContactInfo />
        <ContactForm />
      </main>
    </>
  );
};
export default ContactPage;
