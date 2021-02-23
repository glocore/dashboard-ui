// Add header to cards
// TODO: extract sample data source to separate file; add timeout to emulate remote request
import { LinearProgress } from "@material-ui/core";
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
import styled, { ThemeContext } from "styled-components";
import { Card, CardContent, CardHeader, CardHeaderText } from "../common/Card";
import { Dropdown } from "../common/Dropdown";
import { Spacer } from "../common/Spacer";
import { useChartData } from "./dailyVisitorChart/data";
import { customTooltip } from "./dailyVisitorChart/Tooltip";

const AxisTickText = styled.text`
  font-size: 0.7rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderControlsWrapper = styled.div`
  display: flex;
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
  const theme = React.useContext(ThemeContext);
  const chartData = useChartData();

  const onMonthChange = (month) => {
    chartData.setCurrentMonth(month);
  };

  const onYearChange = (year) => {
    chartData.setCurrentYear(year);
  };

  return (
    <Card
      style={{ height: 340 }}
      loading={!chartData.chartData && chartData.loading}
    >
      <CardHeader>
        <HeaderWrapper>
          <CardHeaderText>Daily Visitors</CardHeaderText>
          <HeaderControlsWrapper>
            <Dropdown
              options={chartData.months.map((month) => ({
                label: month.charAt(0).toUpperCase() + month.slice(1),
                value: month,
              }))}
              current={chartData.currentMonth}
              onChange={onMonthChange}
            />
            <Spacer h={2} />
            <Dropdown
              options={chartData.years.map((year) => ({
                label: year,
                value: year,
              }))}
              current={chartData.currentYear}
              onChange={onYearChange}
            />
          </HeaderControlsWrapper>
        </HeaderWrapper>
      </CardHeader>
      <LinearProgress style={{ opacity: chartData.loading ? 1 : 0 }} />
      <CardContent>
        <ChartWrapper>
          <ResponsiveContainer>
            <BarChart
              data={chartData.chartData}
              margin={{ left: 0, right: -40 }}
            >
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
                content={customTooltip(
                  chartData.currentMonth.value,
                  chartData.currentYear.value
                )}
                cursor={{ fill: "#EEEEEE" }}
              />
              <Bar
                dataKey="visitors"
                fill={theme.palette.primary.main}
                barSize={12}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartWrapper>
      </CardContent>
    </Card>
  );
};

export { DailyVisitorsChart };
