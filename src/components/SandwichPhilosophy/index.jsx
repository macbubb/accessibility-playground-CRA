import React from "react";

import styles from "./SandwichPhilosophy.module.scss";
import Sandwich from "../../assets/sandwich3.webp";
import SecondSandwich from "../../assets/sandwich9.webp";
import { SandwichForm } from "../Sandwich Form";

export const SandwichPhilosophy = () => {
  return (
    <div className={styles.philosphy}>
      <div id="the-best">
        <div className={styles.hero}>
          <div className={styles.heroOverlay}>
            <h1>The Best</h1>
          </div>
          <img
            style={{ width: "500px", borderRadius: "15px" }}
            src={Sandwich}
            alt="sandwich"
            className={styles.heroImage}
          />
        </div>
      </div>
      <div id="under-rated">
        <div className={styles.bigger}>Under Rated</div>
        <p>
          Sandwiches, often sidelined as just another item on the lunch menu,
          are in fact culinary masterpieces that deserve far more acclaim. At
          their core, sandwiches represent the pinnacle of creativity in the
          culinary world. They are the canvas on which flavors, textures, and
          cultures blend seamlessly. From the simplicity of a perfectly toasted
          BLT where the crunch of lettuce meets the smokiness of bacon, to the
          complexity of a banh mi that encapsulates an entire spectrum of
          savory, sweet, and tangy, each sandwich tells a story.
        </p>
        <div className={styles.split}>
          <div className={styles.left}>
            <img
              style={{ width: "200px", borderRadius: "15px" }}
              src={SecondSandwich}
              alt="sandwich"
            />
          </div>
          <div className={styles.right}>
            <p>
              Consider the versatility: a sandwich can be as humble or as
              luxurious as the maker chooses, utilizing ingredients from every
              corner of the food pyramid. Whether it's the rich layers of a
              hearty Reuben or the delicate balance in a cucumber tea sandwich,
              there's a combination for every palate.
            </p>
            <p>
              Moreover, the universal appeal of sandwiches transcends borders,
              making them a global favorite. In Italy, the panini presses warm,
              gooey mozzarella between slices of ciabatta, while in Turkey, the
              doner kebab sandwich wraps spices and meat fresh off the
              rotisserie in a soft, warm pita. Each bite offers not just
              sustenance, but a taste of the region's soul.
            </p>
          </div>
        </div>

        <p>
          In conclusion, the sandwich is not just an easy meal but an art form
          that invites endless innovation. It's a testament to the magic that
          happens when diverse ingredients come together, making sandwiches not
          just good, but arguably the best dish one could ever hope to create or
          enjoy.
        </p>
      </div>
      <div id="your-favorite-sandwich">
        <div className={styles.bigger}>Your Favorite Sandwich</div>
        <SandwichForm />
      </div>
    </div>
  );
};
