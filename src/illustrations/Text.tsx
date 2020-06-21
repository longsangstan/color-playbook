import "./Text.css";

import React from "react";
import { designBooks } from "../constants/amazon-links";

interface TextProps {
  colors: tinycolor.Instance[];
}

const Text: React.FC<TextProps> = ({ colors }) => {
  let colorPairs: string[][] = [];

  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < colors.length; j++) {
      if (colors[i].toHexString() !== colors[j].toHexString()) {
        const newPair = [colors[i].toHexString(), colors[j].toHexString()];
        colorPairs.push(newPair);
      }
    }
  }

  return (
    <div className="Text__wrapper">
      {colorPairs.map((pair, index) => {
        const firstColor = pair[0];
        const secondColor = pair[1];

        const bookKey = index % designBooks.length;
        return (
          <div
            className="Text__item with-shadow"
            style={{ background: firstColor }}
            key={index}
          >
            <a
              style={{ color: secondColor }}
              href={designBooks[bookKey].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {designBooks[bookKey].title}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Text;
