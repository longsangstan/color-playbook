import "./Ad.css";

import { designBooks, searchResults } from "../constants/amazon-links";

import React from "react";

interface AdProps {
  bookKey?: number;
  colors: tinycolor.Instance[];
}

export const Ad: React.FC<AdProps> = ({ colors, bookKey = 0 }) => {
  return (
    <div
      className="Ad with-shadow"
      style={{ backgroundColor: colors[0].toHexString() }}
    >
      <div
        className="Ad__label"
        style={{
          backgroundColor: colors[2].toHexString(),
          color: colors[2].isDark() ? "white" : "black",
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
          style={{ borderColor: colors[1].toHexString() }}
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
        More design classics..
      </a>
    </div>
  );
};
