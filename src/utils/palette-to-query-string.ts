import queryString from "query-string";

const paletteToQueryString = (colors: tinycolor.Instance[]) => {
  const queryObj = {
    colors: colors.map((color) => color.toHex()),
  };

  return queryString.stringify(queryObj, { arrayFormat: "comma" });
};

export default paletteToQueryString;
