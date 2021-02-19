import React from "react";
import styled from "styled-components";
import { Dropdown } from "../common/Dropdown";

const Root = styled.div`
  ${({ theme }) => `
    height: 70px;
    background-color: ${theme.surface.backgroundColor};
    border-bottom: ${theme.surface.border};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${theme.padding(4)}px;
  `}
`;

const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

const Header = () => {
  const [currentLanguage, setCurrentLanguage] = React.useState("en");

  const onLanguageChange = (e) => {
    setCurrentLanguage(e.target.value);
  };

  return (
    <Root>
      <Title>Dashboard</Title>
      <Dropdown
        options={[
          { label: "🇬🇧 EN", value: "en" },
          { label: "🇪🇸 ES", value: "es" },
        ]}
        current={currentLanguage}
        onChange={onLanguageChange}
      />
    </Root>
  );
};

export { Header };
