import React from "react";

interface PaletteProps {
  tinyColors: tinycolor.Instance[];
  onColorClick: (color: string) => void;
  smallColorPlate?: boolean;
}

const Palette: React.FC<PaletteProps> = props => {
  const { tinyColors, onColorClick, smallColorPlate } = props;

  return (
    <div className="palette">
      {tinyColors.map(t => (
        <div
          className="color"
          style={{
            background: t.toHexString(),
            width: smallColorPlate ? 25 : 50,
            height: smallColorPlate ? 25 : 50
          }}
          onClick={() => onColorClick(t.toHexString())}
        />
      ))}
    </div>
  );
};

Palette.defaultProps = {
  smallColorPlate: false
};

export default Palette;
