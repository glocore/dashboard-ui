import { Table, TableBody, TableContainer, TableHead } from "@material-ui/core";
import React from "react";
import styled, { keyframes } from "styled-components";
import { Card, CardContent, CardHeader, CardHeaderText } from "../common/Card";
import { TableHeadCell, TableCell, TableRow } from "../common/Table";
import { useData } from "./socialTrafficTable/data";

const scaleAnimation = (width) => keyframes`
  from {
    width: 0%;
  }

  to {
    width: ${width}%;
  }
`;

const ProgressTrack = styled.div`
  width: 100%;
  min-width: 90px;
  height: 4px;
  background-color: #dddddd;
  border-radius: 4px;
  @media (min-width: 1500px) {
    min-width: 100px;
  }
`;

const Progress = styled.div`
  height: 4px;
  width: ${({ percent }) => percent}%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 4px;
  animation-name: ${({ percent }) => scaleAnimation(percent)};
  animation-fill-mode: backwards;
  animation-timing-function: ease-in-out;
  animation-duration: 1500ms;
`;

const PercentBar = ({ percent }) => {
  return (
    <ProgressTrack>
      <Progress percent={percent} />
    </ProgressTrack>
  );
};

const SocialTrafficTable = () => {
  const { loading, data } = useData();

  return (
    <Card style={{ height: 500 }} loading={loading}>
      <CardHeader>
        <CardHeaderText>Social Media Traffic</CardHeaderText>
      </CardHeader>
      <CardContent noPadding>
        <TableContainer
          style={{ height: "100%", maxHeight: 400, width: "100%" }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableHeadCell>Network</TableHeadCell>
                <TableHeadCell>Visitors</TableHeadCell>
                <TableHeadCell>{""}</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index} hover>
                  <TableCell>{row.network}</TableCell>
                  <TableCell>{row.visitors.toLocaleString()}</TableCell>
                  <TableCell>
                    <PercentBar percent={row.percentVisitors} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export { SocialTrafficTable };
