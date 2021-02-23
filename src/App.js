import React from "react";
import { ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { NavDrawer } from "./components/NavPane";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div style={{ display: "flex" }}>
          <NavDrawer open={drawerOpen} onClose={toggleDrawer} />
          <Header onDrawerToggleClick={toggleDrawer} />
          <Main />
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
