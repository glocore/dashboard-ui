import React from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import { ExternalLink as ExternalLinkIcon } from "../../icons";
import { Card } from "../common/Card";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateSampleChartData = () => {
  const result = [];
  for (let i = 1; i <= 10; i++) {
    result.push({
      name: i,
      data: getRandomInt(5, 10),
    });
  }

  return result;
};

const generateSampleData = () => {
  const routes = [
    "/store/",
    "/store/symbols-styleguides",
    "/store/dashboard-ui-kit",
    "/store/webflow-cards",
  ];
  const result = [];
  routes.forEach((route) => {
    result.push({
      route,
      visitors: getRandomInt(1000, 5000),
      uniquePageVisits: getRandomInt(1000, 5000),
      bounceRate: getRandomInt(50, 90),
      chartData: generateSampleChartData(),
    });
  });

  return result;
};

const HeaderText = styled.span`
  display: block;
  font-size: 1.2rem;
  font-weight: 500;
  margin: ${({ theme }) => theme.padding(1)}px 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Tr = styled.tr`
  border-bottom: ${({ theme }) => theme.surface.border};
  cursor: pointer;

  tbody &:hover {
    background-color: #eeeeee;
  }

  tbody &:active {
    background-color: #dddddd;
  }
`;

const Td = styled.td`
  text-align: left;
  padding: ${({ theme }) => `${theme.padding(3)}px ${theme.padding(2)}px`};

  &:first-child {
    padding-left: ${({ theme }) => theme.padding(4)}px;
  }
  &:last-child {
    padding-right: ${({ theme }) => theme.padding(4)}px;
  }
`;

const Th = styled.th`
  text-align: left;
  text-transform: uppercase;
  color: #999;
  font-size: 0.75rem;
  font-weight: 500;
  padding: ${({ theme }) => `${theme.padding(2)}px ${theme.padding(2)}px`};

  &:first-child {
    padding-left: ${({ theme }) => theme.padding(4)}px;
  }
  &:last-child {
    padding-right: ${({ theme }) => theme.padding(4)}px;
  }
`;

const externalLinkIconStyle = {
  width: 20,
  height: 20,
  color: "#999999",
  marginTop: 3,
};

const VisitorsTable = () => {
  const [tableData] = React.useState(generateSampleData());
  return (
    <Card Header={() => <HeaderText>Most Visited Pages</HeaderText>}>
      <Table cellspacing="0" cellpadding="0">
        <thead>
          <Tr>
            <Th>Page Name</Th>
            <Th>{""}</Th>
            <Th>Visitors</Th>
            <Th style={{ minWidth: 130 }}>Unique Page Visits</Th>
            <Th style={{ minWidth: 90 }}>Bounce Rate</Th>
            <Th style={{ minWidth: 130 }}>{""}</Th>
          </Tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <Tr>
              <Td>{row.route}</Td>
              <Td>{<ExternalLinkIcon style={externalLinkIconStyle} />}</Td>
              <Td>{row.visitors.toLocaleString()}</Td>
              <Td>{row.uniquePageVisits.toLocaleString()}</Td>
              <Td>{row.bounceRate}%</Td>
              <Td>
                {
                  <div style={{ width: "100%", height: 50 }}>
                    <ResponsiveContainer>
                      <AreaChart data={row.chartData} margin={false}>
                        <Area
                          type="linear"
                          dataKey="data"
                          stroke="#1565D8"
                          strokeWidth={3}
                          fill="#E7EFFA"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                }
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export { VisitorsTable };
