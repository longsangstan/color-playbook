import "./Swatch.css";

import { ColorBlock } from "../ColorBlock";
import React from "react";

interface SwatchProps {
  tinyColors: tinycolor.Instance[];
  onColorClick: (color: string) => void;
  colorSize: number;
}

export const Swatch: React.FC<SwatchProps> = (props) => {
  const { tinyColors, onColorClick, colorSize } = props;

  return (
    <div className="Swatch">
      {tinyColors.map((t, i) => (
        <ColorBlock
          position={
            i === 0 ? "first" : i === tinyColors.length - 1 ? "last" : undefined
          }
          key={i}
          tinycolor={t}
          onColorClick={onColorClick}
          height={colorSize}
          width={260 / tinyColors.length}
        />
      ))}
    </div>
  );
};
