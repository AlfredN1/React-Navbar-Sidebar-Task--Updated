import React from "react";
import Button from "../Button/Button";
import "./TagList.css";

function TagList() {
  // Skapa en array med 8 knappar
  const tags = Array(8).fill("Click Tag BTN");

  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <Button key={index} text={tag} />
      ))}
    </div>
  );
}

export default TagList;
