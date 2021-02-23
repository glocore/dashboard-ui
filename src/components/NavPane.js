import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Beaker as BeakerIcon,
  Briefcase as BriefcaseIcon,
  Calendar as CalendarIcon,
  Dashboard as DashboardIcon,
  Home as HomeIcon,
  Inbox as InboxIcon,
} from "../icons";
import profileImage from "../profile.jpg";
import { NavChild, NavItem } from "./navPane/NavItem";
import { Recents } from "./navPane/Recents";
import { Drawer, Hidden } from "@material-ui/core";
import { Profile } from "./navPane/Profile";

const Root = styled.nav`
  ${({ theme }) => `
    border-right: ${theme.surface.border};
    width: ${theme.ui.navPaneWidth};  
  `}
`;

const TopIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  color: #a09fa4;
  border-bottom: ${({ theme }) => theme.surface.border};
  ${({ theme }) => theme.clickable}
`;

const TopIcon = () => (
  <TopIconWrapper>
    <HomeIcon width={30} height={30} />
  </TopIconWrapper>
);

const NavPane = () => {
  return (
    <Root>
      <TopIcon />
      <Profile profileImage={profileImage} />
      <NavItem Icon={DashboardIcon} active={true} label="Dashboard">
        <NavChild active={true} label="Page Visitors" />
        <NavChild label="Post Performance" />
        <NavChild label="Team Overall" />
      </NavItem>
      <NavItem Icon={CalendarIcon} label="Calendar"></NavItem>
      <NavItem Icon={InboxIcon} label="Inbox"></NavItem>
      <NavItem Icon={BriefcaseIcon} label="Invoicing"></NavItem>
      <NavItem Icon={BeakerIcon} label="Lab / Experimental"></NavItem>
      <Recents />
    </Root>
  );
};

const container = window !== undefined ? () => window.document.body : undefined;

const NavDrawer = ({ open, onClose }) => (
  <>
    <Hidden lgUp>
      <Drawer
        variant="temporary"
        container={container}
        open={open}
        onClose={onClose}
      >
        <NavPane />
      </Drawer>
    </Hidden>
    <Hidden mdDown>
      <Drawer variant="permanent">
        <NavPane />
      </Drawer>
    </Hidden>
  </>
);

NavDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export { NavPane, NavDrawer };
