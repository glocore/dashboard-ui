import styled from "styled-components";

const TooltipWrapper = styled.div`
  ${({ theme }) => `
    background-color: ${theme.surface.backgroundColor};
    ${theme.elevation(2)}
    padding: ${theme.padding(2)}px;
  `}
`;

const TooltipDate = styled.span`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.padding(2)}px;
  text-transform: uppercase;
  color: #aaaaaa;
`;

const LegendWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LegendText = styled.span`
  text-transform: capitalize;
`;

const LegendDot = styled.div`
  width: 7px;
  height: 7px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #1565d8;
`;

const TooltipLegendData = ({ payload }) => {
  return (
    <LegendWrapper>
      <LegendDot />
      <LegendText>{`${
        payload?.name
      }: ${payload?.value.toLocaleString()}`}</LegendText>
    </LegendWrapper>
  );
};

const customTooltip = (month, year) => ({ payload, label }) => {
  const getDateString = () => {
    let ordinal = "th";

    if (label < 11 || label > 20) {
      switch (label % 10) {
        case 1:
          ordinal = "st";
          break;
        case 2:
          ordinal = "nd";
          break;
        case 3:
          ordinal = "rd";
          break;
        default:
          break;
      }
    }

    return `${label}${ordinal} ${month} ${year}`;
  };

  return (
    <TooltipWrapper>
      <TooltipDate>{getDateString()}</TooltipDate>
      {payload ? <TooltipLegendData payload={payload[0]} /> : null}
    </TooltipWrapper>
  );
};

export { customTooltip };
