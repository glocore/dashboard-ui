import React from "react";
import styled, { keyframes } from "styled-components";
import { Card, HeaderText } from "../common/Card";
import { Table, Td, Th, Tr } from "../common/Table";

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
    <div
      style={{
        width: "100%",
        height: 4,
        backgroundColor: "#dddddd",
        borderRadius: 4,
      }}
    >
      <Progress percent={percent} />
    </div>
  );
};

const SocialTrafficTable = () => {
  const [tableData] = React.useState(generateSampleData());
  return (
    <Card Header={() => <HeaderText>Social Media Traffic</HeaderText>}>
      <Table>
        <thead>
          <Tr>
            <Th>Network</Th>
            <Th>Visitors</Th>
            <Th style={{ minWidth: 100 }}>{""}</Th>
          </Tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <Tr>
              <Td>{row.network}</Td>
              <Td>{row.visitors.toLocaleString()}</Td>
              <Td>
                <PercentBar percent={row.percentVisitors} />
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export { SocialTrafficTable };
