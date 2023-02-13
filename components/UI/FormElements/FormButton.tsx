import React from "react";
import styles from "./FormButton.module.scss";
export const FormButton: React.FC<{
  children: React.ReactNode;
  clickHandler?: Function;
}> = ({ children, clickHandler }) => {
  const buttonClickHandler = () => {
    if (clickHandler) {
      clickHandler();
    }
  };
  return (
    <button
      className={styles["form-button"]}
      type="submit"
      onClick={buttonClickHandler}
    >
      {children}
    </button>
  );
};
