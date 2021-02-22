// TODO: Make layout responsive
// TODO: Make header fixed while scrolling
// TODO: Add proptypes everywhere
import { Container, Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Spacer } from "./common/Spacer";
import { DailyVisitorsChart } from "./main/DailyVisitorsChart";
import { MetricSummary } from "./main/MetricSummary";
import { SocialTrafficTable } from "./main/SocialTrafficTable";
import { VisitorsTable } from "./main/VisitorsTable";
import { navPaneWidth } from "./NavPane";

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
  padding-top: 70px;
  @media (min-width: 1280px) {
    padding-left: ${navPaneWidth}px;
  }
`;

const MainWrapper = styled.div`
  padding: ${({ theme }) => theme.padding(4)}px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

const MetricSummaryGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: ${({ theme }) => theme.padding(4)}px;
`;

const TablesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.padding(4)}px;
  @media (min-width: 1280px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const Main = () => {
  const [realtimeUsers] = React.useState(generateSampleChartData());
  const [totalVisits] = React.useState(generateSampleChartData());
  const [bounceRate] = React.useState(generateSampleChartData());
  const [visitDuration] = React.useState(generateSampleChartData());

  return (
    <Root>
      <Container maxWidth="lg">
        <Grid container spacing={4} style={{ padding: "32px 0" }}>
          <Grid item xs={12} md={6} lg={3}>
            <MetricSummary
              title="Realtime Users"
              metric="56"
              change={9.8}
              chartData={realtimeUsers}
              chartColors={{ stroke: "#1565D8", fill: "#E7EFFA" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MetricSummary
              title="Total Visits"
              metric="54,598"
              change={-11.9}
              chartData={totalVisits}
              chartColors={{ stroke: "#33AA44", fill: "#EAF6EC" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MetricSummary
              title="Bounce Rate"
              metric="73.67%"
              change={12.2}
              chartData={bounceRate}
              chartColors={{ stroke: "#6656F4", fill: "#EFEEFE" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MetricSummary
              title="Visit Duration"
              metric="1m 4s"
              change={19.6}
              chartData={visitDuration}
              chartColors={{ stroke: "#F9CF56", fill: "#FEFAEE" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
};

export { Main };
