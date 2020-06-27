import "./Ad.css";

import { designBooks, searchResults } from "../constants/amazon-links";

import React from "react";

interface AdProps {
  bookKey?: number;
  colors: tinycolor.Instance[];
}

export const Ad: React.FC<AdProps> = ({ colors, bookKey }) => {
  bookKey = bookKey || Math.floor(Math.random() * designBooks.length);

  return (
    <div
      className="Ad with-shadow"
      style={{ backgroundColor: colors[1].isDark() ? "white" : "black" }}
    >
      <div
        className="Ad__label"
        style={{
          backgroundColor: colors[1].toHexString(),
          color: colors[2].toHexString(),
        }}
      >
        Ad
      </div>

      <a
        style={{ color: colors[1].toHexString(), margin: 30 }}
        href={designBooks[bookKey].url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="Ad__img" src={designBooks[bookKey].img} alt="ad" />
        <div
          className="Ad__bookTitle"
          style={{ textDecorationColor: colors[1].toHexString() }}
        >
          {designBooks[bookKey].title}
        </div>
      </a>

      <a
        className="Ad__action with-shadow"
        style={{
          backgroundColor: colors[3].toHexString(),
          color: colors[4].toHexString(),
        }}
        href={searchResults[0].url}
        target="_blank"
        rel="noopener noreferrer"
      >
        More classic design books...
      </a>
    </div>
  );
};
