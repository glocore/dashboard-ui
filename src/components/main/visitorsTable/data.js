import React from "react";

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

const useData = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(generateSampleData());

  React.useEffect(() => {
    setTimeout(() => {
      setData(generateSampleData());
      setLoading(false);
    }, getRandomInt(2000, 3000));
  }, []);

  return {
    loading,
    data,
  };
};

export { useData };
