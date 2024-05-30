import React from "react";
import styles from "./HowToGuide.module.scss";
import { SandwichGalleryWithTooltip } from "../SandwichGalleryWithTooltip";
import { EmailSignupModal } from "../EmailSignUpModal";

export const HowToGuide = () => {
  return (
    <div className={styles.howToGuide}>
      <div id="basic-recipe">
        <div className={styles.bigger}>Basic Recipe</div>
        <p>
          Crafting the perfect sandwich is an art that starts with a good
          foundation. Begin with high-quality, fresh bread — be it a soft
          brioche bun, a hearty ciabatta, or a classic whole wheat. Lightly
          toast the bread to add crunch and flavor. Layer your main ingredients,
          such as meats, cheeses, and veggies, thoughtfully to balance texture
          and taste. Remember, less is often more; do not overload your
          sandwich, but ensure each bite is flavorful.
        </p>
      </div>
      <div id="ingredients">
        <div className={styles.bigger}>Ingredients</div>
        <p>
          The choice of ingredients can transform a mundane sandwich into a
          culinary delight. Start with fresh, local produce and quality
          proteins. Experiment with different types of cheeses and a variety of
          condiments to find what excites your palate. Below is a gallery
          showcasing different sandwiches with unusual but delicious toppings
          that might inspire your next creation.
        </p>
        <SandwichGalleryWithTooltip />
      </div>
      <div id="equipment">
        <div className={styles.bigger}>Equipment</div>
        <p>
          No special equipment is necessary for making great sandwiches, but a
          few key items can enhance your experience. A sharp knife is essential
          for cleanly cutting sandwiches and ingredients. A sandwich press or a
          heavy skillet can be useful for making grilled sandwiches or paninis.
          Additionally, having a good cutting board and some simple serving
          plates will make preparation and presentation easier.
        </p>
      </div>
      <EmailSignupModal />
    </div>
  );
};
