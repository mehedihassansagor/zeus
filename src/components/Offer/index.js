import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Offer.module.sass";

const Offer = ({ className }) => {
  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn("h1", styles.title)}>
         Your personal trainer, powered by Zeus
        </h2>
        <Link className={cn("button", styles.button)} to="/download">
          Download
        </Link>
      </div>
    </div>
  );
};

export default Offer;
