import React from "react";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import styles from "./Welcome.module.scss";
export const Welcome = () => {
  return (
    <Wrapper>
      <div className={styles.welcome}>
        <div className={styles["our-story-anchor"]} id="our-story"></div>
        <div className={styles["header"]}>
          <h1>Dobro Došli u Ventus Plesni Studio</h1>
          <h4>Plesanje je naš način života</h4>
        </div>
        <div className={styles["questions-container"]}>
          <div className={styles["question"]}>
            <h3>Tko Smo Mi?</h3>
            <p>
              Plesni studio Ventus je nedavno otvoreno mjesto za učenje plesa,
              vodeno sa strasti i entuzijazmom. Vlasnik i glavni instruktor,
              Domagoj Sertić, dugogodišnji je natjecatelj u plesu i ima
              višegodišnje iskustvo rada kao instruktor plesa.
            </p>
            <p>
              Kao tim, mi u Plesnom studiju Ventus smo posvećeni pružanju
              kvalitetne nastave i stvaranju pozitivne i ugodne atmosfere za sve
              naše polaznike. Naša instruktorska ekipa uključuje i Korinu
              Kovačić, koja također ima višegodišnje iskustvo natjecanja i rada
              kao instruktor plesa.
            </p>
            <p>
              U Plesnom studiju Ventus vjerujemo da ples može biti zabavan i
              dostupan svima, bez obzira na razinu iskustva. Zato smo posvećeni
              pružanju individualne pozornosti svakom polazniku i pomaganju im
              da ostvare svoj puni potencijal.
            </p>
            <p>
              Dobrodošli u Plesni studio Ventus, gdje možete naučiti plesati,
              zabaviti se i stvoriti nova prijateljstva!
            </p>
          </div>
          <div className={styles["question"]}>
            <h3>Zašto odabrati nas?</h3>
            <p>
              Ako tražite mjesto gdje ćete naučiti plesati i razviti svoje
              vještine uz strastvene instruktore i prijateljsku atmosferu,
              Plesni studio Ventus je pravo mjesto za vas. Ovaj studio za ples
              vodimo sa žarom i strasti prema plesanju, što se odražava u
              kvaliteti naše nastave.
            </p>
            <p>
              Mi smo prilagodljivi prema potrebama svih naših polaznika i rado
              ćemo prilagoditi našu nastavu vašem tempu učenja i individualnim
              ciljevima. Također, cijene u Plesnom studiju Ventus su pristupačne
              i dostupne svima.
            </p>
            <p>
              Nastavu vodimo u ugodnoj i pozitivnoj atmosferi, gdje ćete se
              osjećati kao kod kuće i imati priliku stvoriti nova prijateljstva
              s drugim polaznicima.
            </p>
            <p>
              Odabirom Plesnog studija Ventus, nećete samo naučiti plesati, već
              ćete doživjeti zabavu, učiti nove stvari i razvijati svoje
              vještine u plesanju. Pridružite nam se i uživajte u plesnoj
              avanturi!
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
