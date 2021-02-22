import styled from "styled-components";
import { ArrowNarrowRight } from "../../icons";

const Root = styled.div`
  padding-bottom: ${({ theme }) => theme.padding(3)}px;
`;

const Title = styled.span`
  display: block;
  ${({ theme }) => `
    padding: ${theme.padding(3)}px;
    padding-bottom: ${theme.padding(1.5)}px;

  `}
  text-transform: uppercase;
  color: #999;
  font-size: 0.75rem;
  font-weight: 500;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  ${({ theme }) => `
    padding: ${theme.padding(1.5)}px ${theme.padding(3)}px;
    ${theme.clickable}
  `}
`;

const Link = ({ children }) => (
  <LinkWrapper>
    {children}
    <ArrowNarrowRight style={{ width: 15, height: 15, color: "#777777" }} />
  </LinkWrapper>
);

const Recents = () => {
  return (
    <Root>
      <Title>Recently Viewed</Title>
      <Link>Overall Performance</Link>
      <Link>Invoice #940</Link>
      <Link>Customer: Minerva Viewer</Link>
    </Root>
  );
};

export { Recents };
