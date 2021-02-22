import { AppBar, makeStyles } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Drawer as DrawerIcon } from "../icons";
import { Dropdown } from "./common/Dropdown";
import { navPaneWidth } from "./NavPane";

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${navPaneWidth}px)`,
      marginLeft: navPaneWidth,
    },
    borderBottom: "1px solid #e9ecf3",
  },
}));

const HeaderLeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DrawerToggle = styled.button`
  background: none;
  border: none;
  margin-right: ${({ theme }) => theme.padding(2)}px;
  @media (min-width: 1280px) {
    display: none;
  }
`;

const HeaderContent = styled.div`
  height: 70px;
  width: calc(100% - ${({ theme }) => theme.padding(8)}px);
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

const Header = ({ onDrawerToggleClick }) => {
  const classes = useStyles();
  const [currentLanguage, setCurrentLanguage] = React.useState("en");

  const onLanguageChange = (e) => {
    setCurrentLanguage(e.target.value);
  };

  return (
    <AppBar
      position="fixed"
      color="white"
      elevation={0}
      className={classes.appBar}
    >
      <HeaderContent>
        <HeaderLeftWrapper>
          <DrawerToggle onClick={onDrawerToggleClick}>
            <DrawerIcon width={25} height={25} />
          </DrawerToggle>
          <Title>Dashboard</Title>
        </HeaderLeftWrapper>
        <Dropdown
          options={[
            { label: "🇬🇧 EN", value: "en" },
            { label: "🇪🇸 ES", value: "es" },
          ]}
          current={currentLanguage}
          onChange={onLanguageChange}
        />
      </HeaderContent>
    </AppBar>
  );
};

export { Header };
