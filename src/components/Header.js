// Fix width if header content for large screens
import { AppBar, Container, makeStyles } from "@material-ui/core";
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
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
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
  const classes = useStyles();
  const [currentLanguage, setCurrentLanguage] = React.useState({
    label: "🇬🇧 EN",
    value: "en",
  });

  const onLanguageChange = (value) => {
    setCurrentLanguage(value);
  };

  return (
    <AppBar position="fixed" elevation={0} className={classes.appBar}>
      <HeaderContent maxWidth="lg">
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
