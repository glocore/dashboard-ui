import {
  // Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { ExternalLink as ExternalLinkIcon } from "../../icons";
import { Card, HeaderText } from "../common/Card";
import { Table, Td, Th, Tr } from "../common/Table";

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
      {/* <TableContainer style={{ maxHeight: 400, width: "100%" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell key={index} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow hover key={index}>
                <TableCell>{row.route}</TableCell>
                <TableCell>
                  {<ExternalLinkIcon style={externalLinkIconStyle} />}
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
                            stroke="#1565D8"
                            strokeWidth={3}
                            fill="#E7EFFA"
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
      </TableContainer> */}
      <Table>
        <thead>
          <Tr>
            <Th>Page Name</Th>
            <Th>{""}</Th>
            <Th>Visitors</Th>
            <Th>Unique Page Visits</Th>
            <Th style={{ paddingRight: 0 }}>Bounce Rate</Th>
            <Th style={{ minWidth: 80, paddingLeft: 0 }}>{""}</Th>
          </Tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <Tr key={index}>
              <Td>{row.route}</Td>
              <Td>{<ExternalLinkIcon style={externalLinkIconStyle} />}</Td>
              <Td>{row.visitors.toLocaleString()}</Td>
              <Td>{row.uniquePageVisits.toLocaleString()}</Td>
              <Td style={{ paddingRight: 0 }}>{row.bounceRate}%</Td>
              <Td style={{ paddingLeft: 0 }}>
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
