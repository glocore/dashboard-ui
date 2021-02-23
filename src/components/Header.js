import { AppBar, Container } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Drawer as DrawerIcon } from "../icons";
import { Dropdown } from "./common/Dropdown";

const languages = [
  { label: <span>&#127468;&#127463; &nbsp; EN</span>, value: "en" },
  { label: <span>&#127466;&#127480; &nbsp; ES</span>, value: "es" },
];

const Root = styled(AppBar)`
  ${({ theme }) => `
    border-bottom: ${theme.surface.border};
    background-color: ${theme.surface.backgroundColor};
    color: ${theme.fontColor.dark};
    ${theme.breakpoints.up("lg")} {
      width: calc(100% - ${theme.ui.navPaneWidth});
      margin-left: ${theme.ui.navPaneWidth};
    }
  `}
`;

const HeaderLeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DrawerToggle = styled.button`
  background: none;
  border: none;
  margin-top: 4px;
  ${({ theme }) => `
    margin-right: ${theme.padding(2)}px;
    ${theme.breakpoints.up("lg")} {
      display: none;
    }
  
  `}
`;

const HeaderContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: ${({ theme }) => theme.padding(2)}px;
  padding-bottom: ${({ theme }) => theme.padding(2)}px;
`;

const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

const Header = ({ onDrawerToggleClick }) => {
  const [currentLanguage, setCurrentLanguage] = React.useState(languages[0]);

  const onLanguageChange = (value) => {
    setCurrentLanguage(value);
  };

  return (
    <Root position="fixed" elevation={0}>
      <HeaderContent maxWidth="lg">
        <HeaderLeftWrapper>
          <DrawerToggle onClick={onDrawerToggleClick}>
            <DrawerIcon width={25} height={25} />
          </DrawerToggle>
          <Title>Dashboard</Title>
        </HeaderLeftWrapper>
        <Dropdown
          options={languages}
          current={currentLanguage}
          onChange={onLanguageChange}
        />
      </HeaderContent>
    </Root>
  );
};

Header.propTypes = {
  onDrawerToggleClick: PropTypes.func,
};

export { Header };
