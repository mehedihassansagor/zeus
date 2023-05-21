import React from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";

import MainPicdowndark from "../../../change_image/main-pic-dark.png"
import MainPicdownwhite from "../../../change_image/main-pic-white.png"



const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.col}>
          <div className={styles.preview}>
            <Image
              // src="/images/content/download-pic.png"
              // srcDark="/images/content/download-pic-dark.png"
              src={MainPicdownwhite}
              srcDark={MainPicdowndark}
              alt="Download bg"
            />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.wrap}>
            <div className={cn("stage", styles.stage)}>
              time to get Zeus
            </div>
            <h1 className={cn("h1", styles.title)}>
              ZEUS for any device.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
