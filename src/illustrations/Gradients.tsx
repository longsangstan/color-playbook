import React from "react";
import styled from "styled-components";

import CopyableText from "../CopyableText";

interface GradientsProps {
  colors: tinycolor.Instance[];
}

const ItemsWrapper = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ItemWrapper = styled.div`
  margin: 10px;
  border-radius: 15px;
`;

const Gradient = styled.div`
  height: 110px;
  width: 140px;
  background: linear-gradient(
    to bottom right,
    ${props => props.theme.firstColor},
    ${props => props.theme.secondColor}
  );
  border-radius: 15px 15px 0 0;
`;

const TextWrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColorMark = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 100px
  background: ${props => props.theme.color};
  margin-right: 5px;
`;

const HexWrapper = styled.div`
  width: 80px;
  padding-left: 5px;
  margin: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Gradients: React.FC<GradientsProps> = ({ colors }) => {
  let colorPairs: string[][] = [];

  for (let i = 0; i < 1; i++) {
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
        let firstColor = pair[0];
        let secondColor = pair[1];
        return (
          <ItemWrapper className="with-shadow">
            <Gradient key={index} theme={{ firstColor, secondColor }} />
            <TextWrapper>
              <HexWrapper>
                <ColorMark theme={{ color: firstColor }} />
                <CopyableText text={firstColor.toUpperCase()} fontSize={12} />
              </HexWrapper>
              <HexWrapper>
                <ColorMark theme={{ color: secondColor }} />
                <CopyableText text={secondColor.toUpperCase()} fontSize={12} />
              </HexWrapper>
            </TextWrapper>
          </ItemWrapper>
        );
      })}
    </ItemsWrapper>
  );
};

export default Gradients;
