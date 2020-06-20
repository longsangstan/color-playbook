import { Badge, Box, CircularProgress, TextField } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
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

  const themeTwo = createMuiTheme({
    palette: {
      primary: { main: colors[3].toHexString() },
      secondary: { main: colors[4].toHexString() },
    },
  });

  return (
    <div style={{ fontFamily: "Roboto" }}>
      <ThemeProvider theme={theme}>
        <Box>
          <Box component="span" m={0.5}>
            <Button variant="contained" color="primary">
              Primary
            </Button>
          </Box>
          <Box component="span" m={0.5}>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
          </Box>

          <ThemeProvider theme={themeTwo}>
            <Box component="span" m={0.5}>
              <Button variant="contained" color="primary">
                Custom One
              </Button>
            </Box>
            <Box component="span" m={0.5}>
              <Button variant="contained" color="secondary">
                Custom Two
              </Button>
            </Box>
          </ThemeProvider>
        </Box>

        <Box m={4}>
          <Box component="span" m={0.5}>
            <Button color="primary">Primary</Button>
          </Box>
          <Box component="span" m={0.5}>
            <Button color="secondary">Secondary</Button>
          </Box>

          <ThemeProvider theme={themeTwo}>
            <Box component="span" m={0.5}>
              <Button variant="outlined" color="primary">
                Custom One
              </Button>
            </Box>
            <Box component="span" m={0.5}>
              <Button variant="outlined" color="secondary">
                Custom Two
              </Button>
            </Box>
          </ThemeProvider>
        </Box>

        <Box m={4}>
          <Box component="span" m={0.5}>
            <TextField
              id="standard-basic"
              label="Standard"
              defaultValue="Hello World"
            />
          </Box>
          <Box component="span" m={0.5}>
            <TextField
              error
              id="standard-error"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
            />
          </Box>
        </Box>

        <Box m={4}>
          <style type="text/css">
            {`
            .MuiBadge-badge {
              z-index: 0
            }
          `}
          </style>
          <Box component="span" m={1}>
            <Badge
              badgeContent={Math.round(Math.random() * 10) + 1}
              color="primary"
            >
              <MailOutlineIcon />
            </Badge>
          </Box>

          <Box component="span" m={1}>
            <Badge
              badgeContent={Math.round(Math.random() * 10) + 1}
              color="secondary"
            >
              <MailOutlineIcon />
            </Badge>
          </Box>

          <Box component="span" m={1}>
            <Badge
              badgeContent={Math.round(Math.random() * 10) + 1}
              color="error"
            >
              <MailOutlineIcon />
            </Badge>
          </Box>
        </Box>

        <Box m={4}>
          <Box component="span" m={1}>
            <CircularProgress />
          </Box>
          <Box component="span" m={1}>
            <CircularProgress color="secondary" />
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default MaterialDesign;
