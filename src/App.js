import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import { NavPane } from "./components/NavPane";
import { Main } from "./components/Main";

const Root = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  min-height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <NavPane></NavPane>
        <Main></Main>
      </Root>
    </ThemeProvider>
  );
}

export default App;
