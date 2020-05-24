import Button from "@material-ui/core/Button";
import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

interface MaterialDesignProps {
  colors: tinycolor.Instance[];
}

const MaterialDesign: React.FC<MaterialDesignProps> = ({ colors }) => {
  const theme = createMuiTheme({
    palette: {
      primary: { main: colors[0].toHexString() },
      secondary: { main: colors[1].toHexString() },
      error: { main: colors[2].toHexString() },
    },
  });

  return (
    <div style={{ fontFamily: "Roboto" }}>
      <ThemeProvider theme={theme}>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default MaterialDesign;
