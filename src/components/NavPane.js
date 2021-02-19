import styled from "styled-components";

const Root = styled.nav`
  border-right: 1px solid ${({ theme }) => theme.surface.borderColor};
  height: 100vh;
  overflow-y: auto;
`;

const NavPane = () => {
  return <Root></Root>;
};

export { NavPane };
