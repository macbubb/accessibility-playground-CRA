import React, { useState } from "react";

import styles from "./SandwichForm.module.scss";

export function SandwichForm() {
  const [sandwich, setSandwich] = useState({
    sandwichName: "",
    ingredients: "",
    submitterName: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setSandwich({ ...sandwich, [e.target.name]: e.target.value });
    // Clear error on input change
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let currentErrors = {};
    // Validate fields and add errors
    if (!sandwich.sandwichName) {
      currentErrors.sandwichName = true;
    }
    if (!sandwich.ingredients) {
      currentErrors.ingredients = true;
    }
    if (!sandwich.submitterName) {
      currentErrors.submitterName = true;
    }

    setErrors(currentErrors);
    if (Object.keys(currentErrors).length === 0) {
      console.log(sandwich); // Log to console as if submitting
    }
  };

  return (
    <div>
      <p>
        Do you have a very favorite sandwich? Take a moment to share, please!
      </p>
      <form className={styles.sandwichForm} onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="sandwichName"
            value={sandwich.sandwichName}
            onChange={handleChange}
            placeholder="Name of Sandwich"
            style={{ borderColor: errors.sandwichName ? "red" : "initial" }}
          />
        </div>
        <div>
          <textarea
            name="ingredients"
            value={sandwich.ingredients}
            onChange={handleChange}
            placeholder="Ingredients"
            style={{ borderColor: errors.ingredients ? "red" : "initial" }}
          />
        </div>
        <div>
          <input
            type="text"
            name="submitterName"
            value={sandwich.submitterName}
            onChange={handleChange}
            placeholder="Your Name"
            style={{ borderColor: errors.submitterName ? "red" : "initial" }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SandwichForm;
