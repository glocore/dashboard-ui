import styled from "styled-components";
import { ArrowNarrowRight as ArrowNarrowRightIcon } from "../../icons";

const Root = styled.div`
  padding-bottom: ${({ theme }) => theme.padding(3)}px;
`;

const Title = styled.span`
  display: block;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 500;
  ${({ theme }) => `
    padding: ${theme.padding(3)}px;
    padding-bottom: ${theme.padding(1.5)}px;
    color: ${theme.fontColor.light};
  `}
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

const StyledArrowIcon = styled(ArrowNarrowRightIcon)`
  width: 15px;
  height: 15px;
  color: #777777;
`;

const Link = ({ children }) => (
  <LinkWrapper>
    {children}
    <StyledArrowIcon />
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
