import React, { useState } from "react";
import { FaHeart } from "react-icons/fa"; // Using react-icons for the heart symbol

export function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      style={{
        border: "0",
        color: liked ? "red" : "grey",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "inherit",
      }}
    >
      <FaHeart size={24} />
    </button>
  );
}
