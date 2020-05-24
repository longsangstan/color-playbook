import tinycolor from "tinycolor2";
import queryString from "query-string";
import getRandomPalatte from "./get-random-palette";

const getPaletteFromQueryParams = (
  queryParams: queryString.ParsedQuery<string>
): tinycolor.Instance[] => {
  let result = getRandomPalatte(5);

  if (typeof queryParams.colors === "string") {
    const colorStrings = queryParams.colors.split(",");
    if (colorStrings.length === 5) {
      result = colorStrings.map(item => tinycolor(item));
    }
  }

  return result;
};

export default getPaletteFromQueryParams;
