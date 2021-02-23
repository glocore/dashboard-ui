import { Paper } from "@material-ui/core";
import styled from "styled-components";

const Card = styled(Paper)`
  border: 1px solid #eeeeee;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

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
