import React from "react";

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

const useChartData = () => {
  const [loading, setLoading] = React.useState(true);
  const [chartData, setChartData] = React.useState(null);
  const [currentMonth, setCurrentMonth] = React.useState({
    label: "December",
    value: "december",
  });
  const [currentYear, setCurrentYear] = React.useState({
    label: "2018",
    value: "2018",
  });

  React.useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setChartData(generateSampleData());
      setLoading(false);
    }, getRandomInt(500, 1000));
  }, [currentMonth, currentYear]);

  return {
    loading,
    months,
    years,
    currentMonth,
    currentYear,
    chartData,
    setCurrentMonth,
    setCurrentYear,
  };
};

export { useChartData };
