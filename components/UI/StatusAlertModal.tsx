import React from "react";
import styles from "./StatusAlertModal.module.scss";
interface IStatusAlertModal {
  message: string;
  status: "error" | "alert" | "success";
}

export const StatusAlertModal: React.FC<IStatusAlertModal> = ({
  message,
  status,
}) => {
  if (status === "alert") {
    return (
      <div className={`${styles["status-modal"]} ${styles["alert"]}`}>
        <div className={styles["message-container"]}>
          <p>{message}</p>
        </div>
      </div>
    );
  }
  if (status === "error") {
    return (
      <div className={`${styles["status-modal"]} ${styles["error"]}`}>
        <div className={styles["message-container"]}>
          <p>{message}</p>
        </div>
      </div>
    );
  }
  if (status === "success") {
    return (
      <div className={`${styles["status-modal"]} ${styles["success"]}`}>
        <div className={styles["message-container"]}>
          <p>{message}</p>
        </div>
      </div>
    );
  }

  return <></>;
};
