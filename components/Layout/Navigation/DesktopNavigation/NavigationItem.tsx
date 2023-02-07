import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { INavLink } from "../../../../types/general";
import styles from "./NavigationItem.module.scss";
export const NavigationItem: React.FC<{
  item: INavLink;
}> = ({ item }) => {
  const router = useRouter();
  const firstPartPath = router.asPath.split("/");
  const currentPage = firstPartPath[1] === item.path.split("/")[1];
  return (
    <Link
      href={item.path}
      className={`${styles["navigation-item"]} ${
        currentPage && styles["active"]
      }`}
    >
      <li>{item.name}</li>
    </Link>
  );
};
