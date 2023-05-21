import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Workouts.module.sass";
import Image from "../Image";
import phoneImageWhite from "../../change_image/phonesWhitemain.png"
import phoneImageDark from "../../change_image/phonesDarkmain.png"

const items = [
  // "Zeus Cloud",
  // "Syncs with Google Fit",
  "Syncs with Apple Watch",
  "Track your progress easily",
  "Intuitive and clean design",
];

const Workouts = () => {
  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <img
              // srcSet="/images/content/phones@2x.png 2x"
              // srcSetDark="/images/content/phones-dark@2x.png 2x"
              // src="/images/content/phones.png"
              // srcDark="/images/content/phones-dark.png"
              // alt="Phones"
              className="image-fluid"
              src = {phoneImageWhite}
              srcDark = {phoneImageDark}
              alt="Phones"
              
            />
          </div>
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>
            All your workouts, <br></br>in your pocket
          </h2>
          <div className={styles.info}>
            Zeus helps track your workouts, get better results, and be
            the best version of you. Less thinking!
          </div>
          <ul className={styles.list}>
            {items.map((x, index) => (
              <li className={styles.item} key={index}>
                {x}
              </li>
            ))}
          </ul>
          <div className={styles.btns}>
            <button className={cn("button-stroke", styles.button)}>
              Request a demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
