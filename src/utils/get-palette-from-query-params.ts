import queryString from "query-string";
import tinycolor from "tinycolor2";

const getPaletteFromQueryParams = (
  queryParams: queryString.ParsedQuery<string>
) => {
  let result = null;

  if (typeof queryParams.colors === "string") {
    const colorStrings = queryParams.colors.split(",");
    if (colorStrings.length === 5) {
      result = colorStrings.map((item) => tinycolor(item));
    }
  }

  return result;
};

export default getPaletteFromQueryParams;
