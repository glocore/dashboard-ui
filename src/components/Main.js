// TODO: Make header fixed while scrolling
// TODO: Add proptypes everywhere
import React from "react";
import styled from "styled-components";
import { Spacer } from "./common/Spacer";
import { DailyVisitorsChart } from "./main/DailyVisitorsChart";
import { Header } from "./main/Header";
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

const Root = styled.div`
  background-color: #fbfbfd;
  min-height: 100vh;
`;

const MainWrapper = styled.div`
  padding: ${({ theme }) => theme.padding(4)}px;
  max-width: 1280px;
  margin: 0 auto;
`;

const MetricSummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${({ theme }) => theme.padding(4)}px;
`;

const TablesGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: ${({ theme }) => theme.padding(4)}px;
`;

const Main = () => {
  const [realtimeUsers] = React.useState(generateSampleChartData());
  const [totalVisits] = React.useState(generateSampleChartData());
  const [bounceRate] = React.useState(generateSampleChartData());
  const [visitDuration] = React.useState(generateSampleChartData());

  return (
    <Root>
      <Header />
      <MainWrapper>
        <DailyVisitorsChart />
        <Spacer v={4} />
        <MetricSummaryGrid>
          <MetricSummary
            title="Realtime Users"
            metric="56"
            change={9.8}
            chartData={realtimeUsers}
            chartColors={{ stroke: "#1565D8", fill: "#E7EFFA" }}
          />
          <MetricSummary
            title="Total Visits"
            metric="54,598"
            change={-11.9}
            chartData={totalVisits}
            chartColors={{ stroke: "#33AA44", fill: "#EAF6EC" }}
          />
          <MetricSummary
            title="Bounce Rate"
            metric="73.67%"
            change={12.2}
            chartData={bounceRate}
            chartColors={{ stroke: "#6656F4", fill: "#EFEEFE" }}
          />
          <MetricSummary
            title="Visit Duration"
            metric="1m 4s"
            change={19.6}
            chartData={visitDuration}
            chartColors={{ stroke: "#F9CF56", fill: "#FEFAEE" }}
          />
        </MetricSummaryGrid>
        <Spacer v={4} />
        <TablesGrid>
          <VisitorsTable />
          <SocialTrafficTable />
        </TablesGrid>
      </MainWrapper>
    </Root>
  );
};

export { Main };
