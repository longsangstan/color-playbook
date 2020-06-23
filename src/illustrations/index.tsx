import { Ad } from "./Ad";
import Bootstrap from "./Bootstrap";
import Gradients from "./Gradients";
import MaterialDesign from "./MaterialDesign";
import Pattern from "./Pattern";
import React from "react";
import Text from "./Text";

interface IllustrationsProps {
  colors: tinycolor.Instance[];
  type: string;
}

const Illustrations: React.FC<IllustrationsProps> = ({ colors, type }) => {
  return (
    <>
      {type === "bootstrap" && <Bootstrap colors={colors} />}
      {type === "material" && <MaterialDesign colors={colors} />}

      {type === "pattern" && (
        <div style={{ height: 350, width: 350 }}>
          <Pattern colors={colors} />
        </div>
      )}
      {type === "gradients" && <Gradients colors={colors} />}

      {type === "text" && <Text colors={colors} />}

      <Ad colors={colors} />
    </>
  );
};

export default Illustrations;
