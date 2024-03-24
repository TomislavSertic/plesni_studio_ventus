import React, { useRef, useState } from "react";
import styles from "./FreeLessonSignup.module.scss";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import { FormStatus } from "../UI/FormStatus";
import { FormButton } from "../UI/FormElements/FormButton";
import { StatusAlertModal } from "../UI/StatusAlertModal";
import { ValidateEmail } from "../../lib/helper-functions";
import axios from "axios";

export const FreeLessonSignup = () => {
  const [formStep, setFormStep] = useState(0);
  const [contactEmail, setContactEmail] = useState(true);
  const [showStatusMessage, setShowStatusMessage] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const wantedResponseRef = useRef<HTMLSelectElement>(null);
  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "emailAddress") {
      setContactEmail(true);
    } else {
      setContactEmail(false);
    }
  };
  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    let errorMsg = "";
    if (nameRef.current?.value === "") {
      errorMsg += "Ime polje je prazno,molimo unesite Vaše ime. ";
    }
    if (contactEmail || (!contactEmail && phoneRef.current?.value === "")) {
      if (contactEmail) {
        if (!emailRef.current) {
          errorMsg += "Unesite Valjanu Email adresu. ";
          return;
        }
        if (!ValidateEmail(emailRef.current.value)) {
          errorMsg += "Unesite Valjanu Email adresu. ";
        }
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
    const contactSignup = {
      name: nameRef.current?.value,
      email:
        emailRef.current?.value === undefined ? "" : emailRef.current?.value,
      phoneNumber:
        phoneRef.current?.value === undefined ? "" : phoneRef.current?.value,
      wantedResponse: wantedResponseRef.current?.value,
      message: messageRef.current?.value,
    };
    setContactEmail(true);
    try {
      await axios.post("/api/registration", contactSignup);
      await axios.post("/api/mail", {
        ...contactSignup,
        formType: "Registration",
      });
      setFormStep(1);
      setContactEmail(true);
    } catch (error) {
      setFormStep(2);
      setContactEmail(true);
    }
    /* await fetch("/api/registration", {
      method: "POST",
      body: JSON.stringify(contactSignup),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setFormStep(1);
          setContactEmail(true);
        } else {
          setFormStep(2);
        }
      }); */
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
              <select onChange={selectHandler} ref={wantedResponseRef}>
                <option value="emailAddress">Email Poruke</option>
                <option value="phoneNumber">Telefonskog Poziva</option>
                <option value="whatsupMessage">Whatsup Poruke</option>
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
