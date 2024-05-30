import React, { useState } from "react";
import DonutSandwich from "../../assets/sandwich2.webp";
import DeliSandi from "../../assets/sandwich10.webp";
import CarnitasTaco from "../../assets/sandwich11.webp";

export function SandwichGalleryWithTooltip() {
  const [tooltipIndex, setTooltipIndex] = useState(null); // Track active tooltip index

  const sandwiches = [
    {
      name: "Donut Sandwich",
      ingredients: "Glazed Donut, Bacon, Cheese, Egg",
      src: DonutSandwich,
    },
    {
      name: "Fancy Deli Sandi",
      ingredients: "Salami, Ham, Cucumber, Lettuce, Tomato, Onion",
      src: DeliSandi,
    },
    {
      name: "Carnitas Taco",
      ingredients: "Carnitas, Onion, Cilantro, Salsa Verde, Something Red",
      src: CarnitasTaco,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
      }}
    >
      {sandwiches.map((sandwich, index) => (
        <div key={index} style={{ position: "relative", width: "200px" }}>
          <img
            src={sandwich.src}
            alt={sandwich.name}
            onMouseOver={() => setTooltipIndex(index)}
            onMouseOut={() => setTooltipIndex(null)}
            onFocus={() => setTooltipIndex(index)}
            onBlur={() => setTooltipIndex(null)}
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
          {tooltipIndex === index && (
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "5px 10px",
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "white",
                textAlign: "center",
                borderRadius: "4px",
                width: "180px",
                marginTop: "5px",
              }}
            >
              {sandwich.ingredients}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
