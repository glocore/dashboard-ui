import { CircularProgress, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => (
  <LoadingWrapper>
    <CircularProgress />
  </LoadingWrapper>
);

const CardRoot = styled(Paper)`
  ${({ theme }) => theme.elevation(1)}
`;

const Card = ({ loading, children, ...props }) => (
  <CardRoot {...props}>{loading ? <Loading /> : children}</CardRoot>
);

const CardHeader = styled.div`
  ${({ theme }) => `
    padding: ${theme.padding(2)}px ${theme.padding(4)}px;
    border-bottom: ${theme.surface.border};
  `}
`;

const CardHeaderText = styled.span`
  display: block;
  font-size: 1.2rem;
  font-weight: 500;
  margin: ${({ theme }) => theme.padding(1)}px 0;
`;

const contentAppearAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px)
  }
  to {
    opacity: 1
    transform: translateY(0)
  }
`;

const CardContent = styled.div`
  padding: ${({ theme, noPadding }) => (noPadding ? 0 : theme.padding(4))}px;
  animation-name: ${contentAppearAnimation};
  animation-fill-mode: backwards;
  animation-timing-function: ease-in-out;
  animation-duration: 350ms;
`;

CardContent.propTypes = {
  noPadding: PropTypes.bool,
};

export { Card, CardHeader, CardContent, CardHeaderText };
