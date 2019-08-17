import tinycolor from "tinycolor2";

const getRandomPalette = (numberOfColors: number): tinycolor.Instance[] => {
  let output = [];

  for (let i = 0; i < numberOfColors; i++) {
    output.push(tinycolor.random());
  }

  return output;
};

export default getRandomPalette;
