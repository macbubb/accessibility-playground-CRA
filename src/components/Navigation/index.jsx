import React from "react";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
import breadAndBanter from "../../assets/breadandbanter.png";
import styles from "./Navigation.module.scss";

export function Navigation() {
  const homeSubMenuItems = [
    { name: "Hey, where did you get that sandwich?", id: "where-get" },
    { name: "When to eat a sandwich", id: "when-eat" },
  ];
  const sandwichPhilosophySubMenuItems = [
    { name: "The Best", id: "the-best" },
    { name: "Under Rated", id: "under-rated" },
    { name: "Your Favorite Sandwich", id: "your-favorite-sandwich" },
  ];
  const howToSubMenuItems = [
    { name: "Basic Recipe", id: "basic-recipe" },
    { name: "Ingredients", id: "ingredients" },
    { name: "Equipment", id: "equipment" },
  ];

  return (
    <div className={styles.navigation}>
      <div className={styles.top}>
        <div className={styles.imgWrapper}>
          <img
            style={{ width: "100px", borderRadius: "15px" }}
            src={breadAndBanter}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <Tippy
            arrow={false}
            className={styles.submenu}
            content={<Submenu path="/" items={homeSubMenuItems} />}
            interactive={true}
            trigger="mouseenter focus"
          >
            <h4>Home</h4>
          </Tippy>
        </div>
        <div>
          <Tippy
            arrow={false}
            className={styles.submenu}
            content={
              <Submenu
                path="/philosophy"
                items={sandwichPhilosophySubMenuItems}
              />
            }
            interactive={true}
            trigger="mouseenter focus"
          >
            <h4>Our Sandwich Philosophy</h4>
          </Tippy>
        </div>
        <div>
          <Tippy
            arrow={false}
            className={styles.submenu}
            content={<Submenu path="/how-to" items={howToSubMenuItems} />}
            interactive={true}
            trigger="mouseenter focus"
          >
            <h4>How-To Guide</h4>
          </Tippy>
        </div>
      </div>
    </div>
  );
}

function Submenu({ items, path }) {
  return (
    <div>
      {items.map((item, index) => (
        <div className={styles.submenuItem} key={index}>
          <Link to={`${path}#${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}
