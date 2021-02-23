import React from "react";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateSampleData = () => {
  const networks = ["Instagram", "Facebook", "Twitter", "LinkedIn"];
  const result = [];
  networks.forEach((network) => {
    result.push({
      network,
      visitors: getRandomInt(1000, 5000),
      percentVisitors: getRandomInt(10, 80),
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
