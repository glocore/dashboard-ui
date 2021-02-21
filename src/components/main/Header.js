import React from "react";
import styled from "styled-components";
import { Dropdown } from "../common/Dropdown";

const Root = styled.div`
  ${({ theme }) => `
    background-color: ${theme.surface.backgroundColor};
    border-bottom: ${theme.surface.border};
    `}
`;

const HeaderContent = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.padding(4)}px;
  margin: 0 auto;
  max-width: 1280px;
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
      <HeaderContent>
        <Title>Dashboard</Title>
        <Dropdown
          options={[
            { label: "🇬🇧 EN", value: "en" },
            { label: "🇪🇸 ES", value: "es" },
          ]}
          current={currentLanguage}
          onChange={onLanguageChange}
        />
      </HeaderContent>
    </Root>
  );
};

export { Header };
