// TODO: Add proptypes everywhere
// TODO: add aria labels
// TODO: Delete unused component files
// TODO: Make navpane header fixed

import { Container, Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { DailyVisitorsChart } from "./main/DailyVisitorsChart";
import { MetricSummary } from "./main/MetricSummary";
import { SocialTrafficTable } from "./main/SocialTrafficTable";
import { VisitorsTable } from "./main/VisitorsTable";

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

const Root = styled.main`
  background-color: #fbfbfd;
  width: 100%;
  ${({ theme }) => `
    padding-top: ${theme.ui.headerHeight};
    ${theme.breakpoints.up("lg")} {
      padding-left: ${theme.ui.navPaneWidth};
    }  
  `}
`;

const DailyVisitorChartWrapper = styled.div`
  ${({ theme }) => `
    padding-top: ${theme.padding(4)}px;
    padding-bottom: ${theme.padding(3)}px;
  `}
`;

const MetricSummaryGrid = styled(Grid)`
  padding: ${({ theme }) => theme.padding(1)}px 0;
`;

const TablesGrid = styled(Grid)`
  padding: ${({ theme }) => theme.padding(1)}px 0;
  padding-bottom: ${({ theme }) => theme.padding(2)}px;
`;

const Main = () => {
  const [realtimeUsers] = React.useState(generateSampleChartData());
  const [totalVisits] = React.useState(generateSampleChartData());
  const [bounceRate] = React.useState(generateSampleChartData());
  const [visitDuration] = React.useState(generateSampleChartData());

  return (
    <Root>
      <Container maxWidth="lg">
        <DailyVisitorChartWrapper>
          <DailyVisitorsChart />
        </DailyVisitorChartWrapper>
        <MetricSummaryGrid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <MetricSummary
              title="Realtime Users"
              metric="56"
              change={9.8}
              chartData={realtimeUsers}
              chartColors={{ stroke: "#1565D8", fill: "#E7EFFA" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricSummary
              title="Total Visits"
              metric="54,598"
              change={-11.9}
              chartData={totalVisits}
              chartColors={{ stroke: "#33AA44", fill: "#EAF6EC" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricSummary
              title="Bounce Rate"
              metric="73.67%"
              change={12.2}
              chartData={bounceRate}
              chartColors={{ stroke: "#6656F4", fill: "#EFEEFE" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricSummary
              title="Visit Duration"
              metric="1m 4s"
              change={19.6}
              chartData={visitDuration}
              chartColors={{ stroke: "#F9CF56", fill: "#FEFAEE" }}
            />
          </Grid>
        </MetricSummaryGrid>
        <TablesGrid container spacing={4}>
          <Grid item xs={12} lg={8}>
            <VisitorsTable />
          </Grid>
          <Grid item xs={12} lg={4}>
            <SocialTrafficTable />
          </Grid>
        </TablesGrid>
      </Container>
    </Root>
  );
};

export { Main };
