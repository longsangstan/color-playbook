import tinycolor from "tinycolor2";

const getPrimaryPalette = (colorInput: string): tinycolor.Instance[] => {
  let output = [];

  for (let i = 2; i >= 1; i--) {
    output.push(tinycolor(colorInput).darken(i * 10));
  }

  output.push(tinycolor(colorInput));

  for (let i = 1; i <= 2; i++) {
    output.push(tinycolor(colorInput).lighten(i * 10));
  }

  return output;
};

export default getPrimaryPalette;
