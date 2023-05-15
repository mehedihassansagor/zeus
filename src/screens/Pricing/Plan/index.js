import React, { useState } from "react";
import cn from "classnames";
import styles from "./Plan.module.sass";
import Icon from "../../../components/Icon";

const options = [
  {
    title: "Main features",
    items: [
      {
        title: "Programs",
        description: "Number of active programs the user allowed to have in his account",
      },
      {
        title: "Max Programs Duration",
        description: "The Maximum number of weeks the program duration will last ",
      },
      {
        title: "Chat",
        description: "chating with enrolled users in the program",
      },
      {
        title: "Users reporting",
        description: "Trainers will be able to view reporting states for each users",
      },
      {
        title: "Sending notifications ",
        description: "Allow to send notification for all the joined users in the program",
      },
      {
        title: "Creating Clubs",
        description: "Allow to create a club and link ",
      },
      {
        title: "Support ",
        description: "Time for support team to review your ticket ",
      },
      {
        title: "Workouts per day",
        description: "Workouts for each day in the program",
      },
      {
        title: "Points",
        description: "Points can be used to be given to users who win events in a club",
      },
    ],
  },
];

const data = [
  {
    title: "Advanced",
    color: "#9757D7",
    // description: "14 days of free trial",
    // price: "1",
    note: "per month",
    button: "Get Start",
    options: [
      "1",
      "4 weeks",
      "Yes",
      "--",
      "--",
      "--",
      "4-5 days",
      "Up to 5",
      "--",
    ],
  },
  {
    title: "Pro",
    color: "#FF592C",
    // description: "Fit with everyone",
    // price: "20.88",
    note: "per month",
    button: "Get Started",
    options: [
      "4",
      "8 Weeks",
      "yes",
      "yes",
      "yes",
      "4-5 days",
      "up to 12 days",
      "--",
    ],
  },
  {
    title: "Premium",
    color: "#EF466F",
    // description: "Are you pro? Let’s do it",
    button: "Contact Sale",
    options: [
      "12",
      "12 Weeks",
      "yes",
      "yes",
      "yes",
      "High priority ",
      "up to 12 days",
      "5000",
    ],
  },
];

const Plan = () => {
  const [more, setMore] = useState([false, false, false]);

  const handleClick = (index) => {
    let newMore = [...more];
    newMore[index] = !more[index];

    setMore(newMore);
  };

  const renderContent = (content) => {
    if (content === "true") {
      return <Icon name="check" size="14" />;
    }
    if (content === "false") {
      return <div className={styles.minus}>-</div>;
    }
    return <div className={styles.minus}>{content}</div>;
  };

  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h1 className={cn("h1", styles.title)}>
          Choose a plan that’s right for you
        </h1>
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.head}></div>
              <div className={styles.body}>
                {options.map((option, index) => (
                  <div className={styles.item} key={index}>
                    <div className={styles.category}>{option.title}</div>
                    {option.items.map((item, index) => (
                      <div className={styles.parameter} key={index}>
                        <div className={styles.label}>{item.title}</div>
                        <div className={styles.hint}>
                          <Icon name="info" size="10" />
                          <div className={styles.tooltip}>
                            {item.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {data.map((type, index) => (
              <div className={styles.col} key={index}>
                <div className={styles.head}>
                  <div className={styles.package} style={{ color: type.color }}>
                    {type.title}
                  </div>
                  <div className={styles.description}>{type.description}</div>
                  {type.price && (
                    <>
                      <div className={styles.cost}>
                        <span className={styles.sign}>$</span>
                        <span className={styles.price}>{type.price}</span>
                      </div>
                      <div className={styles.note}>{type.note}</div>
                    </>
                  )}
                </div>
                <div className={styles.body}>
                  <div
                    className={cn(styles.more, {
                      [styles.active]: more[index],
                    })}
                    onClick={() => handleClick(index)}
                  >
                    See all features
                    <Icon name="arrow-bottom" size="9" />
                  </div>
                  <div
                    className={cn(styles.list, {
                      [styles.visible]: more[index],
                    })}
                  >
                    {options.map((option, optionIndex) => (
                      <div className={styles.item} key={optionIndex}>
                        {option.items.map((item, itemIndex) => (
                          <div className={styles.parameter} key={itemIndex}>
                            <div className={styles.label}>{item.title}</div>
                            {renderContent(type.options[itemIndex])}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <button
                    className={cn(
                      { button: index === 0 },
                      { button: index === 1 },
                      { "button-stroke": index === 2 },
                      styles.button
                    )}
                  >
                    {type.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
