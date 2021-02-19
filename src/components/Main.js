import styled from "styled-components";
import { Card } from "./common/Card";
import { Header } from "./main/Header";

const Root = styled.div`
  background-color: #fbfbfd;
  min-height: 100vh;
`;

const Grid = styled.div`
  padding: ${({ theme }) => theme.padding(4)}px;
`;

const Main = () => {
  return (
    <Root>
      <Header />
      <Grid>
        <Card></Card>
      </Grid>
    </Root>
  );
};

export { Main };
