import React from "react";
import { FormButton } from "./FormElements/FormButton";
import styles from "./FormStatus.module.scss";
export const FormStatus: React.FC<{
  status: string;
  message: string;
  buttonText: string;
  success: boolean;
  onClickF: Function;
}> = ({ status, message, success, buttonText, onClickF }) => {
  const returnButtonHandler = () => {
    onClickF();
  };
  return (
    <div
      className={`${styles["form-status"]} ${!success && styles["form-error"]}`}
    >
      <h1>{status}</h1>
      <p>{message}</p>

      <FormButton clickHandler={returnButtonHandler}>
        Pošaljite novu prijavu
      </FormButton>
    </div>
  );
};
