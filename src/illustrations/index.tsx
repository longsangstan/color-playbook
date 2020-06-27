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
  let bookKey = 0;

  if (type === "bootstrap") bookKey = 1;
  if (type === "material") bookKey = 2;
  if (type === "gradients") bookKey = 3;
  if (type === "text") bookKey = 4;

  return (
    <>
      {type === "bootstrap" && <Bootstrap colors={colors} />}
      {type === "material" && <MaterialDesign colors={colors} />}

      {type === "pattern" && <Pattern colors={colors} />}
      {type === "gradients" && <Gradients colors={colors} />}

      {type === "text" && <Text colors={colors} />}

      <Ad colors={colors} bookKey={bookKey} />
    </>
  );
};

export default Illustrations;
