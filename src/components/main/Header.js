import styled from "styled-components";

const Root = styled.div`
  ${({ theme }) => `
    height: 50px;
    width: 100%;
    background-color: ${theme.surface.backgroundColor};
    border-bottom: 1px solid ${theme.surface.borderColor};
  `}
`;

const Header = () => {
  return <Root></Root>;
};

export { Header };
