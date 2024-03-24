import React, { useRef, useState } from "react";
import styles from "./ContactForm.module.scss";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import { FormStatus } from "../UI/FormStatus";
import { FormButton } from "../UI/FormElements/FormButton";
import { StatusAlertModal } from "../UI/StatusAlertModal";
import { ValidateEmail } from "../../lib/helper-functions";
import axios from "axios";
export const ContactForm = () => {
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
    if (e.target.value === "phoneNumber") {
      setContactEmail(false);
    }
    if (e.target.value === "emailAddress") {
      setContactEmail(true);
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
      await axios.post("/api/contact", contactSignup);
      await axios.post("/api/mail", { ...contactSignup, formType: "Contact" });
      setFormStep(1);
      setContactEmail(true);
    } catch (error) {
      setFormStep(2);
      setContactEmail(true);
    }
  };
  return (
    <Wrapper>
      <div className={styles["contact-form-anchor"]} id="free-lesson"></div>
      <div className={styles["contact-form-signup"]}>
        <div className={styles["header"]}>
          <h1>Postavite Pitanje</h1>
          <p>Dobite odgovor</p>
        </div>
        {formStep === 0 && (
          <form className={styles["form"]} onSubmit={formSubmitHandler}>
            <input
              name="name"
              className={styles["form-input"]}
              ref={nameRef}
              type="text"
              placeholder="Ime*"
              aria-required="true"
            />
            <div className={styles["form-option"]}>
              <label>Želim da mi odgovorite </label>
              <select onChange={selectHandler} ref={wantedResponseRef}>
                <option value="emailAddress">Email Porukom</option>
                <option value="phoneNumber">Telefonskim Pozivom</option>
                <option value="phoneNumber">Whatsup Porukom</option>
              </select>
            </div>
            {contactEmail ? (
              <input
                name="email"
                type="email"
                placeholder="Email Adresa*"
                ref={emailRef}
                className={styles["form-input"]}
                aria-required="true"
              />
            ) : (
              <input
                name="phone number"
                type="number"
                placeholder="Broj Telefona*"
                ref={phoneRef}
                className={styles["form-input"]}
              />
            )}
            <textarea
              name="message"
              ref={messageRef}
              className={styles["form-textarea"]}
              placeholder="Pitanje"
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
            status="Uspješno Poslana Poruka"
            message="Hvala na poruci.Odgovorimo vam prvom prilikom."
            buttonText="Pošaljite novu poruku"
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
            buttonText="Pošaljite novu poruku"
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
