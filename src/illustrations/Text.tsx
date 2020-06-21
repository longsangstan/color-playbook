import React from "react";
import { designBooks } from "../constants/amazon-links";
import styled from "styled-components";

interface TextProps {
  colors: tinycolor.Instance[];
}

const ItemsWrapper = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ItemWrapper = styled.div`
  height: 100px;
  width: 300px;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.firstColor};
`;

const LinkWrapper = styled.a`
  color: ${(props) => props.theme.secondColor};
`;

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
    <ItemsWrapper>
      {colorPairs.map((pair, index) => {
        const firstColor = pair[0];
        const secondColor = pair[1];

        const bookKey = index % designBooks.length;
        return (
          <ItemWrapper
            className="with-shadow"
            theme={{ firstColor }}
            key={index}
          >
            <LinkWrapper
              theme={{ secondColor }}
              href={designBooks[bookKey].url}
              target="_blank"
            >
              {designBooks[bookKey].title}
            </LinkWrapper>
          </ItemWrapper>
        );
      })}
    </ItemsWrapper>
  );
};

export default Text;
