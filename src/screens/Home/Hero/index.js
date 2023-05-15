import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import ScrollButton from "../../../components/ScrollButton";
import ScrollParallax from "../../../components/ScrollParallax";
import mainImgWhite from "../../../change_image/main-pic-white.png"
import mainImgDark from "../../../change_image/main-pic-dark.png"


const Hero = ({ scrollToRef }) => {
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <ScrollParallax className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            Train smarter. get stronger
          </div>
          <h1 className={cn("h1", styles.title)}>
            Simple fitness experience for everyone.
          </h1>
          <div className={styles.text}>
            Track your workouts, get better results, and be the bestversion of
            you. Less thinking, more lifting.
          </div>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/download">
              Download App
            </Link>
          </div>
        </ScrollParallax>
        <ScrollButton
          onScroll={() =>
            scrollToRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className={styles.scroll}
        />
        <div className={styles.gallery}>
            <Image className= "mt-5"
              srcSet={mainImgWhite}
              srcSetDark={mainImgWhite}
              src={mainImgWhite}
              srcDark={mainImgDark}
              alt="Watch"
            />
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
