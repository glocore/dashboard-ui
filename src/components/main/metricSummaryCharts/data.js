import React from "react";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const sampleMetricSummaryData = [
  { metric: "56", change: 9.8 },
  { metric: "54,598", change: -11.9 },
  { metric: "73.67%", change: 12.2 },
  { metric: "1m 4s", change: 19.6 },
];

const generateSampleData = () => {
  const generateSampleChartData = () => {
    const chartData = [];

    for (let i = 1; i <= 10; i++) {
      chartData.push({
        name: i,
        data: getRandomInt(5, 10),
      });
    }

    return chartData;
  };

  const result = sampleMetricSummaryData.map((data) => ({
    ...data,
    chartData: generateSampleChartData(),
  }));

  return result;
};

const initialState = {
  loading: true,
  realtimeUsers: null,
  totalVisits: null,
  bounceRate: null,
  visitDuration: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "bulkUpdate": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      break;
  }
};

const useMetricSummaryData = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    setTimeout(() => {
      const sampleData = generateSampleData();
      dispatch({
        type: "bulkUpdate",
        payload: {
          realtimeUsers: sampleData[0],
          totalVisits: sampleData[1],
          bounceRate: sampleData[2],
          visitDuration: sampleData[3],
          loading: false,
        },
      });
    }, getRandomInt(1000, 2000));
  }, []);

  return {
    ...state,
  };
};

export { useMetricSummaryData };
