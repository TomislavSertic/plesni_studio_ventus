import React from "react";
import styles from "./NavigationList.module.scss";
import { NAVIGATIONPATHS } from "./../NAVIGATIONPATHS";
import { INavLink } from "../../../../types/general";
import Link from "next/link";
export const NavigationList: React.FC<{ closeModal: Function }> = ({
  closeModal,
}) => {
  return (
    <ul className={styles["navigation-list"]}>
      {NAVIGATIONPATHS.map((link) => {
        return (
          <NavigationItem
            key={link.id}
            closeModal={closeModal}
            linkData={link}
          />
        );
      })}
      <NavigationItem
        key={123442}
        closeModal={closeModal}
        linkData={{
          name: "cjenik",
          path: "/schedule#price-list",
          id: 123532,
        }}
      />
    </ul>
  );
};

const NavigationItem: React.FC<{
  linkData: INavLink;
  closeModal: Function;
}> = ({ linkData, closeModal }) => {
  const linkClickHandler = () => {
    closeModal();
  };
  return (
    <li className={styles["navigation-item"]}>
      <Link href={linkData.path} onClick={linkClickHandler}>
        {linkData.name}
      </Link>
    </li>
  );
};
