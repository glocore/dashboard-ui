import { CircularProgress, Paper } from "@material-ui/core";
import styled from "styled-components";

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

const CardContent = styled.div`
  padding: ${({ theme }) => theme.padding(4)}px;
`;

export { Card, CardHeader, CardContent, CardHeaderText };
