import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import { Card, CardContent } from "../common/Card";
import { Dropdown } from "../common/Dropdown";
import { customTooltip } from "./dailyVisitorChart/Tooltip";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateSampleData = () => {
  const result = [];
  for (let i = 1; i <= 31; i++) {
    result.push({
      name: i,
      visitors: getRandomInt(1000, 8000),
    });
  }

  return result;
};

const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const years = ["2018", "2019", "2020", "2021"];

const AxisTickText = styled.text`
  font-size: 0.7rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

const HeaderControlsWrapper = styled.div`
  display: flex;
`;

const Spacer = styled.div`
  margin-right: ${({ theme, h }) => theme.padding(h)}px;
  margin-bottom: ${({ theme, v }) => theme.padding(v)}px;
`;

const ChartWrapper = styled.div`
  width: "100%";
  height: 200px;
`;

const YAxisTick = ({ x, y, payload }) => {
  const tickFormatter = (number) => `${number / 1000}K`;

  return (
    <g transform={`translate(${x},${y})`}>
      <AxisTickText x={0} y={0} dy={20} dx={-5} textAnchor="end" fill="#999">
        {tickFormatter(payload?.value)}
      </AxisTickText>
    </g>
  );
};

const XAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <AxisTickText x={0} y={0} dy={10} dx={5} textAnchor="end" fill="#999">
        {payload?.value}
      </AxisTickText>
    </g>
  );
};

const DailyVisitorsChart = () => {
  const [data, setData] = React.useState(generateSampleData());
  const [currentMonth, setCurrentMonth] = React.useState("january");
  const [currentYear, setCurrentYear] = React.useState("2018");

  const onMonthChange = (e) => {
    setCurrentMonth(e.target.value);
    setData(generateSampleData());
  };

  const onYearChange = (e) => {
    setCurrentYear(e.target.value);
    setData(generateSampleData());
  };

  return (
    <Card
      Header={() => (
        <HeaderWrapper>
          <HeaderTitle>Daily Visitors</HeaderTitle>
          <HeaderControlsWrapper>
            <Dropdown
              options={months.map((month) => ({
                label: month.charAt(0).toUpperCase() + month.slice(1),
                value: month,
              }))}
              current={currentMonth}
              onChange={onMonthChange}
            />
            <Spacer h={2} />
            <Dropdown
              options={years.map((year) => ({ label: year, value: year }))}
              current={currentYear}
              onChange={onYearChange}
            />
          </HeaderControlsWrapper>
        </HeaderWrapper>
      )}
    >
      <CardContent>
        <ChartWrapper>
          <Spacer v={2} />
          <ResponsiveContainer>
            <BarChart data={data} margin={{ left: 0, right: -40 }}>
              <CartesianGrid
                strokeDasharray="0"
                stroke="#DDDDDD"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={<XAxisTick />}
              />
              <YAxis
                orientation="right"
                tick={<YAxisTick />}
                domain={[0, 9000]}
                axisLine={false}
                tickSize={20}
                tickLine={{ stroke: "#DDDDDD" }}
                ticks={[3000, 6000, 9000]}
              />
              <Tooltip
                content={customTooltip(currentMonth, currentYear)}
                cursor={{ fill: "#EEEEEE" }}
              />
              <Bar dataKey="visitors" fill="#1565D8" barSize={12} />
            </BarChart>
          </ResponsiveContainer>
        </ChartWrapper>
      </CardContent>
    </Card>
  );
};

export { DailyVisitorsChart };
