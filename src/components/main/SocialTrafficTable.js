import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import styled, { keyframes } from "styled-components";
import { TableHeadCell } from "../common/Table";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateSampleData = () => {
  const networks = ["Instagram", "Facebook", "Twitter", "LinkedIn"];
  const result = [];
  networks.forEach((network) => {
    result.push({
      network,
      visitors: getRandomInt(1000, 5000),
      percentVisitors: getRandomInt(10, 80),
    });
  });

  return result;
};

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
  background-color: #1565d8;
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
  const [tableData] = React.useState(generateSampleData());
  return (
    <Paper style={{ height: "100%", maxHeight: 400 }}>
      <TableContainer style={{ height: "100%", maxHeight: 400, width: "100%" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableHeadCell>Network</TableHeadCell>
              <TableHeadCell>Visitors</TableHeadCell>
              <TableHeadCell>{""}</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
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
    </Paper>
  );
};

export { SocialTrafficTable };
