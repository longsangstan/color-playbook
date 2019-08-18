import React from "react";

interface GradientsProps {
  colors: tinycolor.Instance[];
}

const Gradients: React.FC<GradientsProps> = ({ colors }) => {
  return (
    <div className="gradients-wrapper">
      {colors.map((color, index) => {
        let firstColor: string;
        let secondColor: string;
        if (index === 0) {
          // return null;
          firstColor = color.toHexString();
          secondColor = colors[0]
            .clone()
            .brighten(40)
            .toHexString();
        } else {
          firstColor = colors[0].toHexString();
          secondColor = color.toHexString();
        }
        return (
          <div
            className="with-shadow"
            style={{
              margin: 8,
              borderRadius: "100px",
              height: 50,
              width: 50,
              background: `linear-gradient(to right, ${firstColor}, ${secondColor})`
            }}
          />
        );
      })}
    </div>
  );
};

export default Gradients;
