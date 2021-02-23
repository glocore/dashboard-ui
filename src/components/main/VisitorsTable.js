import { Table, TableBody, TableContainer, TableHead } from "@material-ui/core";
import React from "react";
import styled, { ThemeContext } from "styled-components";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { ExternalLink as ExternalLinkIcon } from "../../icons";
import { Card, CardHeader, CardHeaderText } from "../common/Card";
import { TableHeadCell, TableCell, TableRow } from "../common/Table";
import { useData } from "./visitorsTable/data";

const columns = [
  { label: "Page Name" },
  { label: "" },
  { label: "Visitors" },
  { label: "Unique Page Visits" },
  { label: "Bounce Rate" },
  { label: "", minWidth: 100 },
];

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
    "/store/symbols-styleguides",
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

const StyledExternalLinkIcon = styled(ExternalLinkIcon)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.fontColor.light};
  margin-top: 6px;
`;

const VisitorsTable = () => {
  const { loading, data } = useData();
  const theme = React.useContext(ThemeContext);

  return (
    <Card style={{ height: 500 }} loading={loading}>
      <CardHeader>
        <CardHeaderText>Most Visited Pages</CardHeaderText>
      </CardHeader>
      <TableContainer style={{ maxHeight: 400, width: "100%" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableHeadCell
                  key={index}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableHeadCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow hover key={index}>
                <TableCell>{row.route}</TableCell>
                <TableCell>
                  <StyledExternalLinkIcon />
                </TableCell>
                <TableCell>{row.visitors.toLocaleString()}</TableCell>
                <TableCell>{row.uniquePageVisits.toLocaleString()}</TableCell>
                <TableCell>{row.bounceRate}%</TableCell>
                <TableCell>
                  {
                    <div style={{ width: "100%", height: 50 }}>
                      <ResponsiveContainer>
                        <AreaChart data={row.chartData} margin={false}>
                          <Area
                            type="linear"
                            dataKey="data"
                            stroke={theme.palette.primary.main}
                            strokeWidth={3}
                            fill={theme.palette.primary.light}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export { VisitorsTable };
