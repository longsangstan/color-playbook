import React from "react";

interface PaletteProps {
  tinyColors: tinycolor.Instance[];
  onColorClick: (color: string) => void;
}

const Palette: React.FC<PaletteProps> = props => {
  const { tinyColors, onColorClick } = props;

  return (
    <div className="palette">
      {tinyColors.map(t => (
        <div
          className="color"
          style={{
            background: t.toHexString(),
            height: 50,
            width: 600 / tinyColors.length
          }}
          onClick={() => onColorClick(t.toHexString())}
        />
      ))}
    </div>
  );
};

export default Palette;