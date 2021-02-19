import styled from "styled-components";

const Root = styled.nav`
  border-right: ${({ theme }) => theme.surface.border};
  height: 100vh;
  overflow-y: auto;
`;

const NavPane = () => {
  return <Root></Root>;
};

export { NavPane };
