import React from "react";
import { ThemeProvider } from "styled-components";
import { Drawer, Hidden } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { NavPane } from "./components/NavPane";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

const container = window !== undefined ? () => window.document.body : undefined;

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  console.log(theme.breakpoints.up("lg"));

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div style={{ display: "flex" }}>
          <Hidden lgUp>
            <Drawer
              variant="temporary"
              container={container}
              open={drawerOpen}
              onClose={toggleDrawer}
            >
              <NavPane />
            </Drawer>
          </Hidden>
          <Hidden mdDown>
            <Drawer variant="permanent">
              <NavPane />
            </Drawer>
          </Hidden>
          <Header onDrawerToggleClick={toggleDrawer} />
          <Main />
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
