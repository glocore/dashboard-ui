import styled from "styled-components";

const Root = styled.div`
  background-color: ${({ theme }) => theme.surface.backgroundColor};
  border: ${({ theme }) => theme.surface.border};
  border-radius: 3px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const HeaderWrapper = styled.div`
  ${({ theme }) => `
    padding: ${theme.padding(2)}px ${theme.padding(4)}px;
    border-bottom: ${theme.surface.border};
  `}
`;

const HeaderText = styled.span`
  display: block;
  font-size: 1.2rem;
  font-weight: 500;
  margin: ${({ theme }) => theme.padding(1)}px 0;
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.padding(4)}px;
`;

const Card = ({ children, Header }) => {
  return (
    <Root>
      {Header ? (
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
      ) : null}
      {children}
    </Root>
  );
};

export { Card, CardContent, HeaderText };
