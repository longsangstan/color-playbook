import React from "react";

interface ColorsContainerProps {
  title: string;
  tinyColors: tinycolor.Instance[];
  onColorClick: (color: string) => void;
}

const ColorsContainer: React.FC<ColorsContainerProps> = props => {
  const { title, tinyColors, onColorClick } = props;

  return (
    <div className="palette">
      <div className="palette-title">{title}</div>

      <div className="colors-container">
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
    </div>
  );
};

export default ColorsContainer;
