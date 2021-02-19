import styled from "styled-components";
import { Header } from "./main/Header";

const Root = styled.div`
  background-color: #fbfbfd;
  min-height: 100vh;
`;

const Main = () => {
  return (
    <Root>
      <Header />
    </Root>
  );
};

export { Main };
