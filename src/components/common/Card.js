import styled from "styled-components";

const Root = styled.div`
  background-color: ${({ theme }) => theme.surface.backgroundColor};
  border: ${({ theme }) => theme.surface.border};
  border-radius: 5px;
`;

const HeaderWrapper = styled.div`
  padding: ${({ theme }) => theme.padding(4)}px;
  border-bottom: ${({ theme }) => theme.surface.border};
`;
const ContentWrapper = styled.div`
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
      <ContentWrapper>{children}</ContentWrapper>
    </Root>
  );
};

export { Card };
