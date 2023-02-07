import React from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import styles from "./Footer.module.scss";
export const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <nav>
          <div className="link-group">
            <h2>Contacts</h2>
            <ul>
              <li>example@dance_studio.com</li>
              <li>1-002-448-568</li>
            </ul>
          </div>
        </nav>
      </Wrapper>
    </footer>
  );
};
