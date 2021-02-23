// TODO: add aria labels
// TODO: Make navpane header fixed

import { Container, Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { DailyVisitorsChart } from "./main/DailyVisitorsChart";
import { MetricSummaryCharts } from "./main/MetricSummaryCharts";
import { SocialTrafficTable } from "./main/SocialTrafficTable";
import { VisitorsTable } from "./main/VisitorsTable";

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

const TablesGrid = styled(Grid)`
  padding: ${({ theme }) => theme.padding(1)}px 0;
  padding-bottom: ${({ theme }) => theme.padding(2)}px;
`;

const Main = () => {
  return (
    <Root>
      <Container maxWidth="lg">
        <DailyVisitorChartWrapper>
          <DailyVisitorsChart />
        </DailyVisitorChartWrapper>
        <MetricSummaryCharts />
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
