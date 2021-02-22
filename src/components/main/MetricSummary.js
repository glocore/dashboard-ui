import styled from "styled-components";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "../common/Card";
import {
  MetricDown as MetricDownIcon,
  MetricUp as MetricUpIcon,
} from "../../icons";
import { Paper } from "@material-ui/core";

const Title = styled.span`
  display: block;
  text-transform: uppercase;
  text-align: center;
  color: #999;
  font-size: 0.75rem;
  font-weight: 500;
`;

const Metric = styled.span`
  display: block;
  text-align: center;
  font-size: 1.75rem;
  padding: ${({ theme }) => theme.padding(1.5)}px 0;
`;

const Change = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${({ theme }) => theme.padding(0.5)}px;
  padding-bottom: ${({ theme }) => theme.padding(2)}px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ value }) => (value > 0 ? "#33AA44 " : "#E54A2E")};
`;

const metricChangeIconStyles = {
  width: 14,
  height: 14,
  marginLeft: 8,
};

const MetricSummary = ({ title, metric, change, chartData, chartColors }) => {
  return (
    <Paper elevation={1}>
      <CardContent>
        <Title>{title}</Title>
        <Metric>{metric}</Metric>
        <Change value={change}>
          {change > 0 ? "+" : ""}
          {change}%
          {change > 0 ? (
            <MetricUpIcon style={metricChangeIconStyles} />
          ) : (
            <MetricDownIcon style={metricChangeIconStyles} />
          )}
        </Change>
        <div style={{ width: "100%", height: 50 }}>
          <ResponsiveContainer>
            <AreaChart data={chartData} margin={false}>
              <Area
                type="linear"
                dataKey="data"
                stroke={chartColors.stroke}
                strokeWidth={3}
                fill={chartColors.fill}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Paper>
  );
};

export { MetricSummary };
