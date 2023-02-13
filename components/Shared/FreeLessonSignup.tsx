import React, { useRef, useState } from "react";
import styles from "./FreeLessonSignup.module.scss";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import { FormStatus } from "../UI/FormStatus";
import { Button } from "../UI/Button";
import { FormButton } from "../UI/FormElements/FormButton";
import { StatusAlertModal } from "../UI/StatusAlertModal";

export const FreeLessonSignup = () => {
  const [formStep, setFormStep] = useState(0);
  const [contactEmail, setContactEmail] = useState(true);
  const [showStatusMessage, setShowStatusMessage] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "phoneNumber") {
      setContactEmail(false);
    }
    if (e.target.value === "emailAddress") {
      setContactEmail(true);
    }
  };
  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    let errorMsg = "";
    if (nameRef.current?.value === "") {
      errorMsg += "Ime polje je prazno,molimo unesite Vaše ime. ";

      setFormStep(0);
    }
    if (
      (contactEmail && emailRef.current?.value === "") ||
      (!contactEmail && phoneRef.current?.value === "")
    ) {
      setFormStep(0);
      if (contactEmail) {
        errorMsg += "Unesite Email adresu. ";
      } else {
        errorMsg += "Unesite Broj Telefona. ";
      }
    }
    if (messageRef.current?.value === "") {
      errorMsg += "Polje sa sadržajem poruke je prazno. Unesite Vašu poruku.";
    }
    if (errorMsg !== "") {
      setStatusMessage(errorMsg);
      setShowStatusMessage(true);
      setTimeout(() => {
        setStatusMessage("");
        setShowStatusMessage(false);
      }, 8000);
      return;
    }
    console.log("Form Submited");
    setFormStep(1);
  };
  return (
    <Wrapper>
      <div className={styles["signup-anchor"]} id="free-lesson"></div>
      <div className={styles["lesson-signup"]}>
        <div className={styles["header"]}>
          <h1>Prijavite se za besplatnu Lekciju po želji</h1>
          <p>Nikad nije bilo lakše</p>
        </div>
        {formStep === 0 && (
          <form className={styles["form"]} onSubmit={formSubmitHandler}>
            <input
              className={styles["form-input"]}
              ref={nameRef}
              type="text"
              placeholder="Ime i Prezime*"
            />
            <div className={styles["form-option"]}>
              <label>Kontaktirajte me putem</label>
              <select onChange={selectHandler}>
                <option value="emailAddress">Email Poruke</option>
                <option value="phoneNumber">Telefonskog Poziva</option>
                <option value="phoneNumber">Whatsup Poruke</option>
              </select>
            </div>
            {contactEmail ? (
              <input
                type="email"
                placeholder="Email Adresa*"
                ref={emailRef}
                className={styles["form-input"]}
              />
            ) : (
              <input
                type="number"
                placeholder="Broj Telefona*"
                ref={phoneRef}
                className={styles["form-input"]}
              />
            )}
            <textarea
              ref={messageRef}
              className={styles["form-textarea"]}
              placeholder="Poruka sa lekcijom za koju ste zainteresirani (Pogledajte raspored sati lekcija ili će vam instruktor ponuditi termine) "
            ></textarea>
            <div className={styles["button-container"]}>
              <FormButton>Pošalji Prijavu</FormButton>
            </div>
          </form>
        )}
        {formStep === 1 && (
          <FormStatus
            onClickF={() => {
              setFormStep(0);
            }}
            status="Uspješna Prijava"
            message="Hvala na zainteresiranosti i instruktor ce vas kontaktirati prvom prilikom"
            buttonText="Pošaljite novu prijavu"
            success={true}
          />
        )}
        {formStep === 2 && (
          <FormStatus
            onClickF={() => {
              setFormStep(0);
            }}
            status="Nešto je pošlo po krivome."
            message="Probajte ponovo poslati poruku.U slučaju da ne prolazi poašljite direktno mail ili nazovite."
            buttonText="Pošaljite novu prijavu"
            success={false}
          />
        )}
      </div>
      ;
      {showStatusMessage && (
        <StatusAlertModal message={statusMessage} status="error" />
      )}
    </Wrapper>
  );
};
