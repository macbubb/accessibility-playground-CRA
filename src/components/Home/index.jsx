import React from "react";
import styles from "./Home.module.scss"; // Assuming you have some styles defined
import { LikeButton } from "../LikeButton";
import Sandwich from "../../assets/sandwich4.webp";

export function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.bigger}>Hey, where did you get that sandwich?</div>
      <div id="where-get" className={styles.split}>
        <div className={styles.left}>
          <p>
            One time a very considerate and thoughtful person asked me:{" "}
            <i>what question do you wish people asked you more often?</i> My
            immediate response was, "Hey, where did you get that sandwich?". If
            only people had a reason to ask me that more often... I love
            sandwiches.
          </p>
        </div>
        <div className={styles.right}>
          <img
            style={{ width: "220px", borderRadius: "15px" }}
            src={Sandwich}
            alt="sandwich"
          />
        </div>
      </div>
      <div id="when-eat">
        <div className={styles.bigger}>When to eat a sandwich</div>
        <p>
          Sandwiches are not bound by the conventional constraints of meal
          timing. They are the rebels of the dining world, ready to be enjoyed
          at any hour. Breakfast? Grab a bacon, egg, and cheese. Lunch? A
          classic turkey and Swiss will do. Dinner? How about a hearty meatball
          sub. But let’s not stop there — the midnight sandwich is a sacred
          ritual for many, a secret delight in the quiet hours of the night.
          Whether you're scaling a mountain, sitting in a meeting, or escaping
          from a bear, the right time to eat a sandwich is simply when hunger
          strikes you.
        </p>
      </div>

      <div className={styles.barChartWrapper}>
        <div className={styles.barChart}>
          <div className={styles.hungry}>before sandwich</div>
          <div className={styles.sated}>after sandwich</div>
        </div>
      </div>

      <div className={`${styles.bigger} ${styles.caption}`}>
        <LikeButton />
        <span>Effect of eating a sandwich on hunger</span>
      </div>
    </div>
  );
}
