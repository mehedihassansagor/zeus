import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import ScrollButton from "../../../components/ScrollButton";
import ScrollParallax from "../../../components/ScrollParallax";
import mainImgWhite from "../../../change_image/main-pic-white.png";
import mainImgDark from "../../../change_image/main-pic-dark.png";

// steps
const items = [
  {
    title: "Download",
    color: "#3772FF",
    images: "/images/content/download.svg",
    content:
      "Zeus tracks your workouts, get better results, and be the best version of you.",
  },
  {
    title: "Join Program",
    color: "#9757D7",
    images: "/images/content/whistle.svg",
    content:
      "Zeus tracks your workouts, get better results, and be the best version of you.",
  },
  {
    title: "Workout",
    color: "#EF466F",
    images: "/images/content/medal.svg",
    content:
      "Zeus tracks your workouts, get better results, and be the best version of you.",
  },
  {
    title: "Track Progress",
    color: "#45B26B",
    images: "/images/content/stopwatch.svg",
    content:
      "Zeus tracks your workouts, get better results, and be the best version of you.",
  },
];

const Hero = ({ scrollToRef }) => {
  return (
    <>
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
            <Image
              className="img-fluid"
              srcSet={mainImgWhite}
              srcSetDark={mainImgWhite}
              src={mainImgWhite}
              srcDark={mainImgDark}
              alt="Watch"
            />
          </div>
        </div>
      </div>
      <div className={cn("section", styles.section)} ref={scrollToRef}>
        <div className={cn("container", styles.container)}>
          <div className={styles.head}>
            <h2 className={cn("h2", styles.title)}>How it works</h2>
          </div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <ScrollParallax className={styles.item} key={index}>
                <div
                  className={styles.preview}
                  style={{ backgroundColor: x.color }}
                >
                  <img className="img-fluid p-4" src={x.images} alt={`Step ${index}`} />
                </div>
                <div className={styles.number}>Step {index + 1}</div>
                <div className={styles.subtitle}>{x.title}</div>
                <div className={styles.content}>{x.content}</div>
              </ScrollParallax>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
