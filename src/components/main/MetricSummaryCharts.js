import styled from "styled-components";
import { MetricSummary } from "./metricSummaryCharts/MetricSummary";
import { useMetricSummaryData } from "./metricSummaryCharts/data";
import { Grid } from "@material-ui/core";

const MetricSummaryGrid = styled(Grid)`
  padding: ${({ theme }) => theme.padding(1)}px 0;
`;

const MetricSummaryCharts = () => {
  const metricSummaryData = useMetricSummaryData();

  return (
    <MetricSummaryGrid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <MetricSummary
          loading={metricSummaryData.loading}
          title="Realtime Users"
          data={metricSummaryData.realtimeUsers}
          chartColors={{ stroke: "#1565D8", fill: "#E7EFFA" }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <MetricSummary
          loading={metricSummaryData.loading}
          title="Total Visits"
          data={metricSummaryData.totalVisits}
          chartColors={{ stroke: "#33AA44", fill: "#EAF6EC" }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <MetricSummary
          loading={metricSummaryData.loading}
          title="Bounce Rate"
          data={metricSummaryData.bounceRate}
          chartColors={{ stroke: "#6656F4", fill: "#EFEEFE" }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <MetricSummary
          loading={metricSummaryData.loading}
          title="Visit Duration"
          data={metricSummaryData.visitDuration}
          chartColors={{ stroke: "#F9CF56", fill: "#FEFAEE" }}
        />
      </Grid>
    </MetricSummaryGrid>
  );
};

export { MetricSummaryCharts };
